import React, { useEffect, useRef, useState } from 'react';

interface Bubble {
  x: number;
  y: number;
  radius: number;
  dx: number;
  dy: number;
  color: string;
}

export default function BubbleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const colors = ['#AEC6CF', '#98FB98', '#FFF68F', '#DDA0DD'];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const createBubble = () => ({
      x: Math.random() * canvas.width,
      y: canvas.height + 100,
      radius: Math.random() * 30 + 20,
      dx: (Math.random() - 0.5) * 2,
      dy: -Math.random() * 2 - 1,
      color: colors[Math.floor(Math.random() * colors.length)]
    });

    const initialBubbles = Array(15).fill(null).map(createBubble);
    setBubbles(initialBubbles);

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      setBubbles(prevBubbles => 
        prevBubbles.map(bubble => {
          bubble.x += bubble.dx;
          bubble.y += bubble.dy;

          if (bubble.y < -bubble.radius) {
            return createBubble();
          }

          ctx.beginPath();
          ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
          ctx.fillStyle = bubble.color;
          ctx.globalAlpha = 0.6;
          ctx.fill();
          ctx.strokeStyle = '#ffffff';
          ctx.stroke();
          
          return bubble;
        })
      );

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full"
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
}