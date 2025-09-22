import useSearch from "../hooks/useSearch";
import SideNev from "../components/home/SideNev";
import { useParams } from "react-router";
import ProductCard from "../components/ProductCard";

const Search = () => {
    const {search} = useParams()
    const {data} = useSearch(search)
  return (
    <main>
      <div className="grid xl:grid-cols-4 md:grid-cols-3 container-default">
        <div className="md:col-span-1">
          <div className="hidden md:block">
            <SideNev home={false}></SideNev>
          </div>
        </div>
        <div className="xl:col-span-3 md:col-span-2 px-3">
          <div className="justify-between py-2  hidden md:flex">
            <a href="#" className="uppercase hot-sale group text-red-500 hover:text-red-400 font-semibold relative">
              Hot Sale <span className="absolute group-hover:bg-red-400 h-[2.2px] w-full left-0 bottom-0 bg-red-600 animate-hot"></span>
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
      <div className="container-default py-10">

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 ">
            {
                data?.map((d,idx)=><ProductCard key={idx} product={d}></ProductCard>)
            }
          </div>
          {
                data?.length <1 && <p className="text-2xl text-black text-center w-full min-h-[50vh] pt-10">No Product Found!</p>
            }
      </div>
    </main>
  );
};

export default Search;
