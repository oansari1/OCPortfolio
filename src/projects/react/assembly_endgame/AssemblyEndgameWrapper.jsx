import React from 'react';
import AssemblyEndgameApp from './App';

export default function AssemblyEndgameWrapper() {
  return (
    <section className="w-full max-w-4xl p-4 bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4 text-white">Assembly Endgame</h2>
      <AssemblyEndgameApp />
    </section>
  );
}
