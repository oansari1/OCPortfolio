import React from 'react';
import ChefClaudeApp from './App';

export default function ChefClaudeWrapper() {
  return (<section className="w-full max-w-4xl p-2 sm:p-4 rounded-lg overflow-hidden bg-[#3A3A3A] my-2 sm:my-4 mx-auto pb-2 sm:pb-3">
        <h2
          className="font-semibold text-[#FA9600] mt-0 mb-2 sm:mb-4"
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.75rem)",
          }}
        >Chef Claude</h2>
        <p className="text-[#8C8C8C] my-2 sm:my-4 text-base sm:text-lg">
          A virtual chef powered by Mistral (Claude was the original LLM I was using, hence the name).
        </p>
        <p className="text-base sm:text-lg mb-2">
          Input at least 4 ingredients, then it will recommend a recipe based on those and other common ingredients.
        </p>
    <div className="w-full max-w-4xl mt-4 sm:mt-10 p-2 sm:p-4 bg-[#FAFAF8] text-black rounded-lg shadow-md">
      <ChefClaudeApp /></div>
    </section>
  );
}
