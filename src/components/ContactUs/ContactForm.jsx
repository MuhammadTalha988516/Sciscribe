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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("entry.253597926", formData.firstName);
    data.append("entry.184990195", formData.lastName);
    data.append("entry.1579246839", formData.email);
    data.append("entry.1997420567", formData.phone);
    data.append("entry.814708344", formData.service);
    data.append("entry.577563919", formData.course);
    data.append("entry.1330388150", formData.subject);
    data.append("entry.33231570", formData.message);

    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSc7Hotk6OPVjEFICMVuPl20hLJqKQTHYocXXVkpljIGp6bzIw/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        body: data,
      }
    )
      .then(() => {
        alert(" Your information has been submitted!");
        window.scrollTo(0, 0);
        window.location.reload();
      })
      .catch(() => {
        alert(" There was a problem submitting the form.");
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#00A86B] text-white p-6 sm:p-8 md:p-10 rounded-2xl w-full space-y-6 max-w-xl mx-auto"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <h2 className="text-2xl sm:text-3xl font-bold">Send us a Message</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">First Name*</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder="First name"
            className="w-full px-4 py-2 bg-gray-300 text-black rounded-md"
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
            className="w-full px-4 py-2 bg-gray-300 text-black rounded-md"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm mb-1">Email Address*</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your.email@example.com"
          className="w-full px-4 py-2 bg-gray-300 text-black rounded-md"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Phone Number</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+92 3xx xxxxxxx"
          className="w-full px-4 py-2 bg-gray-300 text-black rounded-md"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">
          What service are you interested in?*
        </label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-gray-300 text-black rounded-md"
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

      <div>
        <label className="block text-sm mb-1">Course</label>
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-300 text-black rounded-md"
        >
          <option value="">Select</option>
          <option>Bioinformatics Foundations</option>
          <option>Research Methodology Bootcamp</option>
          <option>Scientific Writing for Publication</option>
          <option>Data Analysis with R and SPSS</option>
          <option>Introduction to AI & ML for Researchers</option>
        </select>
      </div>

      <div>
        <label className="block text-sm mb-1">Subject Area / Field</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="e.g., Neuroscience"
          className="w-full px-4 py-2 bg-gray-300 text-black rounded-md"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Message*</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Write your message here..."
          className="w-full px-4 py-2 h-24 bg-gray-300 text-black rounded-md"
        />
      </div>

      <button
        type="submit"
        className="bg-white text-black py-3 px-6 rounded-full w-full hover:bg-black hover:text-white transition"
      >
        Request Free Quote
      </button>
    </form>
  );
};

export default ContactForm;
