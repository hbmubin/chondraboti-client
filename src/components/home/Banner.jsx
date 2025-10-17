import { Autoplay, Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import SideNev from "./SideNev";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { IoMdFlash } from "react-icons/io";

const fetchBannerImages = async () => {
  const res = await axios.get("./banner_images.json");
  return res.data;
};

const Banner = () => {
  const {
    data: bannerImages = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["bannerImages"],
    queryFn: fetchBannerImages,
  });

  return (
    <section className="pb-10">
      <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 container-default">
        <SideNev home={true}></SideNev>
        <div className="banner xl:col-span-3 md:col-span-2">
          <div className="justify-between py-2 px-3 hidden md:flex">
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
          <div className="m-2">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              speed={800}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
            >
              {bannerImages?.map((b) => (
                <SwiperSlide key={b.id}>
                  <LazyLoadImage className="w-full aspect-[5/2] object-top object-cover" src={b.img} alt={b.title} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="grid grid-cols-2 gap-2 mx-2">
            <div>
              <img className="min-h-full object-cover object-left" src="https://res.cloudinary.com/dqcuufrdo/image/upload/v1757564952/chondraboti_banner1_lpjqty.jpg" alt="" />
            </div>
            <div>
              <img className="min-h-full object-cover object-left" src="https://res.cloudinary.com/dqcuufrdo/image/upload/v1757564952/chondraboti_banner2_z2l4fw.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
