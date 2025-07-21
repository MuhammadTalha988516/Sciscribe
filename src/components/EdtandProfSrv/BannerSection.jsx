import React from 'react';
import studentImg from '../../assets/dboy.png'; 
import labImg from '../../assets/dgirl.png';        
import { servicesPage } from "../data/Data";
import image from "../../assets/pexels-mikhail-nilov-8851444.jpg"


const BannerSection = () => {
  return (
    <section className="bg-white py-30 px-6">
      <div className="max-w-7xl mx-auto  grid md:grid-cols-2 items-center gap-12 ">
        {/* Left Side - Text */}
        <div>
          <h4 className="text-green-500 text-sm md:text-base mb-2">
            Messy drafts, looming submissions – we’ll help you shine.
          </h4>

         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-4">
            Perfect Your{' '}
            <span className="bg-green-500 text-white px-2 rounded-md inline-block">
                Scientific Documents
            </span>{' '}
            <br />
            with Precision, Clarity, & <br />
            Professional Polish.
            </h1>


         <p className="text-gray-600 text-lg mb-6">
        {servicesPage.services[0].description}
         </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium">
              Get Professional Editing
            </button>
            <button className="border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-full font-medium">
              Proofread for Perfection
            </button>
          </div>
        </div>

        {/* Right Side - Images */}
        <div className="flex justify-center items-center  gap-12">
        
        

          <img
            src={studentImg}
            alt="Student"
            className="w-[285px] h-[382px]   border-blue-500"
          />
          <img
            src={labImg}
            alt="Lab"
            className="w-[249px] h-[382px] -mt-14 "
          />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
