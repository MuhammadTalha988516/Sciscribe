import React, { useEffect, useRef, useMemo, useCallback } from "react";
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
  const sectionRef = useRef();
  const headerRef = useRef();
  const cardsRef = useRef();

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

  const handleContactClick = useCallback(() => {
    window.location.href = "/contact-us";
  }, []);

  const handleServiceClick = useCallback(() => {
    window.location.href = "/services";
  }, []);

  useEffect(() => {
    const cardsContainer = cardsRef.current;
    if (!cardsContainer) return;

    const handleScroll = () => {
      const cards = Array.from(cardsContainer.children);
      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (cardRect.top < windowHeight - 40) {
          card.style.opacity = 1;
          card.style.transform = "translateY(0)";
        } else {
          card.style.opacity = 0;
          card.style.transform = "translateY(50px)";
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    if (!section || !header) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrollProgress = Math.min(
        Math.max(0, -rect.top / (rect.height - window.innerHeight)),
        1
      );
      if (scrollProgress > 0) {
        const headerX = scrollProgress * -20;
        const maxY = 20;
        const headerY = Math.min(scrollProgress * maxY, maxY);
        header.style.transform = `translate(-40%, -40%) translate(${headerX}vw, ${headerY}vh)`;
      } else {
        header.style.transform = "translate(-50%, -50%)";
      }
      header.style.opacity = 1;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[250vh] bg-white"
    >
      {/* Sticky parent for header */}
      <div className="sticky  top-0 w-full h-screen pl-1 flex items-center justify-center pointer-events-none">
        <div
          ref={headerRef}
          className="absolute top-1/3 left-1/2 max-w-lg text-center z-10 pointer-events-auto"
          style={{
            willChange: "transform, opacity",
            transition: "transform 0.5s cubic-bezier(0.25, 0.5, 0.94)",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-green-600 mb-6">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed">
            Supporting your research journey with expert solutions.
          </p>
          <button
            onClick={handleContactClick}
            className="text-orange-600 font-semibold hover:underline text-lg md:text-xl transition-colors duration-200"
            aria-label="Contact Us"
          >
            GET IN TOUCH →
          </button>
        </div>
      </div>

      {/* Sticky cards appear halfway down, right side */}
      <div
        ref={cardsRef}
        className="sticky top-1/2 right-0 flex flex-col gap-6 max-w-lg w-full pr-10 ml-auto"
        style={{
          willChange: "transform, opacity",
        }}
      >
        {services.map((service, idx) => (
          <div
            key={idx}
            onClick={handleServiceClick}
            className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group flex-shrink-0"
            role="button"
            tabIndex={0}
            aria-label={`Read more about ${service.title}`}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleServiceClick();
            }}
            style={{
              opacity: 0,
              transform: "translateY(50px)",
              transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="flex-shrink-0">{icons[service.iconKey]}</div>
              <h4 className="font-semibold text-lg text-gray-800 group-hover:text-green-600 transition-colors duration-200">
                {service.title}
              </h4>
            </div>
            <p className="text-gray-600 text-base leading-relaxed mb-3">
              {service.description}
            </p>
            <span className="text-orange-600 font-semibold hover:underline text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
              Learn More →
            </span>
          </div>
        ))}
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-30 pointer-events-none" />
    </section>
  );
};

export default OurServices;
