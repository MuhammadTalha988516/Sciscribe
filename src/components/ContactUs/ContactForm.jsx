import React from "react";

const ContactForm = () => {
  return (
    <form
      className="bg-[#00A86B] text-white p-6 md:p-10 rounded-2xl w-full space-y-6 max-w-xl"
      data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
    
      <h2 className="text-2xl font-bold" data-aos="fade-up">Send us a Message</h2>

      {/* Name Fields */}
      <div className="grid md:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="100">
        <div>
          <label className="block text-sm mb-1">First Name*</label>
          <input
            type="text"
            placeholder="First name"
            className="w-full px-4 py-2 bg-gray-300 text-black rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A86B]"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Last Name*</label>
          <input
            type="text"
            placeholder="Last name"
            className="w-full px-4 py-2 bg-gray-300 text-black rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A86B]"
          />
        </div>
      </div>

      {/* Email */}
      <div data-aos="fade-up" data-aos-delay="200">
        <label className="block text-sm mb-1">Email Address*</label>
        <input
          type="email"
          placeholder="your.email@example.com"
          className="w-full px-4 py-2 bg-gray-300 text-black rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A86B]"
        />
      </div>

      {/* Phone */}
      <div data-aos="fade-up" data-aos-delay="300">
        <label className="block text-sm mb-1">Phone Number (Optional)</label>
        <input
          type="text"
          placeholder="+91 98765 43210"
          className="w-full px-4 py-2 bg-gray-300 text-black rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A86B]"
        />
      </div>

      {/* Service Package */}
      <div data-aos="fade-up" data-aos-delay="400">
        <label className="block text-sm mb-1">What service are you interested in?*</label>
        <select className="w-full px-4 py-2 bg-gray-300 text-black rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A86B]">
          <option>Editing & Proofreading</option>
          <option>Scientific Consultancy</option>
          <option>Data Analysis</option>
          <option>AI & Machine Learning Training</option>
          <option>Scientific Writing & Communication</option>
          <option>In-Person Seminars & Institutional Trainings</option>
        </select>
      </div>

      {/* Subject Area */}
      <div data-aos="fade-up" data-aos-delay="500">
        <label className="block text-sm mb-1">Subject Area / Field</label>
        <input
          type="text"
          placeholder="e.g., Neuroscience"
          className="w-full px-4 py-2 bg-gray-300 text-black rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A86B]"
        />
      </div>

      {/* Message */}
      <div data-aos="fade-up" data-aos-delay="600">
        <label className="block text-sm mb-1">Message*</label>
        <textarea
          placeholder="Write your message here..."
          className="w-full px-4 py-2 h-24 bg-gray-300 text-black rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A86B]"
        />
      </div>

      {/* GDPR Agreement */}
      <div className="flex items-start gap-2" data-aos="fade-up" data-aos-delay="700">
        <input type="checkbox" className="mt-1 accent-[#00A86B]" />
        <label className="text-sm">
          I consent to SciScribe storing and using my information for communication purposes.{" "}
          {/* <a href="#" className="underline text-[#00A86B]">Privacy Policy</a> */}
        </label>
      </div>

      {/* Submit Button */}
      <div data-aos="zoom-in" data-aos-delay="800">
        <button
          type="submit"
          className="bg-white hover:bg-green-400 text-black py-3 px-6 rounded-full w-full"
        >
          Request Free Quote
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
