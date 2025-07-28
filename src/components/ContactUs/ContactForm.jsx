import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    course: "",
    subject: "",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("entry.116249013", formData.firstName);
    data.append("entry.615657035", formData.lastName);
    data.append("entry.237516233", formData.email);
    data.append("entry.1035996886", formData.phone);
    data.append("entry.479249673", formData.service);
    data.append("entry.1249032234", formData.course);
    data.append("entry.905983228", formData.subject);
    data.append("entry.317385170", formData.message);

    if (formData.consent) {
      data.append(
        "entry.1502392172",
        "I consent to SciScribe storing and using my information for communication purposes."
      );
    }

    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSdpzYJp0aSZGwy2XZ6crPs2bAH4Mo4Rc06ciY0g5fDYyj3hXw/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        body: data,
      }
    )
      .then(() => {
        alert("Your Form has been submitted!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          course: "",
          subject: "",
          message: "",
          consent: false,
        });
      })
      .catch(() => {
        alert("There was a problem submitting the form.");
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#00A86B] text-white p-6 md:p-10 rounded-2xl w-full space-y-6 max-w-xl"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <h2 className="text-2xl font-bold" data-aos="fade-up">
        Send us a Message
      </h2>

      <div
        className="grid md:grid-cols-2 gap-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div>
          <label className="block text-sm mb-1">First Name*</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder="First name"
            className="w-full px-4 py-2 bg-gray-300 text-black rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A86B]"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Last Name*</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            placeholder="Last name"
            className="w-full px-4 py-2 bg-gray-300 text-black rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A86B]"
          />
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <label className="block text-sm mb-1">Email Address*</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your.email@example.com"
          className="w-full px-4 py-2 bg-gray-300 text-black rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A86B]"
        />
      </div>

      <div data-aos="fade-up" data-aos-delay="300">
        <label className="block text-sm mb-1">Phone Number</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+92 3xx xxxxxxx"
          className="w-full px-4 py-2 bg-gray-300 text-black rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A86B]"
        />
      </div>

      <div data-aos="fade-up" data-aos-delay="400">
        <label className="block text-sm mb-1">
          What service are you interested in?*
        </label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-gray-300 text-black rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A86B]"
        >
          <option value="">Select</option>
          <option>Editing & Proofreading</option>
          <option>Scientific Consultancy</option>
          <option>Data Analysis</option>
          <option>AI & Machine Learning Training</option>
          <option>Scientific Writing & Communication</option>
          <option>In-Person Seminars & Institutional Trainings</option>
        </select>
      </div>

      <div data-aos="fade-up" data-aos-delay="450">
        <label className="block text-sm mb-1">Course</label>
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-gray-300 text-black rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A86B]"
        >
          <option value="">Select</option>
          <option>Bioinformatics Foundations</option>
          <option>Research Methodology Bootcamp</option>
          <option>Scientific Writing for Publication</option>
          <option>Data Analysis with R and SPSS</option>
          <option>Introduction to AI & ML for Researchers</option>
        </select>
      </div>

      <div data-aos="fade-up" data-aos-delay="500">
        <label className="block text-sm mb-1">Subject Area / Field</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="e.g., Neuroscience"
          className="w-full px-4 py-2 bg-gray-300 text-black rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A86B]"
        />
      </div>

      <div data-aos="fade-up" data-aos-delay="600">
        <label className="block text-sm mb-1">Message*</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Write your message here..."
          className="w-full px-4 py-2 h-24 bg-gray-300 text-black rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A86B]"
        />
      </div>

      <div
        className="flex items-start gap-2"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        <input
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          className="mt-1 accent-[#00A86B]"
        />
        <label className="text-sm">
          I consent to SciScribe storing and using my information for communication purposes.
        </label>
      </div>

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
