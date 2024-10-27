import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

export default function BreathingExercise() {
  const [isBreathing, setIsBreathing] = useState(false);
  const [instruction, setInstruction] = useState('Click to start');

  const circle = useSpring({
    scale: isBreathing ? 1.5 : 1,
    opacity: isBreathing ? 1 : 0.7,
    config: { duration: 4000 },
  });

  useEffect(() => {
    if (isBreathing) {
      const breatheIn = () => setInstruction('Breathe in...');
      const breatheOut = () => setInstruction('Breathe out...');
      const hold = () => setInstruction('Hold...');

      const cycle = async () => {
        breatheIn();
        await new Promise(r => setTimeout(r, 4000));
        hold();
        await new Promise(r => setTimeout(r, 4000));
        breatheOut();
        await new Promise(r => setTimeout(r, 4000));
      };

      const interval = setInterval(cycle, 12000);
      cycle();

      return () => clearInterval(interval);
    }
  }, [isBreathing]);

  return (
    <div className="text-center">
      <animated.div
        style={circle}
        className="mx-auto w-32 h-32 rounded-full bg-blue-300/50 dark:bg-blue-400/50 flex items-center justify-center cursor-pointer mb-4"
        onClick={() => setIsBreathing(!isBreathing)}
      >
        <p className="text-blue-900 dark:text-white font-medium">{instruction}</p>
      </animated.div>
      <button
        onClick={() => setIsBreathing(!isBreathing)}
        className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-900 dark:text-white px-4 py-2 rounded-full"
      >
        {isBreathing ? 'Stop' : 'Start'} Breathing Exercise
      </button>
    </div>
  );
}