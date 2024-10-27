import { useState } from 'react';

export default function ColorMixer() {
  const [colors, setColors] = useState({
    red: 150,
    green: 200,
    blue: 255,
  });

  const mixedColor = `rgb(${colors.red}, ${colors.green}, ${colors.blue})`;

  return (
    <div className="p-4">
      <div 
        className="w-full h-32 rounded-lg mb-4 transition-colors duration-300"
        style={{ backgroundColor: mixedColor }}
      />
      
      {Object.entries(colors).map(([color, value]) => (
        <div key={color} className="mb-4">
          <label className="block text-blue-900 dark:text-white mb-2 capitalize">
            {color}: {value}
          </label>
          <input
            type="range"
            min="0"
            max="255"
            value={value}
            onChange={(e) => setColors(prev => ({
              ...prev,
              [color]: parseInt(e.target.value)
            }))}
            className="w-full"
          />
        </div>
      ))}
    </div>
  );
}