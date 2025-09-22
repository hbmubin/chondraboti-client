import { Children, useContext, useEffect, useState } from "react";
import SideNev from "../components/home/SideNev";
import useProductList from "../hooks/useProductList";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router";
import useCategories from "../hooks/useCategories";
import { UtiContext } from "../provider/UtiProvider";
import { IoClose, IoFilterSharp } from "react-icons/io5";
import { IoMdFlash } from "react-icons/io";

const Collection = () => {
  const param = useParams();
  const { category, subCategory } = param;
  const formatSlug = (slug) => {
    if (!slug) {
      return null
    }
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
      .trim();
  };
  const collectionTItle = formatSlug(param?.subCategory);

  const [selected, setSelected] = useState("default");
  const [resSideBar, setResSideBar] = useState(false);
  const { data, refetch } = useProductList(collectionTItle, "4");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(20000);
  const [orderData, setOrderData] = useState(data);

  const handleOrder = (e) => {
    const value = e.target.value;
    setSelected(value);

    if (!data) return;

    let sorted = [...data];

    switch (value) {
      case "low-to-high":
        sorted.sort((a, b) => a.discount_price - b.discount_price);
        break;
      case "high-to-low":
        sorted.sort((a, b) => b.discount_price - a.discount_price);
        break;
      case "a-to-z":
        sorted.sort((a, b) => a.product_name.localeCompare(b.product_name));
        break;
      default:
        sorted = [...data];
    }

    setOrderData(sorted);
  };

  const slug = category + "/" + subCategory;
  const { catalogue } = useContext(UtiContext);
  const { data: catalogues } = useCategories(slug);
  const [checkCatalogue, setCheckCatalogue] = useState(catalogue ? [formatSlug(catalogue)] : null );
//   console.log(checkCatalogue === null)

const handleCheckChange = (value) => {
  setCheckCatalogue((prev) => {
    const safePrev = prev ?? [];
    return safePrev.includes(value)
      ? safePrev.filter((item) => item !== value)
      : [...safePrev, value];
  });
};


  useEffect(() => {
    if (resSideBar) {
      document.querySelector("body").classList.add("overflow-hidden", "md:overflow-auto");
    } else {
      document.querySelector("body").classList.remove("overflow-hidden", "md:overflow-auto");
    }
    if (!data) return;

    if (checkCatalogue?.length === 0 || checkCatalogue === null) {
      setOrderData(data);
    } else {
      const checkedData = data.filter((d) => checkCatalogue?.includes(formatSlug(d.catalogue)));
      setOrderData(checkedData);

      const filtered = checkedData?.filter((item) => item.price >= minPrice && item.price <= maxPrice);
      setOrderData(filtered);
    }
  }, [data, checkCatalogue, minPrice, maxPrice, resSideBar]);

    // console.log("check", checkCatalogue);
  //   console.log("data", orderData?.map(data=>data?.catalogue));

  //   console.log(resSideBar)

  return (
    <main>
      <div className="grid xl:grid-cols-4 md:grid-cols-3 container-default">
        <div className="md:col-span-1">
          <div className="hidden md:block">
            <SideNev home={false}></SideNev>
          </div>
          <div
            className={`md:static fixed top-0 left-0 md:z-auto z-3 md:w-auto w-screen md:bg-inherit bg-black/40 duration-300 ${
              resSideBar ? "md:translate-x-0 translate-x-0" : "md:translate-x-0 -translate-x-[150%]"
            }`}
          >
            <div className="absolute md:hidden left-0 top-0 w-screen h-screen -z-1 flex justify-end" onClick={() => setResSideBar(false)}>
              <IoClose className="relative right-[7%]" size={36} color="white"></IoClose>
            </div>
            <div className="pt-10 bg-stone-100 px-3 min-h-screen md:w-auto w-10/12 md:shadow-none shadow overflow-auto md:h-auto h-screen pb-20">
              <div className="price py-4">
                <div className="flex justify-between">
                  <span className="uppercase font-medium text-xl">Price</span>
                  <button
                    onClick={() => {
                      setMinPrice(0);
                      setMaxPrice(20000);
                    }}
                    type="button"
                    className="text-orange-500 cursor-pointer"
                  >
                    Reset
                  </button>
                </div>
                <div className="flex justify-between gap-3 mt-3">
                  <div className="flex gap-1 items-center">
                    <div>
                      <input
                        className="lg:w-24 sm:w-20 w-24 border border-stone-400 px-2 py-0.5 text-stone-600 focus:outline-none"
                        type="number"
                        placeholder="0"
                        max={20000}
                        min={0}
                        value={minPrice}
                        onChange={(e) => setMinPrice(Number(e.target.value))}
                      />
                    </div>
                    <div className="text-xs">৳Min</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div>
                      <input
                        className="lg:w-24 sm:w-20 w-24 border border-stone-400 px-2 py-0.5 text-stone-600 focus:outline-none"
                        type="number"
                        placeholder="20000"
                        max={20000}
                        min={0}
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                      />
                    </div>
                    <div className="text-xs">৳Max</div>
                  </div>
                </div>
              </div>
              <div className="catalogue py-4">
                <div className="flex justify-between">
                  <span className="uppercase font-medium text-xl">Catalogue</span>
                  <button onClick={() => setCheckCatalogue([])} type="button" className="text-orange-500 cursor-pointer">
                    Reset
                  </button>
                </div>
                <span className="text-xs text-stone-500">{checkCatalogue?.length} Selected</span>
                <div className="flex flex-col gap-3 mt-3">
                  {catalogues?.children.map((cat, idx) => (
                    <label key={idx} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" checked={checkCatalogue?.includes(cat.name)} onChange={() => handleCheckChange(cat.name)} />
                      <span>{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
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
          <div className="text-2xl font-medium py-3">{collectionTItle}</div>
          <div className="bg-neutral-100 flex md:flex-row flex-col md:justify-between md:py-3 py-2 md:px-5 px-4 md:items-center">
            <div className="flex justify-between items-center">
              <button onClick={() => setResSideBar(true)} className="md:hidden uppercase flex font-medium items-center gap-1 bg-white px-2.5 active:scale-[.98] py-1 border border-stone-200">
                <IoFilterSharp size={20} />
                filter
              </button>
              <span className="text-black text-sm">{orderData?.length} Products</span>
            </div>
            <div className="flex justify-between gap-2 items-center mt-3">
              <span className="text-sm uppercase sm:text-xs">Sort by</span>
              <select value={selected} onChange={handleOrder} className="border bg-white r py-1.5 px-2 text-sm text-stone-800 border-stone-200 focus:outline-none">
                <option value="default">Default</option>
                <option value="low-to-high">Price: Low to High</option>
                <option value="high-to-low">Price: High to Low</option>
                <option value="a-to-z">Name: A to Z</option>
              </select>
            </div>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-2 gap-4 py-4">
            {orderData?.map((d, idx) => (
              <ProductCard product={d} key={idx}></ProductCard>
            ))}
          </div>
          {
              !orderData?.length && <p className="text-black text-center text-xl pb-10">No Product Found!</p>
            }
        </div>
      </div>
    </main>
  );
};

export default Collection;
