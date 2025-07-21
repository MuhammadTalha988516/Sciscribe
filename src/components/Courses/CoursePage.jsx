// pages/CoursePage.jsx
import React, { useRef } from "react";
import CourseBanner from "./CourseBanner";

import { coursesPage } from "../data/Data";

const CoursePage = () => {
  const sectionRefs = coursesPage.courses.reduce((acc, course) => {
    acc[course.slug] = useRef(null);
    return acc;
  }, {});

  const scrollTo = (slug) => {
    sectionRefs[slug]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pt-[80px]">
      <CourseBanner scrollTo={scrollTo} />

      <section className="max-w-5xl mx-auto px-4">
        {coursesPage.courses.map((course, idx) => (
          <div
            key={idx}
            ref={sectionRefs[course.slug]}
            className="bg-white shadow-md rounded-xl p-6 my-8 border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{course.title}</h2>
            <p className="text-gray-600 mb-4">{course.description}</p>

            <div className="flex flex-wrap items-center justify-between text-sm text-gray-500 mb-4">
              <ul className="list-disc ml-6">
                {coursesPage.flexibleLearning.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>

            <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full transition duration-300">
              Register Now
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CoursePage;
