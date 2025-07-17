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

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-white text-black">
      <h2 className="text-3xl font-extrabold text-center mb-10">FAQ</h2>

      <div className="max-w-2xl mx-auto space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 shadow-md rounded-sm transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800"
            >
              {item.question}
              <span className="ml-4 text-gray-600">
                {activeIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-6 pb-4 text-sm text-gray-600">
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
