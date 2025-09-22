import { useEffect, useRef, useState } from "react";
import useProductList from "../../hooks/useProductList";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router";

const SearchNav = () => {
  const { data, refetch } = useProductList();
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  const searchLinkRef = useRef()
  const searchModalRef = useRef()

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsSmall(true);
    } else {
      setIsSmall(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setInputValue(value);
    if (value.trim().length > 0 ) {
      if(isActive || isFocus){
      const filtered = data?.filter((d) => d.product_name.toLowerCase().includes(value.trim().toLowerCase()));
      setSearch(filtered);
      setIsActive(true);
      }
    }
  };



  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    // if (!isFocus) {
    //   setInputValue("");
    //   setSearch([]);
    //   setIsActive(false);
    // }
    document.addEventListener("click",(e)=>{
      if(searchLinkRef.current && !searchLinkRef.current.contains(e.target) && searchModalRef.current && !searchModalRef.current.contains(e.target))
        setIsFocus(false)
        setIsActive(false)
    })
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isFocus]);

  // console.log("isSmall", isSmall);
  // console.log("isFocus", isFocus);
  return (
    <div ref={searchLinkRef} className={`${isFocus && isSmall ? "res-search" : "relative"}`}>
      <div className=" h-min flex overflow-hidden border-stone-800 border-b ">
        <Link  to={inputValue?.trim().length > 0 && `/search/${inputValue?.trim()}`} className={`py-2 ${isSmall && isFocus && "px-2"} text-stone-800`}>
          <FiSearch color="inherit" size={24} />
        </Link>
        <input
          onFocus={() => setIsFocus(true)}
          onChange={handleSearch}
          value={inputValue}
          className={`border-0  outline-0 px-2 md:w-96 ${isFocus && isSmall ? "w-full" : "w-32"} max-w-full placeholder:text-xs placeholder:md:text-base text-stone-800`}
          type="text"
          placeholder="Search your product"
        />
      </div>
      {search?.length > 0 && isSmall && isFocus && (
        <div ref={searchModalRef} className="absolute left-0 w-full max-h-96  overflow-auto bg-white z-3 shadow-xl border border-stone-200 border-t-0">
          <div className="flex flex-col">
            {search?.map((d, idx) => (
              <a href={`/${d?.id}/${d?.product_name.toLowerCase().replace(/\s+/g, "-")}`} className="flex gap-2 p-1 hover:bg-stone-100" key={idx}>
                <div className="w-12 min-w-12">
                  <img className="w-full" src={d?.images[0]} alt="" />
                </div>
                <div>
                  <span className="text-sm line-clamp-1">{d?.product_name}</span>
                  <span className="text-xs text-orange-400 font-medium">৳{d?.discount_price}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
      {search?.length > 0 && !isSmall && isActive && (
        <div ref={searchModalRef} className="absolute left-0 w-full max-h-96  overflow-auto bg-white z-3 shadow-xl border border-stone-200 border-t-0">
          <div className="flex flex-col">
            {search?.map((d, idx) => (
              <a href={`/${d?.id}/${d?.product_name.toLowerCase().replace(/\s+/g, "-")}`} className="flex gap-2 p-1 hover:bg-stone-100" key={idx}>
                <div className="w-12 min-w-12">
                  <img className="w-full" src={d?.images[0]} alt="" />
                </div>
                <div>
                  <span className="text-sm line-clamp-1">{d?.product_name}</span>
                  <span className="text-xs text-orange-400 font-medium">৳{d?.discount_price}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchNav;
