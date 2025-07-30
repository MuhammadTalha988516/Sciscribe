import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
  {
    question: "Do you only help with medical theses and research papers?",
    answer: "No, we support a variety of academic disciplines beyond medical research.",
  },
  {
    question: "I'm new to research. Can I still join your training courses?",
    answer: "Absolutely! Our training is designed for beginners and experts alike.",
  },
  {
    question: "What's the difference between thesis and research paper help?",
    answer: "Thesis help is more comprehensive and long-term, while paper help is project-specific.",
  },
  {
    question: "Do I need technical skills for the Data Science with R course?",
    answer: "No prior experience is required — we teach everything from scratch.",
  },
  {
    question: "Can I use AI models for academic writing without risking plagiarism?",
    answer: "Yes, when used correctly. We guide you on ethical AI writing practices.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="w-full bg-gray-900 text-[#00A86B] py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">FAQ</h2>

      <div className="max-w-2xl mx-auto space-y-4">
        {faqData.map((item, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded overflow-hidden">
            <button
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              className="w-full flex justify-between items-center px-4 py-4 text-left text-base font-medium text-gray-800"
            >
              {item.question}
              <span>{activeIndex === i ? <FaMinus /> : <FaPlus />}</span>
            </button>
            {activeIndex === i && (
              <div className="px-4 pb-4 text-gray-600 text-sm">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
