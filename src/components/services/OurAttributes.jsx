import React from "react";
import {
  Users,
  Clock,
  ShieldCheck,
  Lock,
  Video,
} from "lucide-react";

const attributes = [
  {
    icon: <Users className="text-[#00A86B] w-6 h-6" />,
    title: "Personalized Consultations",
    description:
      "Get one-on-one expert guidance designed specifically for your unique research goals and challenges.",
  },
  {
    icon: <Clock className="text-[#00A86B] w-6 h-6" />,
    title: "Timely Delivery",
    description:
      "We respect your deadlines and ensure that your projects are delivered promptly without compromising on quality.",
  },
  {
    icon: <ShieldCheck className="text-[#00A86B] w-6 h-6" />,
    title: "Ethical & Plagiarism-Free",
    description:
      "Your work is handled with integrity, ensuring originality and adherence to the highest academic standards.",
  },
  {
    icon: <Lock className="text-[#00A86B] w-6 h-6" />,
    title: "Confidentiality Guaranteed",
    description:
      "Your ideas and data are protected with strict confidentiality protocols for your peace of mind.",
  },
  {
    icon: <Video className="text-[#00A86B] w-6 h-6" />,
    title: "Hybrid Learning Options",
    description:
      "Benefit from flexible online and in-person sessions that fit seamlessly into your schedule and location.",
  },
];

const OurAttributes = () => {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-[#00A86B]">What Sets Us Apart</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-16">
          Discover why researchers choose us: combining expertise, integrity, confidentiality,
          and flexibility to help you succeed.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {attributes.map((attr, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-[#00A86B] transition"
          >
            <div className="flex items-center gap-2 mb-3">
              {attr.icon}
              <h3 className="text-lg font-semibold text-[#00A86B]">{attr.title}</h3>
            </div>
            <p className="text-white text-sm leading-relaxed">
              {attr.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurAttributes;
