import React from 'react';
import { Fish, Waves, Shell, Anchor } from 'lucide-react';

const SeaCreature = ({ Icon, className = "", delay = 0 }) => (
  <div 
    className={`absolute animate-swim ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    <Icon className="text-blue-300/70" size={32} />
  </div>
);

export default function OceanBackground() {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 overflow-hidden">
      {/* Waves */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="relative h-64">
          <Waves 
            className="absolute bottom-0 w-full text-blue-200/30 animate-wave"
            size={1000}
          />
          <Waves 
            className="absolute bottom-4 w-full text-blue-300/40 animate-wave"
            style={{ animationDelay: '-1.5s' }}
            size={1000}
          />
        </div>
      </div>

      {/* Swimming Fish */}
      {Array.from({ length: 8 }).map((_, i) => (
        <SeaCreature
          key={`fish-${i}`}
          Icon={Fish}
          className={`top-${Math.floor(Math.random() * 75)}%`}
          delay={i * 2}
        />
      ))}

      {/* Decorative Elements */}
      <Shell 
        className="absolute bottom-10 left-[10%] text-blue-300/50 rotate-12"
        size={48}
      />
      <Shell 
        className="absolute bottom-16 right-[15%] text-blue-300/50 -rotate-12"
        size={40}
      />
      <Anchor 
        className="absolute bottom-20 left-[30%] text-blue-300/40"
        size={56}
      />

      {/* Light Rays */}
      <div className="absolute inset-0 bg-gradient-radial from-white/10 to-transparent opacity-50" />
      
      {/* Floating Bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`bubble-${i}`}
            className="absolute rounded-full bg-white/20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              animationDuration: `${Math.random() * 5 + 3}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}