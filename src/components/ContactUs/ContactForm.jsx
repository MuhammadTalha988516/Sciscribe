import React from "react";

const ContactForm = () => {
  return (
    <form className="bg-[#0b0b0b] text-white p-6 md:p-10 rounded-2xl w-full space-y-6 max-w-xl">
      <h2 className="text-2xl font-bold">Send us a Message</h2>

      {/* Name Fields */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">First Name*</label>
          <input
            type="text"
            placeholder="First name"
            className="w-full px-4 py-2 bg-[#0f1c1d] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A86B]"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Last Name*</label>
          <input
            type="text"
            placeholder="Last name"
            className="w-full px-4 py-2 bg-[#0f1c1d] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A86B]"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm mb-1">Email Address*</label>
        <input
          type="email"
          placeholder="your.email@example.com"
          className="w-full px-4 py-2 bg-[#0f1c1d] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A86B]"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm mb-1">Phone Number*</label>
        <input
          type="text"
          placeholder="+91 98765 43210"
          className="w-full px-4 py-2 bg-[#0f1c1d] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A86B]"
        />
      </div>

      {/* Service Package */}
      <div>
        <label className="block text-sm mb-1">What service are you interested in?*</label>
        <select className="w-full px-4 py-2 bg-[#0f1c1d] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A86B]">
          <option>Select a package</option>
          <option>Editing & Proofreading</option>
          <option>Scientific Consultancy</option>
          <option>Data Analysis</option>
          <option>AI & Machine Learning Training</option>
          <option>Scientific Writing & Communication</option>
          <option>In-Person Seminars & Institutional Trainings</option>
        </select>
      </div>

      {/* Document Details */}
      <h3 className="text-lg font-semibold">Document Details</h3>

      <div>
        <label className="block text-sm mb-1">Document Type*</label>
        <select className="w-full px-4 py-2 bg-[#0f1c1d] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A86B]">
          <option>Choose document type</option>
          <option>Thesis</option>
          <option>Research Paper</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm mb-1">Subject Area / Field</label>
        <input
          type="text"
          placeholder="e.g., Neuroscience"
          className="w-full px-4 py-2 bg-[#0f1c1d] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A86B]"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Word Count</label>
        <input
          type="text"
          placeholder="e.g., 8500"
          className="w-full px-4 py-2 bg-[#0f1c1d] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A86B]"
        />
      </div>

      {/* File Upload */}
      <div>
        <label className="block text-sm mb-1">Upload a File (Optional)</label>
        <input
          type="file"
          className="w-full text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:bg-[#00A86B] file:text-white file:border-none bg-[#0f1c1d] border border-gray-700 rounded-md"
        />
        <p className="text-xs text-gray-400 mt-1">
          Accepted formats: DOC, PDF, XLS, TXT, JPG, etc. You can upload multiple files.
        </p>
      </div>

      {/* Deadline */}
      <div>
        <label className="block text-sm mb-1">Deadline</label>
        <input
          type="date"
          className="w-full px-4 py-2 bg-[#0f1c1d] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A86B]"
        />
        <p className="text-xs text-gray-400 mt-1">
          Please select a future date for your deadline.
        </p>
      </div>

      {/* Contact Method */}
      <div>
        <label className="block text-sm mb-2">How would you like us to contact you?</label>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input type="radio" name="contact" className="accent-[#00A86B]" />
            Email
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="contact" className="accent-[#00A86B]" />
            Phone
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="contact" className="accent-[#00A86B]" />
            WhatsApp
          </label>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm mb-1">Message*</label>
        <textarea
          placeholder="Write your message here..."
          className="w-full px-4 py-2 h-24 bg-[#0f1c1d] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A86B]"
        />
      </div>

      {/* GDPR Agreement */}
      <div className="flex items-start gap-2">
        <input type="checkbox" className="mt-1 accent-[#00A86B]" />
        <label className="text-sm">
          I consent to SciScribe Solutions storing and using my information for communication purposes.{" "}
          <a href="#" className="underline text-[#00A86B]">Privacy Policy</a>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-[#00A86B] hover:bg-[#00A86B] text-white py-3 px-6 rounded-full w-full"
      >
        Request Free Quote
      </button>
    </form>
  );
};

export default ContactForm;
