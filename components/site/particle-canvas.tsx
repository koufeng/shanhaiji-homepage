"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  gold: boolean;
};

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let rafId: number | null = null;

    const resetParticle = (): Particle => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.1,
      gold: Math.random() > 0.7
    });

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    resize();

    const particleCount =
      window.innerWidth < 600 || (navigator.hardwareConcurrency || 4) < 4 ? 30 : 80;
    let particles = Array.from({ length: particleCount }, resetParticle);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      particles = particles.map((particle) => {
        const next = {
          ...particle,
          x: particle.x + particle.speedX,
          y: particle.y + particle.speedY
        };
        const current =
          next.x < 0 || next.x > width || next.y < 0 || next.y > height ? resetParticle() : next;

        ctx.beginPath();
        ctx.arc(current.x, current.y, current.size, 0, Math.PI * 2);
        ctx.fillStyle = current.gold
          ? `rgba(212,168,83,${current.opacity})`
          : `rgba(184,184,200,${current.opacity * 0.5})`;
        ctx.fill();
        return current;
      });
      rafId = requestAnimationFrame(draw);
    };

    const start = () => {
      if (motionQuery.matches || rafId !== null) return;
      draw();
    };

    const stop = () => {
      if (rafId === null) return;
      cancelAnimationFrame(rafId);
      rafId = null;
    };

    const handleVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    const handleMotion = () => {
      if (motionQuery.matches) {
        stop();
        ctx.clearRect(0, 0, width, height);
      } else {
        start();
      }
    };

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", handleVisibility);
    motionQuery.addEventListener("change", handleMotion);
    start();

    return () => {
      stop();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
      motionQuery.removeEventListener("change", handleMotion);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />;
}
