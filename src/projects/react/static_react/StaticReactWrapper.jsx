import React from 'react';
import StaticReactApp from './App';

export default function StaticReactWrapper() {
  return (
    <section className="w-full max-w-4xl p-4 rounded-lg overflow-hidden">
      <h2 className="text-2xl font-bold text-center mb-4 text-white">Static React</h2>
      <StaticReactApp />
    </section>
  );
}
