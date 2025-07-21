// components/CourseBanner.jsx
import React from "react";
import { coursesPage } from "../data/Data"; // adjust path as needed

const CourseBanner = ({ scrollTo }) => {
  return (
    <section className="max-w-6xl mx-auto px-4 pt-[100px] pb-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">
          {coursesPage.intro.heading}
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          {coursesPage.intro.description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {coursesPage.courses.map((course, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => scrollTo(course.slug)}
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {course.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2">{course.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseBanner;
