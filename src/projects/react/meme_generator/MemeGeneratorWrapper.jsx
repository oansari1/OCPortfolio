import React from 'react';
import MemeGeneratorApp from './App';

export default function MemeGeneratorWrapper() {
  return (
    <section className="w-full max-w-4xl p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4 text-black">Meme Generator</h2>
      <MemeGeneratorApp />
    </section>
  );
}
