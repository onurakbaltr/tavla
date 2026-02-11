import * as THREE from 'three';

export class TextureGenerator {

    // ─── Premium Walnut Wood Texture ───
    static createWoodTexture() {
        const size = 1024;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');

        // Rich walnut base
        const grad = ctx.createLinearGradient(0, 0, size, size * 0.3);
        grad.addColorStop(0, '#5c3a1e');
        grad.addColorStop(0.3, '#6b4226');
        grad.addColorStop(0.5, '#7a4a2a');
        grad.addColorStop(0.7, '#6b4226');
        grad.addColorStop(1, '#5c3a1e');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, size, size);

        // Wood grain lines — horizontal with slight wave
        for (let i = 0; i < 600; i++) {
            const y = Math.random() * size;
            const width = 0.5 + Math.random() * 3;
            const alpha = 0.03 + Math.random() * 0.08;
            const dark = Math.random() > 0.5;
            ctx.strokeStyle = dark
                ? `rgba(30, 15, 5, ${alpha})`
                : `rgba(120, 70, 30, ${alpha})`;
            ctx.lineWidth = width;
            ctx.beginPath();
            ctx.moveTo(0, y);
            for (let x = 0; x < size; x += 20) {
                const wave = Math.sin(x * 0.005 + i * 0.3) * (2 + Math.random() * 4);
                ctx.lineTo(x, y + wave);
            }
            ctx.stroke();
        }

        // Dark grain bands
        for (let i = 0; i < 40; i++) {
            const y = Math.random() * size;
            const bandWidth = 2 + Math.random() * 8;
            ctx.fillStyle = `rgba(30, 15, 5, ${0.05 + Math.random() * 0.06})`;
            ctx.fillRect(0, y, size, bandWidth);
        }

        // Light highlight bands
        for (let i = 0; i < 20; i++) {
            const y = Math.random() * size;
            const bandWidth = 1 + Math.random() * 4;
            ctx.fillStyle = `rgba(180, 120, 60, ${0.04 + Math.random() * 0.04})`;
            ctx.fillRect(0, y, size, bandWidth);
        }

        // Subtle knots (2-4)
        const knotCount = 2 + Math.floor(Math.random() * 3);
        for (let k = 0; k < knotCount; k++) {
            const kx = 100 + Math.random() * (size - 200);
            const ky = 100 + Math.random() * (size - 200);
            const kr = 8 + Math.random() * 15;

            for (let r = kr; r > 0; r -= 1) {
                const t = r / kr;
                ctx.beginPath();
                ctx.arc(kx, ky, r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(40, 20, 8, ${0.15 * t})`;
                ctx.fill();
            }
            // Concentric rings around knot
            for (let ring = 0; ring < 6; ring++) {
                ctx.beginPath();
                ctx.arc(kx, ky, kr + ring * 5, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(50, 25, 10, ${0.06 - ring * 0.008})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }

        // Pixel-level noise for texture
        const imgData = ctx.getImageData(0, 0, size, size);
        for (let i = 0; i < imgData.data.length; i += 4) {
            const n = (Math.random() - 0.5) * 12;
            imgData.data[i] = Math.max(0, Math.min(255, imgData.data[i] + n));
            imgData.data[i + 1] = Math.max(0, Math.min(255, imgData.data[i + 1] + n * 0.8));
            imgData.data[i + 2] = Math.max(0, Math.min(255, imgData.data[i + 2] + n * 0.5));
        }
        ctx.putImageData(imgData, 0, 0);

        const tex = new THREE.CanvasTexture(canvas);
        tex.wrapS = THREE.RepeatWrapping;
        tex.wrapT = THREE.RepeatWrapping;
        tex.repeat.set(2, 2);
        tex.anisotropy = 8;
        return tex;
    }

    // ─── Wood Normal Map ───
    static createWoodNormalMap() {
        const size = 512;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');

        // Neutral normal (128, 128, 255)
        ctx.fillStyle = '#8080ff';
        ctx.fillRect(0, 0, size, size);

        // Grain bumps
        for (let i = 0; i < 300; i++) {
            const y = Math.random() * size;
            ctx.strokeStyle = `rgba(${120 + Math.random() * 16}, ${128 + (Math.random() - 0.5) * 8}, 255, ${0.1 + Math.random() * 0.1})`;
            ctx.lineWidth = 0.5 + Math.random() * 2;
            ctx.beginPath();
            ctx.moveTo(0, y);
            for (let x = 0; x < size; x += 15) {
                ctx.lineTo(x, y + Math.sin(x * 0.01 + i) * 2);
            }
            ctx.stroke();
        }

        const tex = new THREE.CanvasTexture(canvas);
        tex.wrapS = THREE.RepeatWrapping;
        tex.wrapT = THREE.RepeatWrapping;
        tex.repeat.set(2, 2);
        return tex;
    }

    // ─── Premium Felt/Baize Texture ───
    static createFeltTexture() {
        const size = 512;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');

        // Deep rich green base
        ctx.fillStyle = '#1a5c3a';
        ctx.fillRect(0, 0, size, size);

        // Fiber effect — many tiny short lines
        for (let i = 0; i < 8000; i++) {
            const x = Math.random() * size;
            const y = Math.random() * size;
            const len = 1 + Math.random() * 4;
            const angle = Math.random() * Math.PI * 2;
            const alpha = 0.04 + Math.random() * 0.06;
            const bright = Math.random() > 0.5;
            ctx.strokeStyle = bright
                ? `rgba(40, 120, 70, ${alpha})`
                : `rgba(10, 50, 25, ${alpha})`;
            ctx.lineWidth = 0.5 + Math.random() * 1;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
            ctx.stroke();
        }

        // Subtle light patches for used-fabric look
        for (let i = 0; i < 12; i++) {
            const gx = Math.random() * size;
            const gy = Math.random() * size;
            const gr = 30 + Math.random() * 60;
            const grad = ctx.createRadialGradient(gx, gy, 0, gx, gy, gr);
            grad.addColorStop(0, `rgba(30, 110, 60, 0.06)`);
            grad.addColorStop(1, 'rgba(30, 110, 60, 0)');
            ctx.fillStyle = grad;
            ctx.fillRect(gx - gr, gy - gr, gr * 2, gr * 2);
        }

        // Pixel noise
        const imgData = ctx.getImageData(0, 0, size, size);
        for (let i = 0; i < imgData.data.length; i += 4) {
            const n = (Math.random() - 0.5) * 15;
            imgData.data[i] = Math.max(0, Math.min(255, imgData.data[i] + n * 0.4));
            imgData.data[i + 1] = Math.max(0, Math.min(255, imgData.data[i + 1] + n));
            imgData.data[i + 2] = Math.max(0, Math.min(255, imgData.data[i + 2] + n * 0.5));
        }
        ctx.putImageData(imgData, 0, 0);

        const tex = new THREE.CanvasTexture(canvas);
        tex.wrapS = THREE.RepeatWrapping;
        tex.wrapT = THREE.RepeatWrapping;
        return tex;
    }

    // ─── Ivory / Ebony Checker Texture ───
    static createCheckerTexture(colorHex) {
        const size = 512;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');

        const isDark = (colorHex === '#222222' || colorHex === '#111111' || colorHex === '#1a1a1a');

        // Base fill
        ctx.fillStyle = colorHex;
        ctx.fillRect(0, 0, size, size);

        if (isDark) {
            // Ebony wood grain — very subtle dark streaks
            for (let i = 0; i < 200; i++) {
                const y = Math.random() * size;
                ctx.strokeStyle = `rgba(60, 50, 40, ${0.03 + Math.random() * 0.04})`;
                ctx.lineWidth = 0.5 + Math.random() * 2;
                ctx.beginPath();
                ctx.moveTo(0, y);
                for (let x = 0; x < size; x += 10) {
                    ctx.lineTo(x, y + Math.sin(x * 0.02 + i * 0.5) * 2);
                }
                ctx.stroke();
            }
        } else {
            // Ivory marble — veins
            for (let v = 0; v < 8; v++) {
                ctx.strokeStyle = `rgba(180, 160, 130, ${0.06 + Math.random() * 0.06})`;
                ctx.lineWidth = 1 + Math.random() * 3;
                ctx.beginPath();
                let x = Math.random() * size;
                let y = Math.random() * size;
                ctx.moveTo(x, y);
                for (let s = 0; s < 15; s++) {
                    x += (Math.random() - 0.5) * 80;
                    y += (Math.random() - 0.5) * 80;
                    ctx.lineTo(x, y);
                }
                ctx.stroke();
            }
            // Warm ivory gradient overlay
            const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
            grad.addColorStop(0, 'rgba(255, 248, 230, 0.1)');
            grad.addColorStop(1, 'rgba(200, 180, 150, 0.08)');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, size, size);
        }

        // Concentric ring detail on checker top
        const cx = size / 2, cy = size / 2;
        for (let r = size * 0.4; r > size * 0.1; r -= size * 0.06) {
            ctx.beginPath();
            ctx.arc(cx, cy, r, 0, Math.PI * 2);
            ctx.strokeStyle = isDark
                ? `rgba(100, 80, 60, ${0.08})`
                : `rgba(160, 140, 110, ${0.12})`;
            ctx.lineWidth = 1.5;
            ctx.stroke();
        }
        // Center dot
        ctx.beginPath();
        ctx.arc(cx, cy, size * 0.04, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? 'rgba(80, 60, 40, 0.15)' : 'rgba(180, 160, 130, 0.2)';
        ctx.fill();

        // Fine noise
        const imgData = ctx.getImageData(0, 0, size, size);
        for (let i = 0; i < imgData.data.length; i += 4) {
            const n = (Math.random() - 0.5) * 8;
            imgData.data[i] = Math.max(0, Math.min(255, imgData.data[i] + n));
            imgData.data[i + 1] = Math.max(0, Math.min(255, imgData.data[i + 1] + n));
            imgData.data[i + 2] = Math.max(0, Math.min(255, imgData.data[i + 2] + n));
        }
        ctx.putImageData(imgData, 0, 0);

        return new THREE.CanvasTexture(canvas);
    }

    // ─── Point (Triangle) Inlay Texture ───
    static createPointTexture(isRed) {
        const size = 256;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');

        if (isRed) {
            // Deep burgundy/mahogany
            const grad = ctx.createLinearGradient(0, 0, 0, size);
            grad.addColorStop(0, '#6b1a1a');
            grad.addColorStop(0.5, '#7a2020');
            grad.addColorStop(1, '#5c1515');
            ctx.fillStyle = grad;
        } else {
            // Cream / light wood inlay
            const grad = ctx.createLinearGradient(0, 0, 0, size);
            grad.addColorStop(0, '#d4c5a0');
            grad.addColorStop(0.5, '#e0d4b0');
            grad.addColorStop(1, '#c8b890');
            ctx.fillStyle = grad;
        }
        ctx.fillRect(0, 0, size, size);

        // Wood grain overlay
        for (let i = 0; i < 80; i++) {
            const y = Math.random() * size;
            const alpha = 0.02 + Math.random() * 0.04;
            ctx.strokeStyle = isRed
                ? `rgba(30, 5, 5, ${alpha})`
                : `rgba(100, 80, 50, ${alpha})`;
            ctx.lineWidth = 0.5 + Math.random() * 1.5;
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(size, y + (Math.random() - 0.5) * 6);
            ctx.stroke();
        }

        // Noise
        const imgData = ctx.getImageData(0, 0, size, size);
        for (let i = 0; i < imgData.data.length; i += 4) {
            const n = (Math.random() - 0.5) * 10;
            imgData.data[i] = Math.max(0, Math.min(255, imgData.data[i] + n));
            imgData.data[i + 1] = Math.max(0, Math.min(255, imgData.data[i + 1] + n));
            imgData.data[i + 2] = Math.max(0, Math.min(255, imgData.data[i + 2] + n));
        }
        ctx.putImageData(imgData, 0, 0);

        return new THREE.CanvasTexture(canvas);
    }

    // ─── Dice Face Texture ───
    static createDiceTexture(value, color = '#f5f0e8') {
        const size = 256;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');

        // Slightly warm white base
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, size, size);

        // Subtle gradient for depth
        const grad = ctx.createRadialGradient(size * 0.4, size * 0.4, 0, size / 2, size / 2, size * 0.7);
        grad.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
        grad.addColorStop(1, 'rgba(0, 0, 0, 0.05)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, size, size);

        // Pips — deep indented look
        const pipColor = '#1a1a1a';
        const r = size * 0.065;
        const c = size / 2;
        const q = size * 0.27;
        const t = size * 0.73;

        const drawPip = (x, y) => {
            // Outer shadow
            ctx.beginPath();
            ctx.arc(x, y + 1, r + 1, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0,0,0,0.15)';
            ctx.fill();
            // Main pip
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fillStyle = pipColor;
            ctx.fill();
            // Inner highlight
            ctx.beginPath();
            ctx.arc(x - r * 0.2, y - r * 0.2, r * 0.3, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(80, 80, 80, 0.4)';
            ctx.fill();
        };

        if (value === 1 || value === 3 || value === 5) drawPip(c, c);
        if (value >= 2) { drawPip(q, q); drawPip(t, t); }
        if (value >= 4) { drawPip(t, q); drawPip(q, t); }
        if (value === 6) { drawPip(q, c); drawPip(t, c); }

        return new THREE.CanvasTexture(canvas);
    }

    // ─── Environment Map (simple gradient cube) ───
    static createEnvMap() {
        const size = 128;
        const faces = [];
        for (let f = 0; f < 6; f++) {
            const canvas = document.createElement('canvas');
            canvas.width = size;
            canvas.height = size;
            const ctx = canvas.getContext('2d');
            // Warm ambient gradient
            const grad = ctx.createLinearGradient(0, 0, 0, size);
            if (f === 2) { // top
                grad.addColorStop(0, '#2a1a0a');
                grad.addColorStop(1, '#1a1008');
            } else if (f === 3) { // bottom
                grad.addColorStop(0, '#0a0806');
                grad.addColorStop(1, '#060404');
            } else {
                grad.addColorStop(0, '#1a1208');
                grad.addColorStop(1, '#0f0a05');
            }
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, size, size);
            faces.push(canvas);
        }

        const textures = faces.map(c => new THREE.CanvasTexture(c));
        const cubeTexture = new THREE.CubeTexture(faces);
        cubeTexture.needsUpdate = true;
        return cubeTexture;
    }
}
