import { useSpring, animated } from '@react-spring/web';

export default function Ocean() {
  const wave1 = useSpring({
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(100%)' },
    config: { duration: 10000 },
    loop: true,
  });

  const wave2 = useSpring({
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(100%)' },
    config: { duration: 15000 },
    loop: true,
    delay: 5000,
  });

  const fish = useSpring({
    from: { transform: 'translate(-100%, 50%)' },
    to: { transform: 'translate(100%, 50%)' },
    config: { duration: 8000 },
    loop: true,
  });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <animated.div style={wave1} className="absolute bottom-0 w-full">
        <svg viewBox="0 0 1440 320" className="text-blue-100 opacity-50">
          <path fill="currentColor" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </animated.div>

      <animated.div style={wave2} className="absolute bottom-0 w-full">
        <svg viewBox="0 0 1440 320" className="text-blue-200 opacity-30">
          <path fill="currentColor" d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,197.3C672,213,768,235,864,229.3C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </animated.div>

      <animated.div style={fish} className="absolute">
        <div className="text-blue-400">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          </svg>
        </div>
      </animated.div>
    </div>
  );
}