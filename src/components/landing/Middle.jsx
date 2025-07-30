import React, { useState } from "react";

const cards = [
  {
    title: "Step-by-step thesis help",
    desc: "Clear guidance from your first draft to final formatting.",
    bg: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
  },
  {
    title: "Tailored for students",
    desc: "Examples and tools that actually match your field.",
    bg: "https://images.unsplash.com/photo-1543295523-78c9bbdba65c",
  },
  {
    title: "Plagiarism-safe writing",
    desc: "Learn how to write with confidence and integrity.",
    bg: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
  },
  {
    title: "Hands-on training",
    desc: "Practical courses in ChatGPT, data analysis, and research methods.",
    bg: "https://images.unsplash.com/photo-1544717305-2782549b5136",
  },
  {
    title: "Made for tight schedules",
    desc: "Learn fast, write smart, and finish without the overwhelm.",
    bg: "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a",
  },
];

const CARD_WIDTH = 200;
const EXPANDED_WIDTH = 400;

const Middle = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-20 px-4 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-green-600">
          Why Choose Us?
        </h2>
        <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto">
          Made for students, researchers, and professionals who want clarity, speed, and quality.
        </p>
      </div>

      {/* Cards */}
      <div className="hidden md:flex relative h-[340px] justify-center items-center overflow-x-auto">
        <div className="relative" style={{ height: "340px", width: "100%", maxWidth: "1200px" }}>
          {cards.map((card, index) => {
            const isHovered = hoveredIndex === index;
            const leftShift = cards.reduce((acc, _, i) => {
              if (i < index) {
                return (
                  acc +
                  (hoveredIndex === i ? EXPANDED_WIDTH : CARD_WIDTH)
                );
              }
              return acc;
            }, 0);

            const width = isHovered ? EXPANDED_WIDTH : CARD_WIDTH;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="absolute top-0 transition-all duration-500 ease-in-out rounded-xl overflow-hidden shadow-xl cursor-pointer"
                style={{
                  width: `${width}px`,
                  height: "400px",
                  left: `${leftShift}px`,
                  zIndex: isHovered ? 10 : index,
                }}
              >
                <div className="absolute inset-0">
                  <div
                    className={`w-full h-full bg-cover bg-center transition-all duration-700 ${
                      isHovered ? "blur-0 scale-105" : "blur-sm"
                    }`}
                    style={{ backgroundImage: `url(${card.bg})` }}
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="relative z-20 p-5 h-full flex flex-col justify-start">
                  <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                  <p
                    className={`text-sm text-gray-200 transition-all duration-500 ${
                      isHovered
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-5"
                    }`}
                  >
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ✅ Mobile version: stacked */}
      <div className="md:hidden grid gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <div
              className="w-full h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${card.bg})` }}
            >
              <div className="w-full h-full bg-black/40 flex items-end p-4">
                <div>
                  <h3 className="text-lg font-bold mb-1">{card.title}</h3>
                  <p className="text-sm text-gray-200">{card.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Middle;
