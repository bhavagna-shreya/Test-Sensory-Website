import { useState } from 'react';

export default function ColorMixer() {
  const [colors, setColors] = useState({
    red: 150,
    green: 200,
    blue: 255,
  });

  const [showControls, setShowControls] = useState(false);

  const mixedColor = `rgb(${colors.red}, ${colors.green}, ${colors.blue})`;

  return (
    <div className="p-4">
      <div
        className="w-full h-32 rounded-lg mb-4 transition-colors duration-300"
        style={{ backgroundColor: mixedColor }}
      />

      {/* Toggle button to show/hide controls */}
      <button
        onClick={() => setShowControls(!showControls)}
        className="px-4 py-2 bg-blue-600 text-white rounded-md mb-4 hover:bg-blue-700 transition-colors duration-200"
      >
        {showControls ? 'Hide Color Controls' : 'Show Color Controls'}
      </button>

      {/* Color controls, visible only if showControls is true */}
      {showControls && (
        <div>
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
