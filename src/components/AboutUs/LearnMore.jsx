import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Target,
  Eye,
  Star,
  BookOpenCheck,
  Lightbulb,
} from "lucide-react";
import { landingPage, aboutUsPage } from "../data/Data";
import Grid from "../../assets/grid.png"; // ✅ Make sure this path is correct

const iconMap = {
  mission: <Target className="text-white" size={28} />,
  vision: <Eye className="text-white" size={28} />,
  values: <Star className="text-white" size={28} />,
  default: <BookOpenCheck className="text-white" size={28} />,
};

const LearnMore = () => {
  const { section } = useParams();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const contentMap = {
    mission: {
      heading: "Our Mission",
      paragraph: aboutUsPage.mission,
      points: landingPage.mission,
      icon: iconMap.mission,
    },
    vision: {
      heading: "Our Vision",
      paragraph: landingPage.vision,
      icon: iconMap.vision,
    },
    values: {
      heading: "Our Values",
      points: aboutUsPage.values.map((v) => ({
        title: v,
        description: "",
      })),
      icon: iconMap.values,
    },
  };

  const content = contentMap[section?.toLowerCase()];

  if (!content) {
    return (
      <div className="text-center text-white py-32">
        <h2 className="text-2xl font-bold text-red-500 mb-4">404 - Section Not Found</h2>
        <Link to="/" className="text-green-400 underline">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-white text-black px-6 py-20 mt-10">
      {/* Background image */}
      <img
        src={Grid}
        alt="Grid Background"
        className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
      />

      <div
        className="relative z-10 max-w-5xl mx-auto backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-10 shadow-2xl"
        data-aos="fade-up"
      >
        {/* Icon */}
        <div className="flex items-center justify-center mb-6" data-aos="zoom-in">
          <div className="bg-green-500 p-3 rounded-full shadow-md">
            {content.icon || iconMap.default}
          </div>
        </div>

        {/* Heading */}
        <h1
          className="text-4xl font-bold text-green-400 text-center mb-4"
          data-aos="fade-up"
        >
          {content.heading}
        </h1>

        {/* Paragraph */}
        {content.paragraph && (
          <p
            className="text-center text-black text-lg leading-relaxed mb-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {content.paragraph}
          </p>
        )}

        {/* Points */}
        {content.points && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {content.points.map((point, idx) => (
              <div
                key={idx}
                className="bg-black border border-white/10 shadow-md p-6 rounded-xl hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={`${idx * 100}`}
              >
                <div className="flex items-center mb-2">
                  <Lightbulb className="text-green-400 mr-2" size={20} />
                  <h3 className="text-lg font-semibold text-white">{point.title}</h3>
                </div>
                {point.description && (
                  <p className="text-gray-400 text-sm">{point.description}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Back Link */}
        <div className="text-center mt-6" data-aos="fade-up" data-aos-delay="400">
         <Link
  to="/about-us"
  className="inline-block px-4 py-2 bg-green-900 text-white rounded hover:bg-green-200 transition"
>
  Back to About Us
</Link>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
