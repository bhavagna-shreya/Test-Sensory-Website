import React from 'react';
import BubbleField from './components/BubbleField';
import Interactive3DShape from './components/Interactive3DShape';
import OceanBackground from './components/OceanBackground';
import ThemeToggle from './components/ThemeToggle';
import BreathingExercise from './components/BreathingExercise';
import ColorMixer from './components/ColorMixer';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden dark:bg-gray-900 transition-colors duration-300">
      <OceanBackground />
      <BubbleField />
      <ThemeToggle />
      
      <div className="relative z-10">
        <header className="pt-8 text-center">
          <h1 className="text-4xl font-bold text-blue-900 dark:text-blue-100 mb-2">
            Sensory Play Adventure
          </h1>
          <p className="text-xl text-blue-800 dark:text-blue-200">
            A calming space for learning and exploration
          </p>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-8 backdrop-blur-sm shadow-lg transition-transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-blue-900 dark:text-blue-100 mb-4">
                3D Shapes Explorer
              </h2>
              <Interactive3DShape />
              <p className="mt-4 text-blue-800 dark:text-blue-200">
                Drag to rotate the shapes! Click them to change their colors.
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-8 backdrop-blur-sm shadow-lg transition-transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-blue-900 dark:text-blue-100 mb-4">
                Calming Breaths
              </h2>
              <BreathingExercise />
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-8 backdrop-blur-sm shadow-lg transition-transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-blue-900 dark:text-blue-100 mb-4">
                Color Mixer
              </h2>
              <ColorMixer />
              <p className="mt-4 text-blue-800 dark:text-blue-200">
                Mix colors to create your perfect calming shade!
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;