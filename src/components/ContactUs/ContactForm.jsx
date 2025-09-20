import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Book,
  Briefcase,
  MessageSquare,
} from "lucide-react";
import ContactImg from "../../assets/contact.jpeg";

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

    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSdpzYJp0aSZGwy2XZ6crPs2bAH4Mo4Rc06ciY0g5fDYyj3hXw/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        body: data,
      }
    )
      .then(() => {
        alert("✅ Your form has been submitted!");
        window.scrollTo(0, 0);
        window.location.reload();
      })
      .catch(() => {
        alert("❌ There was a problem submitting the form.");
      });
  };

  return (
    <section className="w-full mt-10 py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center min-h-[80vh]">
        {/* Left: Image with zoom animation */}
        <motion.div
          className="w-full h-full overflow-hidden"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            src={ContactImg}
            alt="Contact"
            className="object-fill w-full h-full max-h-[100vh] rounded-xl"
          />
        </motion.div>

        {/* Right: Form with slide animation */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-gray-800 flex flex-col justify-center space-y-6 px-6 md:px-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#00A86B]">
            Send us a Message
          </h2>

          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center bg-gray-100 rounded-md px-3">
              <User className="text-gray-500 mr-2" size={18} />
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="First Name"
                className="w-full bg-transparent py-3 outline-none"
              />
            </div>
            <div className="flex items-center bg-gray-100 rounded-md px-3">
              <User className="text-gray-500 mr-2" size={18} />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Last Name"
                className="w-full bg-transparent py-3 outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center bg-gray-100 rounded-md px-3">
            <Mail className="text-gray-500 mr-2" size={18} />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email Address"
              className="w-full bg-transparent py-3 outline-none"
            />
          </div>

          {/* Phone */}
          <div className="flex items-center bg-gray-100 rounded-md px-3">
            <Phone className="text-gray-500 mr-2" size={18} />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+92 3xx xxxxxxx"
              className="w-full bg-transparent py-3 outline-none"
            />
          </div>

          {/* Service */}
          <div className="flex items-center bg-gray-100 rounded-md px-3">
            <Briefcase className="text-gray-500 mr-2" size={18} />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full bg-transparent py-3 outline-none"
            >
              <option value="">Select a Service</option>
              <option>Editing & Proofreading</option>
              <option>Scientific Consultancy</option>
              <option>Data Analysis</option>
              <option>AI & Machine Learning Training</option>
              <option>Scientific Writing & Communication</option>
              <option>In-Person Seminars & Institutional Trainings</option>
            </select>
          </div>

          {/* Course */}
          <div className="flex items-center bg-gray-100 rounded-md px-3">
            <Book className="text-gray-500 mr-2" size={18} />
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full bg-transparent py-3 outline-none"
            >
              <option value="">Select a Course</option>
              <option>Bioinformatics Foundations</option>
              <option>Research Methodology Bootcamp</option>
              <option>Scientific Writing for Publication</option>
              <option>Data Analysis with R and SPSS</option>
              <option>Introduction to AI & ML for Researchers</option>
            </select>
          </div>

          {/* Subject */}
          <div className="flex items-center bg-gray-100 rounded-md px-3">
            <Book className="text-gray-500 mr-2" size={18} />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject / Field"
              className="w-full bg-transparent py-3 outline-none"
            />
          </div>

          {/* Message */}
          <div className="flex items-start bg-gray-100 rounded-md px-3">
            <MessageSquare className="text-gray-500 mr-2 mt-3" size={18} />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message..."
              className="w-full bg-transparent py-3 outline-none h-28 resize-none"
            />
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="bg-[#00A86B] text-white py-3 px-6 rounded-full w-full hover:bg-green-600 transition"
          >
            Request Free Quote
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
