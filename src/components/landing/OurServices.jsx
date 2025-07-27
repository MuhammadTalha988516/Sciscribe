import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FileText,
  Brain,
  BarChart3,
  Cpu,
  PenTool,
  Presentation,
} from "lucide-react";

const services = [
  {
    icon: <FileText className="text-cyan-600 w-8 h-8" />,
    title: "Editing & Proofreading",
    description:
      "Polish your research papers, proposals, or presentations with thorough editing.",
  },
  {
    icon: <Brain className="text-yellow-600 w-8 h-8" />,
    title: "Scientific Consultancy",
    description:
      "Expert advice on study design, methodology, and publication strategies.",
  },
  {
    icon: <BarChart3 className="text-pink-600 w-8 h-8" />,
    title: "Data Analysis",
    description:
      "We handle statistical or bioinformatics data using R, SPSS, Python, and more.",
  },
  {
    icon: <Cpu className="text-green-600 w-8 h-8" />,
    title: "AI & Machine Learning Training",
    description:
      "Workshops on AI/ML for biological or health data — beginner to advanced.",
  },
  {
    icon: <PenTool className="text-orange-600 w-8 h-8" />,
    title: "Scientific Writing & Communication",
    description:
      "Learn to write clear, impactful scientific papers, proposals, and presentations.",
  },
  {
    icon: <Presentation className="text-purple-600 w-8 h-8" />,
    title: "In-Person Seminars & Trainings",
    description:
      "Seminars for universities on bioinformatics, AI, research ethics, and more.",
  },
];

const OurServices = () => {
  const [scrolled, setScrolled] = useState(true);
  const triggerRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 600, once: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (triggerRef.current) observer.observe(triggerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white">
      {/* Centered Our Services */}
      <div
        className={`h-[60vh] flex flex-col items-center justify-center text-center px-6 transition-all duration-400 ${
          scrolled
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-6 pointer-events-none"
        }`}
      >
        <h2 className="text-5xl font-extrabold text-[#00A86B] mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          Supporting your research journey with expert solutions.
        </p>
        <button className="text-orange-600 font-semibold hover:underline text-lg">
          GET IN TOUCH →
        </button>
      </div>

      {/* Scroll trigger moved higher */}
      <div ref={triggerRef} className="h-[1px] -mt-40" />

      {/* Grid + Left Header */}
      <div
        className={`max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start transition-all duration-500 ${
          scrolled
            ? "opacity-0 -translate-y-6 pointer-events-none"
            : "opacity-100 translate-y-0"
        }`}
      >
        {/* Left Header */}
        <div className="transition-all duration-600">
          <h2 className="text-5xl font-extrabold text-[#00A86B] mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Supporting your research journey with expert solutions.
          </p>
          <button className="text-orange-600 font-semibold hover:underline text-lg">
            GET IN TOUCH →
          </button>
        </div>

        {/* Right: Services List */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="bg-gray-50 border border-gray-200 rounded-2xl shadow p-6 hover:shadow-md transition"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h4>
                {service.icon}
              </div>
              <p className="text-gray-600 mb-3">{service.description}</p>
              <button className="text-orange-600 font-semibold hover:underline text-sm">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
