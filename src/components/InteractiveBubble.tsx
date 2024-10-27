import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

interface BubbleProps {
  initialX: number;
  initialY: number;
  color: string;
}

export default function InteractiveBubble({ initialX, initialY, color }: BubbleProps) {
  const [isPopped, setIsPopped] = useState(false);
  const [showRipple, setShowRipple] = useState(false);

  const bubbleSpring = useSpring({
    scale: isPopped ? 0 : 1,
    y: isPopped ? initialY - 100 : initialY,
    opacity: isPopped ? 0 : 0.8,
    config: { tension: 200, friction: 20 },
  });

  const rippleSpring = useSpring({
    scale: showRipple ? 2 : 0,
    opacity: showRipple ? 0 : 0.5,
    config: { duration: 1000 },
  });

  const handlePop = () => {
    if (!isPopped) {
      setIsPopped(true);
      setShowRipple(true);
      setTimeout(() => {
        setIsPopped(false);
        setShowRipple(false);
      }, 1000);
    }
  };

  return (
    <div style={{ position: 'absolute', left: initialX, top: initialY }}>
      <animated.div
        style={{
          ...bubbleSpring,
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), ${color})`,
          cursor: 'pointer',
          position: 'relative',
        }}
        onClick={handlePop}
      />
      {showRipple && (
        <animated.div
          style={{
            ...rippleSpring,
            position: 'absolute',
            width: 60,
            height: 60,
            borderRadius: '50%',
            border: `2px solid ${color}`,
            top: 0,
            left: 0,
          }}
        />
      )}
    </div>
  );
}