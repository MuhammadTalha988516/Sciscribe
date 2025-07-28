import React from "react";
import { useNavigate } from "react-router-dom";
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
    icon: <FileText className="text-cyan-300 w-8 h-8" />,
    title: "Editing & Proofreading",
    description:
      "Polish your research papers, proposals, or presentations with thorough editing. We check grammar, structure, tone, and formatting for scientific clarity and accuracy.",
    extra:
      "Perfect for journals, grant proposals, presentations. We refine grammar, tone, and structure.",
  },
  {
    icon: <Brain className="text-yellow-300 w-8 h-8" />,
    title: "Scientific Consultancy",
    description:
      "Get expert advice on study design, methodology, and publication strategies. We help researchers plan, develop protocols, and achieve publication goals efficiently.",
    extra:
      "One-on-one research planning, protocols, and publication strategy advice.",
  },
  {
    icon: <BarChart3 className="text-pink-400 w-8 h-8" />,
    title: "Data Analysis",
    description:
      "Our specialists handle your statistical or bioinformatics data using R, SPSS, Python, and more. We ensure your findings are clear, accurate, and publication-ready.",
    extra:
      "Interpret results with clarity and prepare robust publication-ready analyses.",
  },
  {
    icon: <Cpu className="text-green-300 w-8 h-8" />,
    title: "AI & Machine Learning Training",
    description:
      "Join our workshops to learn AI and ML applications in science. We cover beginner to advanced techniques for analyzing biological or health data with confidence.",
    extra:
      "Apply data-driven methods to biological and health data. Beginner to advanced.",
  },
  {
    icon: <PenTool className="text-orange-300 w-8 h-8" />,
    title: "Scientific Writing & Communication",
    description:
      "Master the skills needed to write clear, impactful scientific papers. We guide you in structuring content for journals, proposals, and professional presentations.",
    extra: "Seminars and courses for better papers, proposals, and presentations.",
  },
  {
    icon: <Presentation className="text-purple-300 w-8 h-8" />,
    title: "In-Person Seminars & Trainings",
    description:
      "We organize customized seminars for universities and research centers. Topics include bioinformatics, AI, research ethics, and scientific writing — on-site or online.",
    extra: "AI, bioinformatics, scientific writing, research ethics — on-site or virtual.",
  },
];

const OurServices = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen w-full bg-gray-900 py-12 px-4 text-white">
      {/* ✅ Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#00A86B] mb-4">
          Our Services
        </h1>
        <p className="text-gray-300 text-lg md:text-xl">
          Explore our specialized services and find the perfect support for your research journey.
        </p>
      </div>

      {/* ✅ Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => navigate("/contact-us")}
            className="group relative p-6 flex flex-col justify-between bg-gray-800 rounded-xl h-full overflow-hidden transition duration-500 border border-transparent hover:border-[#00A86B] cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-start mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#00A86B]">
                {service.title}
              </h3>
              <p className="text-gray-200 text-sm mb-4">
                {service.description}
              </p>
            </div>

            <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">
              <p className="text-gray-300 text-sm mb-4">{service.extra}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // ⏸️ prevent parent div click
                  navigate("/contact-us");
                }}
                className="bg-[#00A86B] text-white px-4 py-2 rounded-full text-sm hover:bg-green-700 transition"
              >
                Inquire Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
