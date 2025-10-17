import { Autoplay, Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import { PiEyeLight } from "react-icons/pi";
import { LazyLoadImage } from "react-lazy-load-image-component";
const ProductCard = ({product}) => {
  const slug = product?.product_name.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="hover:shadow border border-stone-200 product-card flex flex-col shadow">
      <a className="flex-grow" href={`/${product?.id}/${slug}`}>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        speed={800}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper relative group"
        // onSwiper={(swiper) => {
        //   swiperRef.current = swiper;
        //   swiper.autoplay.stop();
        // }}
      >
        <div className="absolute bottom-0 z-2 flex gap-2 py-0.5 translate-y-10 group-hover:translate-0 duration-200 items-center text-white bg-[#00000047] w-full justify-center">
          <span>
            <PiEyeLight size={26} />
          </span>
          <span className="">View Details</span>
        </div>
        {product?.images.map((img, idx)=><SwiperSlide key={idx}>
          <div className="aspect-[4/5] overflow-hidden">
            <LazyLoadImage className="object-cover object-top min-h-full min-w-full group-hover:scale-[1.02] duration-300" src={img} alt="" />
          </div>
        </SwiperSlide>)}
      </Swiper>
      <div className="md:pt-3 pt-2 inline-block md:px-3 px-1.5">
        <div className="font-semibold md:text-sm text-xs line-clamp-2">{product?.product_name}</div>
      </div>
      </a>
      <div className="  pt-1 pb-2 md:px-3 px-1.5 md:text-base text-xs">
        <span className="font-medium">৳{product?.price}</span> <span className="line-through md:text-sm text-xs text-stone-500">৳{product?.discount_price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
