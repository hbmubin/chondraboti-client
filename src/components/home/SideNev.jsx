import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { useContext } from "react";
import { UtiContext } from "../../provider/UtiProvider";
import useCategories from "../../hooks/useCategories";

const SideNev = ({ home = false }) => {
  const {data:categories} = useCategories();
  const { catalogue, setCatalogue } = useContext(UtiContext);

  

  return (
    <div className={` hidden md:flex flex-col border-r border-neutral-200 ${!home ? "size-nav" : "min-h-full"} shadow`}>
      <div className="flex justify-between items-center text-white bg-stone-800 px-3 py-2">
        <span>
          <FiMenu size={24} color="inherit" />
        </span>
        <span className="uppercase font-semibold">Categories</span>
        <span>
          <MdKeyboardArrowDown size={22} />
        </span>
      </div>
      <ul className={`relative flex-grow ${!home && "size-nav-ul"} min-h-96`}>
        {categories?.map((c) => (
          <li key={c.id} className=" group">
            <div className="px-4 py-2 hover:bg-neutral-200 flex justify-between items-center">
              <span className="font-medium uppercase">{c.name}</span>{" "}
              <span className="font-light text-neutral-500">
                <MdKeyboardArrowRight size={24} />
              </span>
            </div>
            {c.children.length > 0 && (
              <div className="absolute left-full z-2 top-0 hidden group-hover:block w-[300%] h-full">
                <ul className=" shadow-md border border-neutral-200  grid-cols-4 grid bg-white text-nowrap p-3 h-full ml-0.5">
                  {c.children.map((child) => (
                    <li key={child.id} className="">
                      <span className="block px-4 py-2 font-medium uppercase">
                        <a className="hover:text-blue-500" onClick={() => setCatalogue(null)} href={`/collection/${child?.slug}`}>
                          {child.name}
                        </a>
                      </span>
                      <ul>
                        {child.children.map((m) => (
                          <li key={m.id}>
                            <a onClick={() => setCatalogue(m?.catalogue)} href={`/collection/${child?.slug}`} className="px-4 inline-block py-1 hover:text-blue-800 hover:bg-neutral-100 w-full">
                              {m.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNev;
