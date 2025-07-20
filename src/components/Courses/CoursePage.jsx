import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import CourseBanner from "../Courses/CourseBanner"; // ✅ Import the common banner

const CoursePage = ({ pageData }) => {
  const { slug } = useParams();

  const sectionRefs =
    pageData?.courses?.reduce((acc, course) => {
      acc[course.slug] = useRef(null);
      return acc;
    }, {}) || {};

  if (!pageData) {
    return (
      <div className="text-center py-20 text-lg">
        No course data available.
      </div>
    );
  }

  const filteredCourses =
    slug && pageData.courses.some(c => c.slug === slug)
      ? pageData.courses.filter(c => c.slug === slug)
      : pageData.courses;

  return (
    <div className="pt-20 bg-gray-50 min-h-screen ">
      {filteredCourses.map((course) => (
        <div key={course.slug}>
          {/* 📌 Specific Course Banner */}
          <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left: Text */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {course.title}
                </h1>
                <p className="text-lg md:text-xl">
                  {course.description}
                </p>
              </div>

              {/* Right: Image */}
              <div className="flex justify-center md:justify-end">
                <img
                  src={course.image}
                  alt={course.title}
                  className="rounded-lg shadow-lg w-72 h-72 object-cover"
                />
              </div>
            </div>
          </section>

          {/* 📌 Specific Course Details */}
          <section
            ref={sectionRefs[course.slug]}
            className="max-w-6xl mx-auto px-4 py-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow rounded-lg p-6 md:p-10">
              {/* Left Text */}
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  About {course.title}
                </h2>
                <p className="text-gray-600 mb-4">{course.description}</p>

                {pageData?.flexibleLearning?.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">
                      Flexible Learning Options:
                    </h3>
                    <ul className="list-disc ml-6 text-gray-600 space-y-1">
                      {pageData.flexibleLearning.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full transition w-max">
                  Register Now
                </button>
              </div>

              {/* Right Image */}
              <div className="flex items-center justify-center">
                <img
                  src={course.image}
                  alt={course.title}
                  className="rounded-lg shadow-md w-full h-80 object-cover"
                />
              </div>
            </div>
          </section>
        </div>
      ))}

      {/* 📌 Common Banner (from CourseBanner.jsx) */}
      <CourseBanner />
    </div>
  );
};

export default CoursePage;
