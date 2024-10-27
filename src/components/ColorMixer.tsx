import { useState } from 'react';

export default function ColorMixer() {
  const [colors, setColors] = useState({
    red: 150,
    green: 200,
    blue: 255,
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const mixedColor = `rgb(${colors.red}, ${colors.green}, ${colors.blue})`;

  return (
    <div className="p-4">
      {/* Color preview box */}
      <div
        className="w-full h-24 rounded-lg mb-2 transition-colors duration-300"
        style={{ backgroundColor: mixedColor }}
      />

      {/* Toggle button for expanding or minimizing controls */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="px-4 py-2 bg-blue-600 text-white rounded-md mb-4 hover:bg-blue-700 transition-colors duration-200"
      >
        {isExpanded ? 'Minimize Controls' : 'Maximize Controls'}
      </button>

      {/* Color controls, visible only if isExpanded is true */}
      {isExpanded && (
        <div className="transition-all duration-300 ease-in-out">
          {Object.entries(colors).map(([color, value]) => (
            <div key={color} className="mb-2">
              <label className="block text-blue-900 dark:text-white mb-1 capitalize">
                {color}: {value}
              </label>
              <input
                type="range"
                min="0"
                max="255"
                value={value}
                onChange={(e) =>
                  setColors((prev) => ({
                    ...prev,
                    [color]: parseInt(e.target.value),
                  }))
                }
                className="w-full"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

