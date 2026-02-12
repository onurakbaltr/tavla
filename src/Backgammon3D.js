import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';
import { CheckersManager } from './CheckersManager.js';
import { DiceManager } from './DiceManager.js';
import { TextureGenerator } from './TextureGenerator.js';

export class Backgammon3D {
    constructor() {
        this.container = null;
        this.renderer = null;
        this.scene = null;
        this.camera = null;
        this.controls = null;
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();

        this.boardGroup = new THREE.Group();
        this.checkersManager = null;
        this.diceManager = null;
        this.points = [];

        this.callbacks = {
            onPointClick: () => { },
            onRollClick: () => { },
        };
    }

    async animateMove(player, move) {
        if (!this.checkersManager) return;

        const checker = this.checkersManager.getTopChecker(move.from);
        if (!checker) {
            console.warn('No checker found at', move.from);
            return;
        }

        const toStackHeight = this.checkersManager.getStackHeight(move.to);
        const targetPos = this.checkersManager.getPositionForStack(move.to, toStackHeight);

        return new Promise(resolve => {
            const arcHeight = 12;
            const startY = checker.position.y;

            gsap.to(checker.position, {
                duration: 0.55,
                x: targetPos.x,
                z: targetPos.z,
                ease: "power2.inOut"
            });

            gsap.to(checker.position, {
                duration: 0.275,
                y: arcHeight,
                ease: "power2.out",
                yoyo: true,
                repeat: 1,
                onComplete: () => {
                    checker.position.y = targetPos.y;
                    resolve();
                }
            });
        });
    }

    init(containerElement) {
        if (this.renderer) return;

        this.container = containerElement;

        // ─── Scene ───
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x0d0d0d);

        // Gradient background — dark environment
        this.scene.fog = new THREE.FogExp2(0x0d0d0d, 0.012);

        // ─── Camera ───
        const width = this.container.clientWidth;
        const height = this.container.clientHeight;
        this.camera = new THREE.PerspectiveCamera(50, 0.5, 0.1, 100);
        this.camera.position.set(0, 100, 32);
        this.camera.lookAt(0, 0, 2);

        // ─── Renderer ───
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: false,
            powerPreference: 'high-performance'
        });
        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.5;
        this.renderer.outputColorSpace = THREE.SRGBColorSpace;

        this.container.appendChild(this.renderer.domElement);

        // ─── Controls ───
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.06;
        this.controls.maxPolarAngle = Math.PI / 2.1;
        this.controls.minPolarAngle = Math.PI / 8;
        this.controls.minDistance = 25;
        this.controls.maxDistance = 70;
        this.controls.target.set(0, 0, 2);
        this.controls.enablePan = false;
        this.controls.enableRotate = false;

        // ─── Lighting ───
        this.setupLighting();

        // ─── Board ───
        this.createBoard();

        // ─── Floor / Environment ───
        this.createEnvironment();

        // ─── Managers ───
        this.checkersManager = new CheckersManager(this.scene, this.boardGroup);
        this.diceManager = new DiceManager(this.scene, this.boardGroup);

        // ─── Events ───
        window.addEventListener('resize', this.onWindowResize.bind(this));

        this.renderer.domElement.style.touchAction = 'none';
        this.renderer.domElement.style.pointerEvents = 'auto';
        this.renderer.domElement.style.position = 'absolute';
        this.renderer.domElement.style.top = '0';
        this.renderer.domElement.style.left = '0';
        this.renderer.domElement.style.width = '100%';
        this.renderer.domElement.style.height = '100%';
        this.renderer.domElement.style.zIndex = '1';

        this.renderer.domElement.addEventListener('pointerdown', this.onPointerDown.bind(this));

        // ─── Render Loop ───
        this.renderer.setAnimationLoop(this.animate.bind(this));

        try {
            this.onWindowResize();
            console.log("Backgammon3D initialized successfully");
        } catch (e) {
            console.error("Backgammon3D init error:", e);
        }
    }

    setupLighting() {
        // Warm ambient — simulates room bounce light
        const ambient = new THREE.AmbientLight(0xffeedd, 0.9);
        this.scene.add(ambient);

        // Key light — warm overhead spot (like a table lamp)
        const keyLight = new THREE.DirectionalLight(0xffcc88, 3.0);
        keyLight.position.set(10, 55, 15);
        keyLight.castShadow = true;
        keyLight.shadow.mapSize.width = 2048;
        keyLight.shadow.mapSize.height = 2048;
        keyLight.shadow.camera.near = 1;
        keyLight.shadow.camera.far = 120;
        keyLight.shadow.camera.left = -25;
        keyLight.shadow.camera.right = 25;
        keyLight.shadow.camera.top = 25;
        keyLight.shadow.camera.bottom = -25;
        keyLight.shadow.bias = -0.0005;
        keyLight.shadow.normalBias = 0.02;
        keyLight.shadow.radius = 3;
        this.scene.add(keyLight);

        // Fill light — cool blue from opposite side
        const fillLight = new THREE.DirectionalLight(0x8899cc, 1.0);
        fillLight.position.set(-20, 30, -15);
        this.scene.add(fillLight);

        // Rim/accent light — warm from behind
        const rimLight = new THREE.SpotLight(0xffaa66, 0.6, 100, Math.PI / 6, 0.5, 1);
        rimLight.position.set(0, 35, -40);
        rimLight.target.position.set(0, 0, 0);
        this.scene.add(rimLight);
        this.scene.add(rimLight.target);

        // Soft point fill from below — simulates table reflection
        const bounceLight = new THREE.PointLight(0x886644, 0.2, 60);
        bounceLight.position.set(0, -5, 0);
        this.scene.add(bounceLight);

        // Hemisphere light for natural sky/ground gradient
        const hemi = new THREE.HemisphereLight(0xccaa88, 0x443322, 0.5);
        this.scene.add(hemi);
    }

    createEnvironment() {
        // Large dark floor plane under the board
        const floorGeo = new THREE.PlaneGeometry(200, 200);
        const floorMat = new THREE.MeshStandardMaterial({
            color: 0x1a1510,
            roughness: 0.85,
            metalness: 0.05,
        });
        const floor = new THREE.Mesh(floorGeo, floorMat);
        floor.rotation.x = -Math.PI / 2;
        floor.position.y = -2.2;
        floor.receiveShadow = true;
        this.scene.add(floor);

        // Subtle vignette-like dark gradient around the scene edges
        // (handled by fog + dark bg)
    }

    createBoard() {
        this.scene.add(this.boardGroup);

        const woodTex = TextureGenerator.createWoodTexture();
        const woodNormal = TextureGenerator.createWoodNormalMap();
        const feltTex = TextureGenerator.createFeltTexture();

        // ─── Main Board Frame (outer case) ───
        const frameWidth = 34;
        const frameDepth = 28;
        const frameHeight = 2.5;
        const wallThickness = 1.5;

        const woodMat = new THREE.MeshStandardMaterial({
            map: woodTex,
            normalMap: woodNormal,
            normalScale: new THREE.Vector2(0.3, 0.3),
            color: 0x8B5A2B,
            roughness: 0.45,
            metalness: 0.05,
        });

        // Bottom plate
        const bottomGeo = new THREE.BoxGeometry(frameWidth, 0.8, frameDepth);
        const bottom = new THREE.Mesh(bottomGeo, woodMat);
        bottom.position.y = -1.6;
        bottom.castShadow = true;
        bottom.receiveShadow = true;
        this.boardGroup.add(bottom);

        // Side walls
        const createWall = (w, h, d, x, y, z) => {
            const geo = new THREE.BoxGeometry(w, h, d);
            const wall = new THREE.Mesh(geo, woodMat);
            wall.position.set(x, y, z);
            wall.castShadow = true;
            wall.receiveShadow = true;
            this.boardGroup.add(wall);
            return wall;
        };

        const wallY = -0.35;
        // Left wall
        createWall(wallThickness, frameHeight, frameDepth, -frameWidth / 2 + wallThickness / 2, wallY, 0);
        // Right wall
        createWall(wallThickness, frameHeight, frameDepth, frameWidth / 2 - wallThickness / 2, wallY, 0);
        // Top wall (far)
        createWall(frameWidth, frameHeight, wallThickness, 0, wallY, -frameDepth / 2 + wallThickness / 2);
        // Bottom wall (near)
        createWall(frameWidth, frameHeight, wallThickness, 0, wallY, frameDepth / 2 - wallThickness / 2);

        // Center bar divider
        const barWidth = 1.8;
        createWall(barWidth, frameHeight, frameDepth - wallThickness * 2, 0, wallY, 0);

        // Top rail (thin decorative lip around edges)
        const railHeight = 0.3;
        const railMat = new THREE.MeshStandardMaterial({
            map: woodTex,
            color: 0x6B3A1B,
            roughness: 0.35,
            metalness: 0.08,
        });

        const createRail = (w, h, d, x, y, z) => {
            const geo = new THREE.BoxGeometry(w, h, d);
            const rail = new THREE.Mesh(geo, railMat);
            rail.position.set(x, y, z);
            rail.castShadow = true;
            this.boardGroup.add(rail);
        };

        const railY = frameHeight / 2 - 0.35 + wallY;
        createRail(frameWidth + 0.4, railHeight, wallThickness + 0.4, 0, railY + 0.2, -frameDepth / 2 + wallThickness / 2);
        createRail(frameWidth + 0.4, railHeight, wallThickness + 0.4, 0, railY + 0.2, frameDepth / 2 - wallThickness / 2);
        createRail(wallThickness + 0.4, railHeight, frameDepth + 0.4, -frameWidth / 2 + wallThickness / 2, railY + 0.2, 0);
        createRail(wallThickness + 0.4, railHeight, frameDepth + 0.4, frameWidth / 2 - wallThickness / 2, railY + 0.2, 0);

        // ─── Felt Surface ───
        // Left half
        const feltHalfWidth = (frameWidth - barWidth) / 2 - wallThickness;
        const feltDepth = frameDepth - wallThickness * 2;

        const feltMat = new THREE.MeshStandardMaterial({
            map: feltTex,
            color: 0x1a6b3a,
            roughness: 0.92,
            metalness: 0.0,
            side: THREE.DoubleSide
        });

        const leftFeltGeo = new THREE.PlaneGeometry(feltHalfWidth, feltDepth);
        const leftFelt = new THREE.Mesh(leftFeltGeo, feltMat);
        leftFelt.rotation.x = -Math.PI / 2;
        leftFelt.position.set(-(barWidth / 2 + feltHalfWidth / 2), -1.18, 0);
        leftFelt.receiveShadow = true;
        this.boardGroup.add(leftFelt);

        const rightFeltGeo = new THREE.PlaneGeometry(feltHalfWidth, feltDepth);
        const rightFelt = new THREE.Mesh(rightFeltGeo, feltMat);
        rightFelt.rotation.x = -Math.PI / 2;
        rightFelt.position.set(barWidth / 2 + feltHalfWidth / 2, -1.18, 0);
        rightFelt.receiveShadow = true;
        this.boardGroup.add(rightFelt);

        // ─── Points (Triangles) ───
        this.createPoints();

        // ─── Decorative Inlay Lines ───
        this.createInlayDetails();
    }

    createPoints() {
        const pointWidth = 2.0;
        const pointHeight = 10;
        const spacing = 2.2;
        const extrudeHeight = 0.15; // Slightly raised triangles

        // Cache point textures
        const redTex = TextureGenerator.createPointTexture(true);
        const whiteTex = TextureGenerator.createPointTexture(false);

        const makePoint = (idx, x, isTop) => {
            const isRed = (idx % 2 === 0);

            // Create triangle shape
            const shape = new THREE.Shape();
            shape.moveTo(-pointWidth / 2, 0);
            shape.lineTo(0, pointHeight);
            shape.lineTo(pointWidth / 2, 0);
            shape.lineTo(-pointWidth / 2, 0);

            // Extrude for 3D depth
            const extrudeSettings = {
                depth: extrudeHeight,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.03,
                bevelSegments: 2
            };
            const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);

            const mat = new THREE.MeshStandardMaterial({
                map: isRed ? redTex : whiteTex,
                color: isRed ? 0xaa2222 : 0xe0d4b0,
                roughness: 0.6,
                metalness: 0.05,
                side: THREE.DoubleSide,
            });

            const mesh = new THREE.Mesh(geo, mat);
            mesh.rotation.x = -Math.PI / 2;
            mesh.receiveShadow = true;
            mesh.castShadow = true;

            const yPos = -1.16;

            if (isTop) {
                mesh.position.set(x, yPos, -12.5);
                mesh.rotation.z = Math.PI;
            } else {
                mesh.position.set(x, yPos, 12.5);
            }

            mesh.userData = { isPoint: true, index: idx };
            this.boardGroup.add(mesh);
            this.points.push(mesh);
        };

        // Right half (points 1-6 bottom, 19-24 top)
        for (let k = 0; k < 6; k++) {
            const xPos = 13.5 - k * spacing;
            makePoint(1 + k, xPos, false);
            makePoint(24 - k, xPos, true);
        }

        // Left half (points 7-12 bottom, 13-18 top)
        for (let k = 0; k < 6; k++) {
            const xPos = -2.5 - k * spacing;
            makePoint(7 + k, xPos, false);
            makePoint(18 - k, xPos, true);
        }
    }

    createInlayDetails() {
        // Thin gold/brass inlay lines along the inner frame edges
        const inlayMat = new THREE.MeshStandardMaterial({
            color: 0xc8a84e,
            roughness: 0.3,
            metalness: 0.6,
            emissive: 0x1a1000,
            emissiveIntensity: 0.1,
        });

        const h = 0.05;
        const createInlay = (w, d, x, y, z) => {
            const geo = new THREE.BoxGeometry(w, h, d);
            const mesh = new THREE.Mesh(geo, inlayMat);
            mesh.position.set(x, y, z);
            this.boardGroup.add(mesh);
        };

        const y = -1.1;
        const outerZ = 12.6;
        const innerWidth = 14.5;

        // Inner inlay lines along felt edges
        createInlay(innerWidth, 0.1, -8.5, y, outerZ);
        createInlay(innerWidth, 0.1, -8.5, y, -outerZ);
        createInlay(innerWidth, 0.1, 8.5, y, outerZ);
        createInlay(innerWidth, 0.1, 8.5, y, -outerZ);
    }

    syncState(state) {
        if (!this.checkersManager) return;

        this.checkersManager.clear();

        // ─── Remove previous highlight markers ───
        if (this._highlightMarkers) {
            this._highlightMarkers.forEach(m => this.boardGroup.remove(m));
        }
        this._highlightMarkers = [];

        // ─── Place checkers on points ───
        for (let i = 1; i <= 24; i++) {
            const count = state.points[i] || 0;
            if (count === 0) continue;

            const color = count > 0 ? 'W' : 'B';
            const qty = Math.abs(count);

            for (let k = 0; k < qty; k++) {
                const mesh = this.checkersManager.createChecker(color, i);
                const pos = this.checkersManager.getPositionForStack(i, k);
                mesh.position.copy(pos);
            }
        }

        // ─── Bar pieces — sit ON TOP of center bar ───
        if (state.bar.W > 0) {
            for (let k = 0; k < state.bar.W; k++) {
                const mesh = this.checkersManager.createChecker('W', 'bar');
                const pos = this.checkersManager.getPositionForStack('bar', k);
                mesh.position.copy(pos);
            }
        }
        if (state.bar.B > 0) {
            for (let k = 0; k < state.bar.B; k++) {
                const mesh = this.checkersManager.createChecker('B', 'bar');
                const pos = this.checkersManager.getPositionForStack('bar', k);
                mesh.position.copy(pos);
            }
        }

        // ─── Reset point visual highlights ───
        this.points.forEach(p => {
            const isRed = (p.userData.index % 2 === 0);
            p.material.color.setHex(isRed ? 0xaa2222 : 0xe0d4b0);
            p.material.emissive.setHex(0x000000);
            p.material.emissiveIntensity = 0;
            p.material.opacity = 1.0;
            p.material.transparent = false;
        });

        // ─── Bright move highlights ───
        if (state.selectedFrom) {
            // SOURCE: bright green glow on the selected point
            const srcMesh = this.points.find(p => p.userData.index === state.selectedFrom);
            if (srcMesh) {
                srcMesh.material.emissive.setHex(0x00ff66);
                srcMesh.material.emissiveIntensity = 0.8;
            }

            // Bright green ring around source point
            this._addHighlightRing(state.selectedFrom, 0x00ff66);

            // TARGETS: bright yellow/gold glow on legal destinations
            if (state.legalTargets instanceof Map) {
                for (const [dest] of state.legalTargets) {
                    if (dest === 'off') continue;
                    const destMesh = this.points.find(p => p.userData.index === dest);
                    if (destMesh) {
                        destMesh.material.emissive.setHex(0xffdd00);
                        destMesh.material.emissiveIntensity = 0.7;
                    }
                    // Bright gold ring around targets
                    this._addHighlightRing(dest, 0xffdd00);
                }
            }
        }

        // Dice
        if (this.diceManager) {
            this.diceManager.update(state.availableDice);
        }
    }

    _addHighlightRing(pointIdx, colorHex) {
        if (!this.checkersManager) return;
        const x = this.checkersManager._getPointX(pointIdx);
        if (x === undefined) return;

        const isTop = (pointIdx >= 13 && pointIdx <= 24);
        const z = isTop ? -10.0 : 10.0;

        const ringGeo = new THREE.RingGeometry(1.1, 1.4, 32);
        const ringMat = new THREE.MeshBasicMaterial({
            color: colorHex,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.7,
            depthWrite: false,
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = -Math.PI / 2;
        ring.position.set(x, -0.9, z);
        this.boardGroup.add(ring);
        this._highlightMarkers.push(ring);
    }

    onWindowResize() {
        if (!this.container) return;
        const width = this.container.clientWidth;
        const height = this.container.clientHeight;

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);

        if (width / height < 1) {
            // Portrait
            const factor = 1 / (width / height);
            this.camera.position.set(0, 45 * factor, 30 * factor);
        } else {
            this.camera.position.set(0, 48, 32);
        }
        this.camera.lookAt(0, 0, 2);
    }

    onPointerDown(event) {
        const rect = this.renderer.domElement.getBoundingClientRect();
        this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        this.raycaster.setFromCamera(this.mouse, this.camera);

        // ─── Check CHECKERS FIRST ───
        // Checkers sit on top of points, so we must check them first
        // otherwise the point underneath captures the click
        if (this.checkersManager) {
            const checkerIntersects = this.raycaster.intersectObjects(
                this.checkersManager.checkers, true
            );
            if (checkerIntersects.length > 0) {
                let obj = checkerIntersects[0].object;
                while (obj && !obj.userData?.isChecker) {
                    obj = obj.parent;
                }
                if (obj && obj.userData?.index != null) {
                    const idx = obj.userData.index;
                    if (typeof idx === 'number' && this.callbacks.onPointClick) {
                        this.callbacks.onPointClick(idx);
                        return;
                    }
                }
            }
        }

        // ─── Then check point triangle hitboxes ───
        const pointIntersects = this.raycaster.intersectObjects(this.points);
        if (pointIntersects.length > 0) {
            const hit = pointIntersects[0].object;
            if (this.callbacks.onPointClick && hit.userData.index) {
                this.callbacks.onPointClick(hit.userData.index);
                return;
            }
        }
    }

    animate() {
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }
}
