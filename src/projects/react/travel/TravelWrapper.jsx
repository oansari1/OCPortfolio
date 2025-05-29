import React from 'react';
import TravelApp from './App';

export default function TravelWrapper() {
  return (
    <section className="w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden">
      <h2 className="text-2xl font-bold text-center mb-4 text-black">Data-driven React</h2>
      <TravelApp />
    </section>
  );
}
