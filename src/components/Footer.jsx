import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineLocationOn, MdOutlineMail } from "react-icons/md";
import logo from "../assets/image/Logo.png";

const Footer = () => {
  return (
    <div className="bg-stone-900">
      <div className="container-default grid md:grid-cols-3 py-8 gap-3">
        <div className="flex flex-col md:items-start items-center">
          <div>
            <img className="w-32" src={logo} alt="" />
          </div>
          <div className="mt-4">
            <a href="https://wa.me/+028384888484" className="flex items-center gap-4 hover:opacity-75 border py-2 px-4 text-white rounded-xl w-fit">
              <span className="border-r pr-3">
                <FaWhatsapp color="white" size={28} />
              </span>
              <div className="flex flex-col">
                <span className="text-xs">10 AM - 11 PM</span>
                <span className="text-base text-blue-500"> 028384888484</span>
              </div>
            </a>
          </div>
        </div>
        <div className=" font-light flex flex-col md:items-start items-center text-center md:text-start">
          <div className="flex flex-col  text-stone-300 gap-2">
            <div className="flex flex-col gap-2">
              <a href="/about" className="hover:underline inline-block">
                About Us
              </a>
              <a href="/contact" className="hover:underline inline-block">
                Contact Us
              </a>
              <a href="/faqs" className="hover:underline inline-block">
                FAQs
              </a>
              <a href="/privacy-policy" className="hover:underline inline-block">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:underline inline-block">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:items-start items-center text-center md:text-start">
          <div className="flex flex-col text-stone-300 gap-3 font-light">
            <div className="">
              <span> Jotey Centre, 389/A-B, New Elephant Road, Dhaka-1205</span>
            </div>
            <div>
              <span className="font-semibold text-xl">Email:</span>
              <a href="mailto:chandrabatifashion@gmail.com" className="text-blue-400 hover:underline">
                <span> chandrabatifashion@gmail.com</span>
              </a>
            </div>
            <div className="flex gap-3 items-center md:justify-start justify-center text-stone-400">
              <a href="https://www.facebook.com/chondrabotifashion">
                <FaFacebook size={24}  />
              </a>
              <a href="#">
                <FaYoutube size={28}  />
              </a>
              <a href="#">
                <AiFillInstagram size={28}  />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-stone-950 text-center text-xs text-stone-200 py-1 font-extralight">
        <span>Copyright © 2025 Chondraboti Fashion. All Right Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
