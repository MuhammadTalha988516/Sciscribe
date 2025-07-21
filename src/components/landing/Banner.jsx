import React from 'react';
import studentImg from '../../assets/dboy.png'; 
import labImg from '../../assets/dgirl.png';        
import greenBlob from '../../assets/Ellipse g.png';
import blueBlob from '../../assets/Ellipse b.png';

const Banner = () => {
  return (
    <section className="bg-black py-30 px-6">
      <div className="max-w-7xl mx-auto  grid md:grid-cols-2 items-center gap-12 ">
        {/* Left Side - Text */}
        <div>
          <h4 className="text-green-500 text-sm md:text-base mb-2">
            Tight deadlines, no clear guidance – you are not alone.
          </h4>

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-snug mb-4">
            Write Your{' '}
            <span className="bg-green-500 text-white px-2 rounded-md inline-block">
              Thesis
            </span>{' '}
            <br />
            with Clarity, Confidence, & <br />
            the Right Guidance.
          </h1>

          <p className="text-gray-600 text-lg mb-6">
            Step-by-step guidance and practical training designed just for students and researchers.
            From thesis writing to data skills, we help you finish strong & grow your academic career.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium">
              Boost Writing
            </button>
            <button className="border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-full font-medium">
              Master Research
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

export default Banner;
