"use client";
import { useRef, useEffect } from 'react';

const BLOB_COLORS = ['rgba(252, 211, 211, 0.6)', 'rgba(249, 217, 226, 0.6)', 'rgba(250, 222, 218, 0.6)'];

const CanvasBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 9999, y: 9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    class Blob {
      x: number; y: number; vx: number; vy: number; radius: number; color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = 150 + Math.random() * 150;
        this.color = BLOB_COLORS[Math.floor(Math.random() * BLOB_COLORS.length)];
      }

      update() {
        const tetherX = canvas.width / 2;
        const tetherY = canvas.height / 2;
        this.vx += (tetherX - this.x) * 0.0005;
        this.vy += (tetherY - this.y) * 0.0005;

        const dx = this.x - mousePos.current.x;
        const dy = this.y - mousePos.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < this.radius + 150) {
          const angle = Math.atan2(dy, dx);
          this.vx += Math.cos(angle) * 0.4;
          this.vy += Math.sin(angle) * 0.4;
        }

        this.vx *= 0.98;
        this.vy *= 0.98;
        this.x += this.vx;
        this.y += this.vy;
      }
      
      draw() {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(this.x, this.y, this.radius * 0.7, this.x, this.y, this.radius);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'rgba(254, 240, 238, 0)');
        ctx.fillStyle = gradient;
        ctx.filter = 'blur(100px)';
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.filter = 'none';
      }
    }

    const blobs = Array.from({ length: 4 }, () => new Blob());
    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      blobs.forEach(blob => {
        blob.update();
        blob.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: 0 }} />;
};

export default CanvasBackground;