import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="text-black space-y-8 mt-10"
     data-aos="fade-down"
     data-aos-duration="1800"
    
    >
      <h2 className="text-2xl font-bold">Contact Information</h2>

      {/* Email */}
      <div>
        <div className="flex items-start space-x-3">
          <div className="bg-white p-3 rounded-full">
            <Mail className="text-[#00A86B]" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Email</h3>
            <div className="mt-2 space-y-1 text-sm text-black">
              <p>contact@sciscribesolutions.com</p>
              <p>support@sciscribesolutions.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Phone */}
      <div>
        <div className="flex items-start space-x-3">
          <div className="bg-white p-3 rounded-full">
            <Phone className="text-[#00A86B]" />
          </div>
          <div>
            <h3 className="text-xl font-bold">WhatsApp</h3>
            <div className="mt-2 space-y-1 text-sm text-black">
              <p>+92 3234554777</p>
              {/* <p>WhatsApp</p> */}
            </div>
          </div>
        </div>
      </div>

      {/* Office */}
      <div>
        <div className="flex items-start space-x-3">
          {/* <div className="bg-[#0f2b36] p-3 rounded-full">
            <MapPin className="text-[#00A86B]" />
          </div> */}
          {/* <div>
            <h3 className="text-xl font-bold">Office</h3>
            <div className="mt-2 space-y-1 text-sm text-gray-300">
              <p>63 Jinnah Ave, Block L F 7/4 Blue Area</p>
              <p>Islamabad, Pakistan</p>
            </div>
          </div> */}
        </div>
      </div>

      {/* Map Placeholder
      <div className="w-full h-52 bg-gradient-to-br from-[#00A86B] to-green-900 flex items-center justify-center rounded-2xl">
        <MapPin size={40} className="text-[#00A86B]" />
      </div> */}
    </div>
  );
};

export default ContactInfo;
