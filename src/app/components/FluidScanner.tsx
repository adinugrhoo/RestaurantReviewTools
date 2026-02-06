import React, { useEffect, useRef } from "react";

// --- Simplex Noise Implementation ---
class SimplexNoise {
  grad3: number[][];
  p: number[];
  perm: number[];

  constructor() {
    this.grad3 = [[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]];
    this.p = Array.from({ length: 256 }, () => Math.floor(Math.random() * 256));
    this.perm = [...this.p, ...this.p];
  }
  dot(g: number[], x: number, y: number) { return g[0] * x + g[1] * y; }
  noise(xin: number, yin: number) {
    const F2 = 0.5 * (Math.sqrt(3) - 1);
    const G2 = (3 - Math.sqrt(3)) / 6;
    let n0 = 0, n1 = 0, n2 = 0;
    const s = (xin + yin) * F2;
    const i = Math.floor(xin + s);
    const j = Math.floor(yin + s);
    const t = (i + j) * G2;
    const X0 = i - t;
    const Y0 = j - t;
    const x0 = xin - X0;
    const y0 = yin - Y0;
    let i1, j1;
    if (x0 > y0) { i1 = 1; j1 = 0; } else { i1 = 0; j1 = 1; }
    const x1 = x0 - i1 + G2;
    const y1 = y0 - j1 + G2;
    const x2 = x0 - 1 + 2 * G2;
    const y2 = y0 - 1 + 2 * G2;
    const ii = i & 255;
    const jj = j & 255;
    const gi0 = this.perm[ii + this.perm[jj]] % 8;
    const gi1 = this.perm[ii + i1 + this.perm[jj + j1]] % 8;
    const gi2 = this.perm[ii + 1 + this.perm[jj + 1]] % 8;
    let t0 = 0.5 - x0*x0 - y0*y0;
    if (t0 >= 0) { t0 *= t0; n0 = t0 * t0 * this.dot(this.grad3[gi0], x0, y0); }
    let t1 = 0.5 - x1*x1 - y1*y1;
    if (t1 >= 0) { t1 *= t1; n1 = t1 * t1 * this.dot(this.grad3[gi1], x1, y1); }
    let t2 = 0.5 - x2*x2 - y2*y2;
    if (t2 >= 0) { t2 *= t2; n2 = t2 * t2 * this.dot(this.grad3[gi2], x2, y2); }
    return 70 * (n0 + n1 + n2);
  }
}

export function FluidScanner() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const noise = new SimplexNoise();
    let w = 0, h = 0;
    let time = 0;
    // Significantly reduced speeds for "natural/breathing" feel
    let targetSpeed = 0.00001; 
    let currentSpeed = targetSpeed;
    let animationFrameId: number;

    // Gemini Live Palette (Backup)
    /*
    const palette = [
      { r: 0, g: 120, b: 255 },    // Electric Blue
      { r: 0, g: 200, b: 255 },    // Bright Cyan
      { r: 255, g: 255, b: 255 },  // Pure White (Highlight)
      { r: 255, g: 50, b: 80 },    // Vibrant Red/Pink
      { r: 60, g: 40, b: 200 },    // Deep Blue-Purple
    ];
    */

    // Updated "Apple Intelligence" Vibrant Palette
    // Removing duller blues, focusing on hyper-saturated pinks, purples, and cyans.
    const palette = [
      { r: 255, g: 40, b: 100 },   // Neon Red/Pink
      { r: 255, g: 140, b: 50 },   // Electric Coral
      { r: 200, g: 50, b: 255 },   // Vibrant Violet
      { r: 0, g: 200, b: 255 },    // Bright Cyan
      { r: 255, g: 255, b: 255 },  // Pure White (Energy)
      { r: 255, g: 0, b: 150 }     // Hot Magenta
    ];

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    
    // Helper to get raw RGB values
    const getRGBValues = (t: number) => {
      const c1 = palette[Math.floor(t) % palette.length];
      const c2 = palette[(Math.floor(t) + 1) % palette.length];
      const f = t % 1;
      return {
        r: lerp(c1.r, c2.r, f),
        g: lerp(c1.g, c2.g, f),
        b: lerp(c1.b, c2.b, f)
      };
    };

    const getColorString = (rgb: {r: number, g: number, b: number}, alpha = 1) => {
      return `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha})`;
    };

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();

    // Interaction handlers - gentle speed up on click
    const onMouseDown = () => targetSpeed = 0.00003;
    const onMouseUp = () => targetSpeed = 0.00001;
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    const draw = () => {
      // Speed easing
      currentSpeed += (targetSpeed - currentSpeed) * 0.05;

      // Create trail effect with transparency instead of solid color
      // destination-out erases existing pixels over time
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)'; // Adjust trail length (lower = longer)
      ctx.fillRect(0, 0, w, h);

      // Reduced border size to keep center clear (10% of min dimension)
      const border = Math.min(w, h) * 0.10;
      const perimeter = 2 * (w + h);

      // Increase particle count for fluid continuity (was 16, now 60)
      const particleCount = 60;
      
      // Slower, deeper breathing (period ~15-20s)
      const breathing = Math.sin(time * 0.0003) * 0.15 + 1; // 0.85 to 1.15

      for (let i = 0; i < particleCount; i++) {
        const p = (i / particleCount + time * currentSpeed) % 1;
        let x = 0, y = 0;
        const d = p * perimeter;

        // Move around perimeter
        if (d < w) { x = d; y = 0; }
        else if (d < w + h) { x = w; y = d - w; }
        else if (d < 2*w + h) { x = w - (d - w - h); y = h; }
        else { x = 0; y = h - (d - 2*w - h); }

        // Slow, lazy noise undulation
        const n1x = noise.noise(i * 0.1, time * 0.00008);
        const n1y = noise.noise(i * 0.1 + 100, time * 0.00008 + 100);
        
        // Secondary detail noise
        const n2x = noise.noise(i * 0.3 + 200, time * 0.0002);
        const n2y = noise.noise(i * 0.3 + 300, time * 0.0002);

        // Apply breathing to the offset magnitude
        const offsetMag = border * 0.25 * breathing;

        x += (n1x * 0.6 + n2x * 0.4) * offsetMag;
        y += (n1y * 0.6 + n2y * 0.4) * offsetMag;

        // Slow color drift
        const tVal = i * 0.5 + time * 0.00005; 
        const rgb = getRGBValues(tVal);
        
        // Variable radius for organic feel
        const radius = border * (0.8 + 0.4 * noise.noise(i * 0.2, time * 0.0005)) * breathing;

        const g = ctx.createRadialGradient(x, y, 0, x, y, radius);
        // Lower opacity per particle since we have many more particles now
        g.addColorStop(0, getColorString(rgb, 0.6));
        g.addColorStop(0.5, getColorString(rgb, 0.2)); 
        g.addColorStop(1, 'rgba(0,0,0,0)');

        // Lighter blend mode for glowing effect
        ctx.globalCompositeOperation = 'lighter';
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Reset composite for next frame's clear
      ctx.globalCompositeOperation = 'source-over';
      time += 16;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 pointer-events-none z-10"
        style={{ 
          filter: 'blur(90px) saturate(200%) contrast(200%) brightness(110%)',
          transform: 'scale(1.3)'
        }}
      />
      {/* Optional: Add a subtle overlay mask similar to the original if desired, or rely on CSS */}
    </>
  );
}
