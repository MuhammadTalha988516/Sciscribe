import React from "react";
import {
  UserCheck,
  Clock,
  ShieldCheck,
  Lock,
  Laptop2,
} from "lucide-react"; // Make sure this is installed

const highlights = [
  {
    title: "Personalized Consultations",
    description: "Tailored expert guidance for your unique research goals.",
    icon: <UserCheck className="text-green-600 w-7 h-7" />,
  },
  {
    title: "Timely Delivery",
    description: "Reliable turnaround so you always meet your deadlines.",
    icon: <Clock className="text-green-600 w-7 h-7" />,
  },
  {
    title: "Plagiarism-Free Work",
    description: "Ethical support with originality and full academic integrity.",
    icon: <ShieldCheck className="text-green-600 w-7 h-7" />,
  },
  {
    title: "Confidentiality Guaranteed",
    description: "Your data and ideas are always protected and secure.",
    icon: <Lock className="text-green-600 w-7 h-7" />,
  },
  {
    title: "Hybrid Learning Options",
    description: "Choose between flexible online or in-person formats.",
    icon: <Laptop2 className="text-green-600 w-7 h-7" />,
  },
];

const WhatSetsUsApart = () => {
  return (
    <section className="bg-[#C6F2E3] py-16 px-4 md:px-8 mb-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          What Sets Us Apart?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4 text-left hover:shadow-lg transition duration-300"
            >
              <div className="mt-1">{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
