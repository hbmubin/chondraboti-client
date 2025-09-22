import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdContentCopy, MdOutlineLocationOn, MdOutlineMail } from "react-icons/md";
import logo from "../assets/image/Logo.png";

const Footer = () => {
  return (
    <div className="bg-stone-900">
      <div className="container-default grid md:grid-cols-3 py-8 gap-3">
        <div className="flex flex-col md:items-start items-center">
          <div>
            <img className="w-32" src={logo} alt="" />
          </div>
          <div className="mt-4 flex items-center gap-2">
            <a href="https://wa.me/+8801571076572" className="flex items-center gap-4 hover:opacity-75 border py-2 px-4 text-white rounded-xl w-fit">
              <span className="border-r pr-3">
                <FaWhatsapp color="white" size={28} />
              </span>
              <div className="flex flex-col">
                <span className="text-xs text-stone-300">10 AM - 11 PM</span>
                <span className="text-base text-blue-500">01571076572</span>
              </div>
            </a>
            <div onClick={() => {navigator.clipboard.writeText("+8801571076572"), alert("Number copied!")}} title="copy number" className="border py-2 px-4 flex justify-center items-center text-white rounded-xl h-full cursor-pointer"><MdContentCopy color="white" size={24} /></div>
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
              <span> 123 Chondraboti Street, Shahbag, Dhaka-1000</span>
            </div>
            <div>
              <span className="font-semibold text-xl">Email:</span>
              <a href="mailto:chondrabotifashion@gmail.com" className="text-blue-400 hover:underline">
                <span> chondrabotifashion@gmail.com</span>
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
