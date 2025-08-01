import React, { useEffect } from "react";
import { coursesPage } from "../data/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const CourseBanner = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: false });
  }, []);

  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-24 px-4 md:px-16 mt-12 relative"
      style={{
        backgroundImage: `url(${coursesPage.intro.bannerImage})`,
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-50 z-0"></div>

      <div
        className="relative z-10 text-green-600 text-center mb-16"
        data-aos="fade-down"
      >
        <h2 className="text-3xl md:text-5xl font-bold">
          {coursesPage.intro.heading}
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mt-4">
          {coursesPage.intro.description}
        </p>
      </div>

      <div className="relative z-10" data-aos="zoom-in">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {coursesPage.courses.map((course, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer transform transition duration-500 hover:shadow-2xl hover:scale-105"
                onClick={() => navigate(`/courses/${course.slug}`)}
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75"
                />

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-center px-4 transition-opacity duration-500">
                  <h3 className="text-2xl font-bold text-white drop-shadow mb-2">
                    {course.title}
                  </h3>
                  <p className="text-white/90 text-sm mb-4 drop-shadow">
                    {course.description}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = `/courses/${course.slug}`;
                    }}
                    className="bg-green-500 text-black px-4 py-2 rounded-full hover:bg-green-400 transition"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div
        className="relative z-10 mt-12 text-center text-gray-800"
        data-aos="fade-up"
      >
        <p className="text-sm">{coursesPage.flexibleLearning.join(" • ")}</p>
      </div>
    </section>
  );
};

export default CourseBanner;
