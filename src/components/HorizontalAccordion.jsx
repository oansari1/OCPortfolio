import React, { useState } from 'react';

export default function HorizontalAccordion({ sections }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div id="Accordion" className="flex flex-col items-center w-full overflow-hidden">
      {/* Accordion Container */}
      <div className="flex overflow-hidden h-72 rounded-lg shadow-lg w-full border-2 border-gray-500">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`relative transition-all duration-500 cursor-pointer flex-grow 
              ${
                activeIndex === index
                  ? 'flex-[1.5] scale-110' // Expand on hover
                  : 'flex-1' // Shrink others proportionally
              } border-2 border-[#8C8C8C] grayscale hover:grayscale-0`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-500"
              style={{
                backgroundImage: `url(${section.logo})`
              }}
            />

            {/* Title Overlay */}
            <div
              className="absolute bottom-0 w-full text-center text-white bg-black bg-opacity-50 transition-all duration-300 transform translate-y-8 truncate"
              style={{
                opacity: activeIndex === index ? 1 : 0,
                transform: activeIndex === index ? 'translateY(0)' : 'translateY(8px)',
              }}
            >
              <h3 className="p-2 text-lg">{section.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Expanded Content Container with Animation */}
      <div
        className={`w-2/3 bg-gray-800 text-white p-6 mt-4 rounded-lg shadow-lg transition-all duration-500 overflow-hidden ${
          expandedIndex !== null ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {expandedIndex !== null && (
          <>
            <h2 className="text-center text-2xl font-bold mb-4">{sections[expandedIndex].title}</h2>
            <div className="grid grid-cols-3 gap-4 text-center">
              {Array.from({ length: 12 }, (_, i) => (
                <a key={i} href="#" className="block p-2 bg-gray-700 rounded-md hover:bg-blue-500 transition">
                  Link {i + 1}
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
