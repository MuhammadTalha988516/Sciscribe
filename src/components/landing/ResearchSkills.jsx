import React from "react";
import { coursesPage } from "../../components/data/Data";

const ResearchCourses = () => {
  const courses = coursesPage.courses;

  return (
    <section className="py-16 px-4 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#00A86B]">
          {coursesPage.intro.heading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="relative overflow-hidden group h-80 rounded-lg shadow-lg cursor-pointer"
              onClick={() => {
                window.location.href = `/courses/${course.slug}`;
              }}
            >
              {/* ✅ Background image */}
              <img
                src={course.image}
                alt={course.title}
                width="800"
                height="600"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm"
              />

              {/* ✅ Dark overlay for readability */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* ✅ Content */}
              <div className="relative z-10 flex flex-col h-full p-6">
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>

                <div className="relative flex-1 overflow-hidden">
                  <p className="absolute top-0 left-0 w-full text-sm text-gray-200 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out">
                    {course.description}
                  </p>
                </div>

                <div className="mt-auto self-end overflow-hidden">
                  <span className="relative inline-block font-semibold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                    <span className="border-b-2 border-[#00A86B]">Explore</span>
                    <span className="ml-2 text-[#00A86B] transition-transform duration-500 ease-in-out inline-block group-hover:ml-4">
                      →
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchCourses;
