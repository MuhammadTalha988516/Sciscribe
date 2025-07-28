import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
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
  const navigate = useNavigate(); // ✅ Hook

  return (
    <section className="py-20 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative p-6 text-white rounded-xl overflow-hidden transition duration-500 border border-transparent hover:border-[#00A86B]"
          >
            <div className="flex items-center justify-start mb-4">
              {service.icon}
            </div>

            {/* Title always green */}
            <h3 className="text-xl font-semibold mb-2 text-[#00A86B]">
              {service.title}
            </h3>

            {/* Improved description */}
            <p className="text-gray-200 text-sm mb-4">
              {service.description}
            </p>

            {/* Extra description + button only on hover */}
            <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">
              <p className="text-gray-300 text-sm mb-4">{service.extra}</p>
              <button
                onClick={() => navigate("/contact-us")} 
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
