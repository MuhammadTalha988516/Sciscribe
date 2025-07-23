// import React from "react";
// import { useLocation } from "react-router-dom";
// import { servicesPage } from "../data/Data";

// const GenericServicePage = () => {
//   const location = useLocation();
//   const service = servicesPage.services.find(s => s.route === location.pathname);

//   if (!service) {
//     return (
//       <div className="text-center min-h-[400px] py-20 text-lg">
//         Service not found.
//       </div>
//     );
//   }

//   return (
//     <div className="pt-20 bg-white">
//       {/* Banner */}
//       <section className="py-20 px-6 bg-white">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
//           <div>
//             <h4 className="text-green-500 text-sm md:text-base mb-2">
//               {service.bannerText}
//             </h4>
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-4">
//               Perfect Your{" "}
//               <span className="bg-green-500 text-white px-2 rounded-md inline-block">
//                 {service.title}
//               </span>
//               <br />
//               with Precision, Clarity, & <br /> Professional Polish.
//             </h1>
//             <p className="text-gray-600 text-lg mb-6">{service.description}</p>
//             <div className="flex gap-4 flex-wrap">
//               <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium">
//                 Get Professional Editing
//               </button>
//               <button className="border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-full font-medium">
//                 Proofread for Perfection
//               </button>
//             </div>
//           </div>
//           <div className="flex justify-center items-center gap-12">
//             <img src={service.image1} alt="Img1" className="w-[285px] h-[382px]" />
//             <img src={service.image2} alt="Img2" className="w-[249px] h-[382px] -mt-14" />
//           </div>
//         </div>
//       </section>

//       {/* Middle */}
//       <section className="bg-[#D9D9D9] py-20 px-4 mb-10">
//         <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-12">
//           <div>
//             <img
//               src={service.middleImg}
//               alt="Researcher"
//               className="w-[287px] h-[350px] rounded-[20px] object-cover"
//             />
//           </div>
//           <div className="max-w-[1006px]">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               How <span className="text-green-600">SciScribe</span> Works for You
//             </h2>
//             <ul className="space-y-4 text-gray-700 text-lg">
//               {service.steps.map((step, i) => (
//                 <li key={i}>• {step}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Work */}
//       <section className="bg-[#C6F2E3] py-16 px-4 text-black mb-10">
//         <div className="max-w-3xl mx-auto text-left">
//           <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8">
//             How <span className="text-[#00A86B]">SciScribe</span> Works
//           </h2>
//           <p className="mb-4 text-gray-800">
//             Not a maze. Just four clear steps to get you from stuck to submitted.
//           </p>
//           <div className="space-y-4 text-sm md:text-base">
//             <div>
//               <p className="font-semibold">1. Tell us where you're stuck</p>
//               <p className="font-normal">
//                 Need help writing? Pick what you need – we’ll meet you there.
//               </p>
//             </div>
//             <div>
//               <p className="font-semibold">2. Follow the plan, not the panic</p>
//               <p className="font-normal">
//                 No chaos. We break it all down so you're moving forward with confidence.
//               </p>
//             </div>
//             <div>
//               <p className="font-semibold">3. Learn the stuff they don’t teach in class</p>
//               <p className="font-normal">
//                 Like how to use Chat GPT for research or make sense of R.
//               </p>
//             </div>
//             <div>
//               <p className="font-semibold">4. Hit submit like a pro</p>
//               <p className="font-normal">
//                 Thesis done. Paper ready. You learned something useful.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default GenericServicePage;
