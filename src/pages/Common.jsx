import { IoMdFlash } from "react-icons/io";
import SideNev from "../components/home/SideNev";

const Common = () => {
    return (
      <div className="grid xl:grid-cols-4 md:grid-cols-3 container-default">
        <div className="md:col-span-1">
          <div className="hidden md:block">
            <SideNev home={false}></SideNev>
          </div>
        </div>
        <div className="xl:col-span-3 md:col-span-2 px-3">
          <div className="justify-between py-2  hidden md:flex">
            <a href="#" className="uppercase hot-sale group text-red-500 hover:text-red-400 font-semibold flex gap-0.5 items-center">
                          Hot Sale
                          <span className="animate-hot">
                            <IoMdFlash size={20} />
                          </span>
                        </a>
            <div className="flex gap-3 uppercase font-medium">
              <a href="/about" className="border-r pr-3 hover:text-black/70">
                About Us
              </a>
              <a href="/faqs" className=" hover:text-black/70">
                FAQS
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Common;