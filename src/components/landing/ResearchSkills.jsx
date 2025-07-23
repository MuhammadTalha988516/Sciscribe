import React from "react";
import ResearchSkills1 from "../../assets/ResearchSkills1.png";
import ResearchSkills2 from "../../assets/ResearchSkills2.png";
import ResearchSkills3 from "../../assets/ResearchSkills3.png";

const courses = [
  {
    title: "Chat GPT for Medical Research",
    description:
      "Learn how to harness AI tools like ChatGPT to help brainstorm, draft, and refine your research – making your workflow faster while keeping your unique insights front and center.",
    image: ResearchSkills3,
  },
  {
    title: "Medical Data Analysis with R",
    description:
      "Dive into medical data with confidence. This course breaks down R programming basics and data analysis techniques tailored specifically for medical research – no coding background required.",
    image: ResearchSkills2,
  },
  {
    title: "Foundations of Medical Research",
    description:
      "Build a strong foundation with clear guidance on research methods, study design, and best practices. Perfect for those new to medical research or wanting to refresh the essentials.",
    image: ResearchSkills1,
  },
];

const ResearchCourses = () => {
  return (
    <section className="py-16 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold mb-2 text-left">
            Level Up Your Research Skills
          </h2>
          <p className="text-gray-300 text-left">
            Not your usual boring lectures. Real skills, real quick — designed to help you crush your research and write like a pro.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {courses.map((course, index) => (
            <div
              key={index}
              className="flex flex-col items-start text-left rounded-2xl border border-white/20 backdrop-blur-sm p-4 transition hover:border-[#00A86B]"
            >
              <img
                src={course.image}
                alt={course.title}
                className="rounded-2xl mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-lg font-bold mb-2 text-[#00A86B]">{course.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{course.description}</p>
              <button className="mt-auto bg-[#00A86B] hover:bg-green-700 cursor-pointer text-white font-semibold py-2 px-4 rounded-full transition shadow-md">
                See Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchCourses;
