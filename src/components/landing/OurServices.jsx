import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
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
    iconKey: "FileText",
    title: "Editing & Proofreading",
    description:
      "Polish your research papers, proposals, or presentations with thorough editing.",
  },
  {
    iconKey: "Brain",
    title: "Scientific Consultancy",
    description:
      "Expert advice on study design, methodology, and publication strategies.",
  },
  {
    iconKey: "BarChart3",
    title: "Data Analysis",
    description:
      "We handle statistical or bioinformatics data using R, SPSS, Python, and more.",
  },
  {
    iconKey: "Cpu",
    title: "AI & Machine Learning Training",
    description:
      "Workshops on AI/ML for biological or health data — beginner to advanced.",
  },
  {
    iconKey: "PenTool",
    title: "Scientific Writing & Communication",
    description:
      "Learn to write clear, impactful scientific papers, proposals, and presentations.",
  },
  {
    iconKey: "Presentation",
    title: "In-Person Seminars & Trainings",
    description:
      "Seminars for universities on bioinformatics, AI, research ethics, and more.",
  },
];

const OurServices = () => {
  const [scrolled, setScrolled] = useState(true);
  const triggerRef = useRef(null);

  const icons = useMemo(
    () => ({
      FileText: <FileText className="text-cyan-600 w-8 h-8" />,
      Brain: <Brain className="text-yellow-600 w-8 h-8" />,
      BarChart3: <BarChart3 className="text-pink-600 w-8 h-8" />,
      Cpu: <Cpu className="text-green-600 w-8 h-8" />,
      PenTool: <PenTool className="text-orange-600 w-8 h-8" />,
      Presentation: <Presentation className="text-purple-600 w-8 h-8" />,
    }),
    []
  );

  useEffect(() => {
    import("aos").then((AOS) => AOS.init({ duration: 700, once: true }));

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (triggerRef.current) observer.observe(triggerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleContactClick = useCallback(() => {
    window.location.href = "/contact-us";
  }, []);

  const handleServiceClick = useCallback(() => {
    window.location.href = "/services";
  }, []);

  return (
    <section className="bg-white">
      {/* ✅ Intro */}
      <div
        className={`h-[60vh] flex flex-col items-center justify-center text-center px-4 md:px-6 transition-all duration-700 ease-in-out mb-8 ${
          scrolled
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-6 pointer-events-none"
        }`}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#00A86B] mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-6 max-w-xl">
          Supporting your research journey with expert solutions.
        </p>
        <button
          onClick={handleContactClick}
          className="text-orange-600 font-semibold hover:underline text-base md:text-lg"
          aria-label="Contact Us"
        >
          GET IN TOUCH →
        </button>
      </div>

      {/* ✅ Scroll Trigger */}
      <div ref={triggerRef} className="h-[1px] -mt-40" />

      {/* ✅ Services Grid */}
      <div
        className={`max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start transition-all duration-700 ease-in-out ${
          scrolled
            ? "opacity-0 -translate-y-6 pointer-events-none"
            : "opacity-100 translate-y-0"
        }`}
      >
        {/* ✅ Sticky Left Text on Desktop Only */}
        <div className="lg:sticky lg:top-20 self-start transition-all duration-700 ease-in-out">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#00A86B] mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-6 max-w-xl">
            Supporting your research journey with expert solutions.
          </p>
          <button
            onClick={handleContactClick}
            className="text-orange-600 font-semibold hover:underline text-base md:text-lg"
            aria-label="Contact Us"
          >
            GET IN TOUCH →
          </button>
        </div>

        {/* ✅ Service Cards */}
        <div className="space-y-6 md:space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={handleServiceClick}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="block bg-gray-50 border border-gray-200 rounded-2xl shadow p-4 md:p-6 hover:shadow-md transition cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label={`Read more about ${service.title}`}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleServiceClick();
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-0">
                  {service.title}
                </h4>
                {icons[service.iconKey]}
              </div>
              <p className="text-gray-600 text-sm md:text-base mb-3">
                {service.description}
              </p>
              <span className="text-orange-600 font-semibold hover:underline text-xs md:text-sm">
                Learn More →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
