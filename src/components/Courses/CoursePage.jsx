import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import CourseBanner from "../Courses/CourseBanner";

const CoursePage = ({ pageData }) => {
  const { slug } = useParams();

  const sectionRefs =
    pageData?.courses?.reduce((acc, course) => {
      acc[course.slug] = useRef(null);
      return acc;
    }, {}) || {};

  if (!pageData) {
    return (
      <div className="text-center min-h-[400px] py-20 text-lg">
        No course data available.
      </div>
    );
  }

  const filteredCourses =
    slug && pageData.courses.some((c) => c.slug === slug)
      ? pageData.courses.filter((c) => c.slug === slug)
      : pageData.courses;

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {filteredCourses.map((course) => (
        <div key={course.slug}>
          {/* ✅ Hero Section */}
          <section className="relative py-24 px-4 md:px-16">
            <img
              src={course.image}
              alt={course.title}
              className="absolute inset-0 w-full h-full object-cover z-0 brightness-50"
            />
            <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow">
                  {course.title}
                </h1>
                <p className="text-lg md:text-xl drop-shadow">
                  {course.description}
                </p>
                <button className="mt-6 bg-white text-green-700 font-semibold px-6 py-3 rounded-full hover:bg-green-100 shadow transition">
                  Register Now
                </button>
              </div>
              <div className="hidden md:block" />
            </div>
          </section>

          {/* 📌 Course Detail Section */}
          <section
            ref={sectionRefs[course.slug]}
            className="max-w-6xl mx-auto px-4 py-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-2xl p-8">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  About {course.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {course.description}
                </p>

                {pageData?.flexibleLearning?.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2 text-lg">
                      Flexible Learning Options:
                    </h3>
                    <ul className="list-disc ml-6 text-gray-600 space-y-2">
                      {pageData.flexibleLearning.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-md transition w-max">
                  Register Now
                </button>
              </div>

              <div className="flex items-center justify-center">
                <img
                  src={course.image}
                  alt={course.title}
                  className="rounded-xl shadow-lg w-full h-80 object-cover"
                />
              </div>
            </div>
          </section>
        </div>
      ))}

      {/* 🔗 Common Banner */}
      <CourseBanner />
    </div>
  );
};

export default CoursePage;
