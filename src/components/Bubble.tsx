import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

interface BubbleProps {
  x: number;
  y: number;
}

export default function Bubble({ x, y }: BubbleProps) {
  const [popped, setPopped] = useState(false);
  const [showPalette, setShowPalette] = useState(false);

  const bubbleSpring = useSpring({
    scale: popped ? 0 : 1,
    opacity: popped ? 0 : 0.6,
    transform: `translate(${x}px, ${y}px)`,
  });

  const handlePop = () => {
    if (!popped) {
      setPopped(true);
      setShowPalette(true);
      setTimeout(() => setPopped(false), 2000);
    }
  };

  return (
    <>
      <animated.div
        style={{
          ...bubbleSpring,
          position: 'absolute',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(173, 216, 230, 0.4))',
          cursor: 'pointer',
        }}
        onClick={handlePop}
      />
      {showPalette && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-4 shadow-lg">
          <div className="grid grid-cols-3 gap-2">
            {['#FFB5E8', '#B5DEFF', '#E7FFB5', '#FFD1B5', '#B5FFD1', '#FFB5D1'].map((color) => (
              <div
                key={color}
                className="w-12 h-12 rounded-full cursor-pointer transition-transform hover:scale-110"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}