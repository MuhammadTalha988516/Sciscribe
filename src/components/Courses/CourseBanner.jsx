import React from "react";
import { coursesPage } from "../data/Data"; 

const CourseBanner = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-16 mt-12 ">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          {coursesPage.intro.heading}
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mt-4">
          {coursesPage.intro.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {coursesPage.courses.map((course, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600 text-sm">{course.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-gray-500">
          {coursesPage.flexibleLearning.join(" • ")}
        </p>
      </div>
    </section>
  );
};

export default CourseBanner;
