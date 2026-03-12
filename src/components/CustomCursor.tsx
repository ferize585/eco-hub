"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);

    let frameId: number;
    const animate = () => {
      const { mx, my, rx, ry } = pos.current;
      
      if (cursorRef.current) {
        cursorRef.current.style.left = `${mx}px`;
        cursorRef.current.style.top = `${my}px`;
      }

      const nextRx = rx + (mx - rx) * 0.12;
      const nextRy = ry + (my - ry) * 0.12;
      pos.current.rx = nextRx;
      pos.current.ry = nextRy;

      if (ringRef.current) {
        ringRef.current.style.left = `${nextRx}px`;
        ringRef.current.style.top = `${nextRy}px`;
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} id="cursor" />
      <div className="cursor-ring" ref={ringRef} id="cursorRing" />
    </>
  );
}
