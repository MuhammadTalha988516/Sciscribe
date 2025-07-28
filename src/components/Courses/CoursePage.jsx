import { useNavigate } from "react-router-dom";

const ResearchCourses = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-4 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#00A86B]">
          Level Up Your Research Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              onClick={() => navigate(`/courses/${course.slug}`)}
              className="relative overflow-hidden group h-100 cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={course.image}
                alt={course.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-lg"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-opacity-40"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full p-4">
                <h3 className="text-xl font-bold text-white mb-2">
                  {course.title}
                </h3>

                <div className="relative overflow-hidden flex-1">
                  <p className="absolute top-0 left-0 w-full text-sm text-gray-200 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out">
                    {course.description}
                  </p>
                </div>

                {/* Explore Link */}
                <div className="mt-auto self-end overflow-hidden">
                  <span
                    onClick={() => navigate(`/courses/${course.slug}`)}
                    className="relative inline-block font-semibold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"
                  >
                    <span className="border-b-2 border-[#00A86B] text-white">
                      Explore
                    </span>
                    <span className="ml-2 inline-block align-middle relative overflow-hidden text-[#00A86B]">
                      <span className="inline-block transition-all duration-500 ease-in-out group-hover:ml-4">
                        →
                      </span>
                      <span
                        className="absolute bottom-0 left-0 h-0.5 bg-[#00A86B] transition-all duration-500 ease-in-out group-hover:w-full"
                        style={{ width: "0" }}
                      ></span>
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
