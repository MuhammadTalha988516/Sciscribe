import React from "react";
import { Mail, Phone } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="text-black space-y-8 mt-10 px-4 md:px-0">
      <h2 className="text-2xl sm:text-3xl font-bold text-green-600">
        Contact Information
      </h2>

      <div className="flex items-start space-x-3">
        <div className="bg-white p-3 rounded-full">
          <Mail className="text-[#00A86B]" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-green-600">
            Email
          </h3>
          <div className="mt-2 space-y-1 text-base sm:text-lg text-gray-300">
            <p>contact@sciscribesolutions.com</p>
            <p>support@sciscribesolutions.com</p>
          </div>
        </div>
      </div>

      <div className="flex items-start space-x-3">
        <div className="bg-white p-3 rounded-full">
          <Phone className="text-[#00A86B]" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-green-600">
            WhatsApp
          </h3>
          <div className="mt-2 text-base sm:text-lg text-gray-300">
            <p>+92 3234554777</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
