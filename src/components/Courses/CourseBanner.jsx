import React from "react";
import { coursesPage } from "../data/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CourseBanner = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-24 px-4 md:px-16 mt-12 relative"
      style={{
        backgroundImage: `url(${coursesPage.intro.bannerImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      <div className="relative z-10 text-white text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold">
          {coursesPage.intro.heading}
        </h2>
        <p className="text-lg md:text-xl mt-4">
          {coursesPage.intro.description}
        </p>
      </div>

      {/* Swiper Slider */}
      <div className="relative z-10">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {coursesPage.courses.map((course, index) => (
            <SwiperSlide key={index}>
              <div className="bg-black bg-opacity-90 backdrop-blur-md border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Footer Text */}
      <div className="relative z-10 mt-12 text-center text-white">
        <p className="text-sm">{coursesPage.flexibleLearning.join(" • ")}</p>
      </div>
    </section>
  );
};

export default CourseBanner;
