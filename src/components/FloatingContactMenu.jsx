import React, { useState } from "react";
import { FaWhatsapp, FaFacebookMessenger, FaPhoneAlt, FaCommentDots, FaTimes } from "react-icons/fa";

const FloatingContactMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-2 z-2">
      {open && (
        <div className="flex flex-col items-end gap-3 transition-all duration-300">
          <a
            href="https://wa.me/+8801571076572"
            className="bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition"
            title="WhatsApp"
          >
            <FaWhatsapp size={30} color="white" />
          </a>
          {/* <a
            href="#"
            className="bg-blue-500 p-3 rounded-full shadow-lg hover:scale-110 transition"
            title="Messenger"
          >
            <FaFacebookMessenger size={30} color="white" />
          </a> */}
          <a
            href="tel:+8801571076572"
            className="bg-emerald-500 p-3 rounded-full shadow-lg hover:scale-110 transition"
            title="Phone"
          >
            <FaPhoneAlt size={30} color="white" />
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className={`p-4 rounded-full shadow-xl text-white transition-transform duration-300 ${
          open ? "bg-purple-400 rotate-45" : "bg-purple-500"
        }`}
      >
        {open ? <FaTimes size={22} /> : <FaCommentDots size={22} />}
      </button>
    </div>
  );
};

export default FloatingContactMenu;
