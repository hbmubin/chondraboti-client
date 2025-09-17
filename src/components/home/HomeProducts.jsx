import { IoIosArrowRoundForward } from "react-icons/io";
import ProductCard from "../ProductCard";

const HomeProducts = ({categoryData}) => {
    const {data, isLoading, isError, title, link} = categoryData
  return (
    <div>
      <div className="container-default md:py-10 py-3 px-2">
        <section>
          <div className="flex justify-between items-center pb-3">
            <div className="md:text-2xl text-base uppercase font-medium">{title}</div>
            <a href={link} className="flex items-center gap-1 text-stone-800 pl-3 pr-1.5 py-0.5 hover:text-stone-500 ">
                <span className="text-xs md:text-base">View More</span>
              <span><IoIosArrowRoundForward size={20} /></span>
            </a>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
            {data?.map(p=><ProductCard key={p.id} product={p}></ProductCard>)}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeProducts;
