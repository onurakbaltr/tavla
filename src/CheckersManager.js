import * as THREE from 'three';
import gsap from 'gsap';
import { TextureGenerator } from './TextureGenerator.js';

export class CheckersManager {
    constructor(scene, boardGroup) {
        this.scene = scene;
        this.boardGroup = boardGroup;
        this.checkers = [];

        // Premium checker textures
        const whiteTex = TextureGenerator.createCheckerTexture('#f0e8d0');
        const blackTex = TextureGenerator.createCheckerTexture('#1a1a1a');

        // Checker geometry — lathe profile with beveled edges
        const profile = [];
        const radius = 1.0;
        const height = 0.4;
        const bevel = 0.06;

        profile.push(new THREE.Vector2(0, 0));
        profile.push(new THREE.Vector2(radius - bevel, 0));
        profile.push(new THREE.Vector2(radius, bevel));
        profile.push(new THREE.Vector2(radius, height - bevel));
        profile.push(new THREE.Vector2(radius - bevel, height));
        for (let i = 0; i <= 8; i++) {
            const t = i / 8;
            const r = (radius - bevel) * (1 - t);
            const y = height - Math.sin(t * Math.PI * 0.5) * 0.015;
            profile.push(new THREE.Vector2(r, y));
        }

        this.geo = new THREE.LatheGeometry(profile, 32);
        this.geo.computeVertexNormals();

        this.checkerRadius = radius;
        this.checkerHeight = height;

        this.ringGeo = new THREE.TorusGeometry(radius * 0.65, 0.015, 6, 32);

        this.whiteMat = new THREE.MeshStandardMaterial({
            map: whiteTex,
            color: 0xfff8e8,
            roughness: 0.25,
            metalness: 0.05,
        });

        this.blackMat = new THREE.MeshStandardMaterial({
            map: blackTex,
            color: 0x2a2a2a,
            roughness: 0.2,
            metalness: 0.15,
        });

        this.whiteRingMat = new THREE.MeshStandardMaterial({
            color: 0xd4c090, roughness: 0.3, metalness: 0.2
        });
        this.blackRingMat = new THREE.MeshStandardMaterial({
            color: 0x444444, roughness: 0.3, metalness: 0.3
        });
    }

    createChecker(color, index) {
        const mat = color === 'W' ? this.whiteMat : this.blackMat;
        const mesh = new THREE.Mesh(this.geo, mat);
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        const ringMat = color === 'W' ? this.whiteRingMat : this.blackRingMat;
        const ring = new THREE.Mesh(this.ringGeo, ringMat);
        ring.rotation.x = Math.PI / 2;
        ring.position.y = this.checkerHeight - 0.01;
        mesh.add(ring);

        mesh.userData = {
            isChecker: true,
            color: color,
            index: index
        };

        this.boardGroup.add(mesh);
        this.checkers.push(mesh);
        return mesh;
    }

    clear() {
        this.checkers.forEach(c => {
            this.boardGroup.remove(c);
        });
        this.checkers = [];
    }

    // ─── Visual position for each point ───
    // Must match EXACTLY the x-positions used in Backgammon3D.createPoints()
    //
    // createPoints layout:
    //   Right half (k=0..5): xPos = 13.5 - k * 2.2
    //     Bottom: point 1+k  => point 1 at x=13.5, point 6 at x=2.5
    //     Top:    point 24-k => point 24 at x=13.5, point 19 at x=2.5
    //
    //   Left half (k=0..5): xPos = -2.5 - k * 2.2
    //     Bottom: point 7+k  => point 7 at x=-2.5, point 12 at x=-13.5
    //     Top:    point 18-k => point 18 at x=-2.5, point 13 at x=-13.5

    _getPointX(pIdx) {
        const spacing = 2.2;
        if (pIdx >= 1 && pIdx <= 6) {
            // Right bottom: point 1 at x=13.5 .. point 6 at x=2.5
            const k = pIdx - 1;
            return 13.5 - k * spacing;
        } else if (pIdx >= 7 && pIdx <= 12) {
            // Left bottom: point 7 at x=-2.5 .. point 12 at x=-13.5
            const k = pIdx - 7;
            return -2.5 - k * spacing;
        } else if (pIdx >= 13 && pIdx <= 18) {
            // Left top: point 13 at x=-13.5 .. point 18 at x=-2.5
            const k = pIdx - 13;
            return -13.5 + k * spacing;
        } else {
            // Right top: point 19 at x=2.5 .. point 24 at x=13.5
            const k = pIdx - 19;
            return 2.5 + k * spacing;
        }
    }

    getPositionForStack(pointIdx, rankInStack) {
        const stackStep = this.checkerRadius * 2 * 0.92;
        const yOnFelt = -1.15 + this.checkerHeight * 0.05;

        // ─── Bar: sit ON TOP of the center bar divider ───
        if (pointIdx === 'bar') {
            // Bar wall top is at approximately y = 0.9
            // Pieces stack vertically on the bar
            return new THREE.Vector3(
                0,
                1.0 + rankInStack * (this.checkerHeight + 0.05),
                0
            );
        }

        // ─── Off (bearing) area ───
        if (pointIdx === 'off') {
            return new THREE.Vector3(
                17,
                yOnFelt + rankInStack * (this.checkerHeight + 0.02),
                0
            );
        }

        const pIdx = Number(pointIdx);
        if (isNaN(pIdx)) return new THREE.Vector3(0, 0, 0);

        const isTop = (pIdx >= 13 && pIdx <= 24);
        const x = this._getPointX(pIdx);

        // ─── Z: along the triangle, from board edge toward center ───
        const zEdge = isTop ? -12.0 : 12.0;
        const zDir = isTop ? 1 : -1;

        // For stacks > 5, overflow vertically on the 5th position
        if (rankInStack >= 5) {
            const extraRank = rankInStack - 5;
            const z5 = zEdge + zDir * (stackStep * 0.6 + 4 * stackStep);
            return new THREE.Vector3(
                x,
                yOnFelt + (extraRank + 1) * (this.checkerHeight + 0.05),
                z5
            );
        }

        const z = zEdge + zDir * (stackStep * 0.6 + rankInStack * stackStep);
        return new THREE.Vector3(x, yOnFelt, z);
    }

    getTopChecker(pointIdx) {
        const stack = this.checkers.filter(c => c.userData.index == pointIdx);
        if (stack.length === 0) return null;
        return stack[stack.length - 1];
    }

    getStackHeight(pointIdx) {
        return this.checkers.filter(c => c.userData.index == pointIdx).length;
    }
}
