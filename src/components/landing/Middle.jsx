import React, { useState } from "react";

const cards = [
  {
    title: "Step-by-step thesis help",
    desc: "Clear guidance from your first draft to final formatting.",
    bg: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Tailored for students",
    desc: "Examples and tools that actually match your field.",
    bg: "https://images.unsplash.com/photo-1543295523-78c9bbdba65c?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Plagiarism-safe writing",
    desc: "Learn how to write with confidence and integrity.",
    bg: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Hands-on training",
    desc: "Practical courses in ChatGPT, data analysis, and research methods.",
    bg: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Made for tight schedules",
    desc: "Learn fast, write smart, and finish without the overwhelm.",
    bg: "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?auto=format&fit=crop&w=800&q=60",
  },
];

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

      {/* Desktop Cards */}
      <div className="hidden md:flex justify-center gap-4 overflow-hidden">
        {cards.map((card, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative rounded-xl overflow-hidden shadow-xl cursor-pointer flex-shrink-0 transition-all duration-500"
            style={{
              width: hoveredIndex === index ? "280px" : "200px",
              height: "340px",
            }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
              style={{
                backgroundImage: `url(${card.bg})`,
                transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                filter: hoveredIndex === index ? "blur(0)" : "blur(2px)",
              }}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 p-5 h-full flex flex-col justify-start">
              <h3 className="text-lg font-bold mb-2">{card.title}</h3>
              <p
                className={`text-sm text-gray-200 transition-all duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile stacked Cards */}
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
