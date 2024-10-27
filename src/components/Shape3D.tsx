import React, { useState } from 'react';
import { Cube, Sphere, Triangle } from 'lucide-react';

export default function Shape3D() {
  const [rotation, setRotation] = useState(0);

  const handleClick = () => {
    setRotation(prev => prev + 90);
  };

  return (
    <div 
      className="cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110"
      style={{ transform: `rotate(${rotation}deg)` }}
      onClick={handleClick}
    >
      <div className="flex gap-4">
        <Cube size={48} className="text-blue-300" />
        <Sphere size={48} className="text-green-300" />
        <Triangle size={48} className="text-yellow-300" />
      </div>
    </div>
  );
}