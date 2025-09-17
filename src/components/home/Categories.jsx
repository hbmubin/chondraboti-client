import man from "../../assets/image/man-fas.png";
import cos from "../../assets/image/cos-fa.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Categories = () => {
  return (
    <div>
      <div className="container-default pb-5 px-2">
        <div className="md:text-2xl text-base md:pt-10 pt-4 pb-3 uppercase text-center font-medium">Shop by Categories</div>
        <div className="grid md:grid-cols-3 grid-cols-2 grid-rows-2 gap-3">
          <a href="#" className="relative overflow-hidden row-span-1">
            <div className="absolute bottom-0 flex justify-center bg-[#00000052] py-1 text-white w-full text-xl font-medium z-2">Men</div>
            <LazyLoadImage className="aspect-video object-cover object-top hover:scale-105 duration-200" src={man} alt="" />
          </a>
          <a href="#" className="relative overflow-hidden md:row-span-2 row-span-1">
            <div className="absolute bottom-0 flex justify-center bg-[#00000052] py-1 text-white w-full text-xl font-medium z-2">Men</div>
            <LazyLoadImage className="md:h-full md:aspect-auto aspect-video object-cover object-top hover:scale-105 duration-200" src={man} alt="" />
          </a>
          <a href="#" className="relative overflow-hidden row-span-1">
            <div className="absolute bottom-0 flex justify-center bg-[#00000052] py-1 text-white w-full text-xl font-medium z-2">Cosmetics</div>
            <LazyLoadImage className="aspect-video object-cover object-top hover:scale-105 duration-200" src={cos} alt="" />
          </a>
          <a href="#" className="relative overflow-hidden row-span-1">
            <div className="absolute bottom-0 flex justify-center bg-[#00000052] py-1 text-white w-full text-xl font-medium z-2">Men</div>
            <LazyLoadImage className="aspect-video object-cover object-top hover:scale-105 duration-200" src={cos} alt="" />
          </a>
          <a href="#" className="relative overflow-hidden row-span-1">
            <div className="absolute bottom-0 flex justify-center bg-[#00000052] py-1 text-white w-full text-xl font-medium z-2">Men</div>
            <LazyLoadImage className="aspect-video object-cover object-top hover:scale-105 duration-200" src={man} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Categories;
