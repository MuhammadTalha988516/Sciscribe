import React, { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import CourseBanner from "../Courses/CourseBanner";

import AOS from "aos";
import "aos/dist/aos.css";

//  Import TopBanner
import TopBanner from "../Courses/TopBanner";

const CoursePage = ({ pageData }) => {
  const { slug } = useParams();

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: false });
  }, []);

  const sectionRefs =
    pageData?.courses?.reduce((acc, course) => {
      acc[course.slug] = useRef(null);
      return acc;
    }, {}) || {};

  if (!pageData) {
    return (
      <div className="text-center min-h-[400px] py-20 text-lg text-black bg-white">
        No course data available.
      </div>
    );
  }

  const filteredCourses =
    slug && pageData.courses.some((c) => c.slug === slug)
      ? pageData.courses.filter((c) => c.slug === slug)
      : pageData.courses;

  return (
    <div className="pt-0 bg-white text-black min-h-screen">
      {/*  Common Top Banner */}
      

      {filteredCourses.map((course) => (
        <div key={course.slug}>
          {/*  Hero Section */}
          <section
  className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center px-4 md:px-16"
  data-aos="fade-down"
>
  <div className="absolute inset-0">
    <img
      src={course.image}
      alt={course.title}
      className="w-full h-full object-cover z-0 brightness-50"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
  </div>

  <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow">
      {course.title}
    </h1>
    <p className="text-lg md:text-xl drop-shadow">
      {course.description}
    </p>
    {/* <button className="mt-6 bg-green-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-green-400 shadow transition">
      Register Now
    </button> */}
  </div>
</section>


          {/*  Course Detail Section */}
          <section
            ref={sectionRefs[course.slug]}
            className="max-w-4xl mx-auto px-4 py-16"
            data-aos="fade-up"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-green-500 rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  About {course.title}
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {course.description}
                </p>

                {pageData?.flexibleLearning?.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-white mb-2 text-lg">
                      Flexible Learning Options:
                    </h3>
                    <ul className="list-disc ml-6 text-black space-y-2">
                      {pageData.flexibleLearning.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <button className="mt-8 bg-green-600 hover:bg-green-500 text-black px-6 py-3 rounded-full shadow-md transition w-max">
                  Register Now
                </button>
              </div>

              <div
                className="flex items-center justify-center"
                data-aos="zoom-in"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="rounded-xl  shadow-2xl w-full max-w-2xl max-h-full object-cover border-4 border-white/10"
                />
              </div>
            </div>
          </section>
        </div>
      ))}

    
      <CourseBanner />
    </div>
  );
};

export default CoursePage;