import { useContext, useEffect, useRef } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoCallOutline, IoClose } from "react-icons/io5";
import { MdOutlineMail, MdOutlineShoppingCart } from "react-icons/md";
import { UtiContext } from "../provider/UtiProvider";
import logo3 from "../assets/image/Logo3.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router";
import MenuAccordion from "./MenuAccordion";
import useCategories from "../hooks/useCategories";
import SearchNav from "../components/home/SearchNav";

const Nav = () => {
  const {data:categories} = useCategories();
  const { resNav, setResNav } = useContext(UtiContext);
  const navRef = useRef(null);
  const navBtnRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navBtnRef.current.contains(e.target) && !navRef.current.contains(e.target)) {
        // console.log("ok")
        setResNav(false);
      } else {
        // console.log("no")
      }
    };

    if(resNav){
      document.querySelector("body").classList.add("overflow-hidden", "md:overflow-auto")
    }
    else{
      document.querySelector("body").classList.remove("overflow-hidden", "md:overflow-auto")
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [resNav, setResNav, navBtnRef]);

  return (
    <div className="font-Mon shadow">
      <div className={`fixed h-[100vh] w-[100vw] bg-black z-2 opacity-50 ${!resNav && "hidden"}`}></div>
      <div className="top bg-stone-800 py-2 hidden md:block">
        <div className="flex container-default justify-between font-extralight px-2">
          <div className="flex gap-3 text-sm text-stone-200 items-center">
            <span className="flex items-center gap-1">
              <span>
                <MdOutlineMail color="#e7e5e4" size={16} />
              </span>
              <span> chondrabotifashion@gmail.com</span>
            </span>
            <span className="flex items-center gap-1">
              <span>
                <IoCallOutline color="#e7e5e4" size={14} />
              </span>
              <span>+8801571076572</span>
            </span>
          </div>
          <div className="flex text-sm text-stone-200 items-center gap-3">
            <span>Connect with:</span>
            <div className="flex gap-2 items-center">
              <a href="https://www.facebook.com/chondrabotifashion">
                <FaFacebook size={16} color="#e7e5e4" />
              </a>
              <a href="#">
                <FaYoutube size={18} color="#e7e5e4" />
              </a>
              <a href="#">
                <AiFillInstagram size={18} color="#e7e5e4" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="middle bg-white md:py-3 py-2.5">
        <div className="flex gap-3 container-default justify-between items-center px-2">
          <div className="flex gap-3 items-center">
            <span ref={navBtnRef} className="text-stone-800 md:hidden block" onClick={() => setResNav(true)}>
              <FiMenu size={24} color="inherit" />
            </span>
            <Link to="/" className="md:w-36 w-24 max-w-full">
              <LazyLoadImage src={logo3} alt="" />
            </Link>
          </div>
          <div className="flex sm:gap-10 gap-4 items-center">
            <SearchNav></SearchNav>
            <span className="text-white bg-stone-800 p-1.5 size-fit">
              <MdOutlineShoppingCart size={24} color="inherit" />
            </span>
          </div>
        </div>
      </div>
      <div
      ref={navRef}
      className={`navLinks bg-stone-50 res-nav md:hidden fixed top-0 z-30 h-screen w-[70vw] duration-200 ${
        resNav ? "translate-0" : "-translate-x-[200%]"
      }`}
    >
      <div className="container-default">
        <div className="flex items-center justify-between py-3 px-4 relative">
          <div
            className="absolute -right-[72px] text-stone-50 p-2"
            onClick={() => setResNav(false)}
          >
            <IoClose size={48} />
          </div>
          <p className="font-semibold text-xl uppercase">Categories</p>
        </div>

        <ul className="h-[85vh] overflow-y-auto">
          {categories?.map((cat, idx) => (
            <MenuAccordion key={idx} item={cat} />
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Nav;
