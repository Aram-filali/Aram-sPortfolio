'use client'
import { useEffect, useRef } from 'react';

const CursorWaveEffect = ({ isDarkMode }) => {
  const canvasRef = useRef(null);
  const trail = useRef([]);
  const maxTrailLength = 70; 
  const lastMoveTime = useRef(Date.now());
  const targetPos = useRef({ x: 0, y: 0 });
  const smoothPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const handleMouseMove = (e) => {
      lastMoveTime.current = Date.now();
      targetPos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Interpolation douce (lerp) pour un mouvement fluide
      smoothPos.current.x += (targetPos.current.x - smoothPos.current.x) * 0.15;
      smoothPos.current.y += (targetPos.current.y - smoothPos.current.y) * 0.15;

      // Ajouter la position lissée à la traînée
      trail.current.push({ x: smoothPos.current.x, y: smoothPos.current.y });
      if (trail.current.length > maxTrailLength) {
        trail.current.shift();
      }

      // Réduire rapidement la traînée si le curseur ne bouge pas
      const timeSinceLastMove = Date.now() - lastMoveTime.current;
      if (timeSinceLastMove > 100) {
        // Supprimer plusieurs points à la fois pour une disparition rapide
        const removeCount = Math.min(5, trail.current.length);
        trail.current.splice(0, removeCount);
      }

      trail.current.forEach((pos, index) => {
        const progress = index / trail.current.length;
        const opacity = progress * 0.7; 
        const size = 120 * progress;

        const gradient = ctx.createRadialGradient(
          pos.x, pos.y, 0,
          pos.x, pos.y, size
        );

        if (isDarkMode) {
          gradient.addColorStop(0, `rgba(100, 150, 255, ${opacity})`);
          gradient.addColorStop(0.5, `rgba(150, 100, 255, ${opacity * 0.6})`);
          gradient.addColorStop(1, 'rgba(100, 255, 150, 0)');
        } else {
          gradient.addColorStop(0, `rgba(255, 220, 180, ${opacity})`);
          gradient.addColorStop(0.5, `rgba(255, 240, 200, ${opacity * 0.6})`);
          gradient.addColorStop(1, 'rgba(180, 255, 180, 0)');
        }

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
};

export default CursorWaveEffect;