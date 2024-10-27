import { useState, useEffect } from 'react';
import InteractiveBubble from './InteractiveBubble';

export default function BubbleField() {
  const [bubbles, setBubbles] = useState<Array<{ id: number; x: number; y: number; color: string }>>([]);
  const colors = ['#AEC6CF', '#98FB98', '#FFF68F', '#DDA0DD', '#FFB5E8', '#B5DEFF'];

  useEffect(() => {
    const createBubble = () => ({
      id: Math.random(),
      x: Math.random() * (window.innerWidth - 100),
      y: Math.random() * (window.innerHeight - 100),
      color: colors[Math.floor(Math.random() * colors.length)],
    });

    setBubbles(Array(12).fill(null).map(createBubble));

    const interval = setInterval(() => {
      setBubbles(prev => [...prev, createBubble()].slice(-12));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-auto">
      {bubbles.map(bubble => (
        <InteractiveBubble
          key={bubble.id}
          initialX={bubble.x}
          initialY={bubble.y}
          color={bubble.color}
        />
      ))}
    </div>
  );
}