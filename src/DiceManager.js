import * as THREE from 'three';
import gsap from 'gsap';
import { TextureGenerator } from './TextureGenerator.js';

export class DiceManager {
    constructor(scene, boardGroup) {
        this.scene = scene;
        this.boardGroup = boardGroup;
        this.diceMeshes = [];

        // Rounded box geometry for realistic dice
        this.cubeGeo = this._createRoundedBoxGeo(1.4, 1.4, 1.4, 0.12, 4);
    }

    _createRoundedBoxGeo(width, height, depth, radius, segments) {
        // Use standard box with bevel simulation via BufferGeometry smoothing
        // For simplicity, use a slightly subdivided box
        const geo = new THREE.BoxGeometry(width, height, depth, segments, segments, segments);

        // Round corners by normalizing vertices that are beyond the inner box
        const pos = geo.attributes.position;
        const hw = width / 2 - radius;
        const hh = height / 2 - radius;
        const hd = depth / 2 - radius;

        for (let i = 0; i < pos.count; i++) {
            let x = pos.getX(i);
            let y = pos.getY(i);
            let z = pos.getZ(i);

            // Clamp to inner box
            const cx = Math.max(-hw, Math.min(hw, x));
            const cy = Math.max(-hh, Math.min(hh, y));
            const cz = Math.max(-hd, Math.min(hd, z));

            // Direction from inner box surface to actual position
            const dx = x - cx;
            const dy = y - cy;
            const dz = z - cz;

            const len = Math.sqrt(dx * dx + dy * dy + dz * dz);
            if (len > 0.001) {
                const scale = radius / len;
                x = cx + dx * scale;
                y = cy + dy * scale;
                z = cz + dz * scale;
                pos.setXYZ(i, x, y, z);
            }
        }

        geo.computeVertexNormals();
        return geo;
    }

    update(diceValues) {
        // Clear old
        this.diceMeshes.forEach(m => this.boardGroup.remove(m));
        this.diceMeshes = [];

        if (!diceValues || diceValues.length === 0) return;

        diceValues.forEach((val, i) => {
            // Create 6 face materials
            const materials = this._createDiceMaterials(val);

            const mesh = new THREE.Mesh(this.cubeGeo, materials);

            // Position on board — right side of center bar
            const xBase = 5 + i * 2.5;
            const zBase = -1 + i * 2;
            mesh.position.set(xBase, 0.75, zBase);

            // Slight random tilt for natural look
            mesh.rotation.x = (Math.random() - 0.5) * 0.1;
            mesh.rotation.y = Math.random() * Math.PI * 2;
            mesh.rotation.z = (Math.random() - 0.5) * 0.1;

            mesh.castShadow = true;
            mesh.receiveShadow = true;

            this.boardGroup.add(mesh);
            this.diceMeshes.push(mesh);

            // Pop-in animation
            mesh.scale.set(0, 0, 0);
            gsap.to(mesh.scale, {
                duration: 0.5,
                x: 1, y: 1, z: 1,
                ease: 'back.out(1.7)',
                delay: i * 0.1
            });
        });
    }

    _createDiceMaterials(topValue) {
        // Standard dice: opposite faces sum to 7
        // top=val, bottom=7-val
        // front, back, left, right are the remaining
        const opposite = 7 - topValue;

        // Map faces: +x, -x, +y(top), -y(bottom), +z, -z
        // We want top face (+y) to show the value
        const remaining = [1, 2, 3, 4, 5, 6].filter(v => v !== topValue && v !== opposite);

        // Shuffle remaining for variety
        for (let i = remaining.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [remaining[i], remaining[j]] = [remaining[j], remaining[i]];
        }

        const faceValues = [
            remaining[0],  // +x right
            remaining[1],  // -x left
            topValue,       // +y top
            opposite,       // -y bottom
            remaining[2],  // +z front
            remaining[3],  // -z back
        ];

        return faceValues.map(v => {
            const tex = TextureGenerator.createDiceTexture(v);
            return new THREE.MeshStandardMaterial({
                map: tex,
                color: 0xffffff,
                roughness: 0.15,
                metalness: 0.02,
            });
        });
    }

    animateRoll(values) {
        // Tumble animation then settle
        this.diceMeshes.forEach(m => this.boardGroup.remove(m));
        this.diceMeshes = [];

        if (!values || values.length === 0) return;

        values.forEach((val, i) => {
            const materials = this._createDiceMaterials(val);
            const mesh = new THREE.Mesh(this.cubeGeo, materials);

            const xTarget = 5 + i * 2.5;
            const zTarget = -1 + i * 2;

            // Start position — above and to the side
            mesh.position.set(xTarget + 3, 8, zTarget - 3);
            mesh.rotation.set(
                Math.random() * Math.PI * 4,
                Math.random() * Math.PI * 4,
                Math.random() * Math.PI * 4
            );

            mesh.castShadow = true;
            mesh.receiveShadow = true;
            mesh.scale.set(1, 1, 1);

            this.boardGroup.add(mesh);
            this.diceMeshes.push(mesh);

            // Tumble down animation
            const tl = gsap.timeline();
            tl.to(mesh.position, {
                duration: 0.6,
                x: xTarget,
                y: 0.75,
                z: zTarget,
                ease: 'bounce.out',
                delay: i * 0.15
            });
            tl.to(mesh.rotation, {
                duration: 0.6,
                x: (Math.random() - 0.5) * 0.1,
                y: Math.random() * Math.PI * 2,
                z: (Math.random() - 0.5) * 0.1,
                ease: 'power2.out',
                delay: i * 0.15
            }, 0);
        });
    }
}
