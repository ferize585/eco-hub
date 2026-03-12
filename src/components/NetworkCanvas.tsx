"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  pulse: number;
}

export default function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = 200 * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const W = () => canvas.offsetWidth;
    const H = 200;
    const nodes: Node[] = Array.from({ length: 22 }, () => ({
      x: Math.random() * W(),
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2.5 + 1.5,
      pulse: Math.random() * Math.PI * 2,
    }));

    let frameId: number;

    const drawNetwork = () => {
      ctx.clearRect(0, 0, W(), H);
      
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W()) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
        n.pulse += 0.03;
      });

      // edges
      nodes.forEach((a, i) => {
        nodes.slice(i + 1).forEach((b) => {
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 140) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(99,210,255,${(1 - d / 140) * 0.25})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });
      });

      // nodes
      nodes.forEach((n) => {
        const pulse = Math.sin(n.pulse) * 0.4 + 0.6;
        const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 4);
        grd.addColorStop(0, "rgba(99,210,255,0.9)");
        grd.addColorStop(1, "rgba(99,210,255,0)");
        
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 4 * pulse, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "#63d2ff";
        ctx.fill();
      });

      frameId = requestAnimationFrame(drawNetwork);
    };

    frameId = requestAnimationFrame(drawNetwork);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return <canvas ref={canvasRef} id="networkCanvas" height="200" style={{ width: "100%" }} />;
}
