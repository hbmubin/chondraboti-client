import { UtiContext } from "../provider/UtiProvider";
import { useContext, useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const MenuAccordion = ({item, level=0}) => {
    const [open, setOpen] = useState(false);
      const { catalogue, setCatalogue } = useContext(UtiContext);


  const hasChildren = item?.children && item.children.length > 0;

    return (
        <li className={`border-t border-stone-200 bg-white`}>
      <div
        className={`flex items-center justify-between px-4 py-2 cursor-pointer ${
          level === 0 && hasChildren
            ? "font-medium text-base"
            : level === 1 && hasChildren ? "text-sm text-stone-600" : level === 2 ? "text-sm text-blue-600 pl-6" : "text-sm text-blue-600"
        }`}
        onClick={() => hasChildren && setOpen(!open)}
      >
          <a
          onClick={()=>{
            if(hasChildren){
              setCatalogue(null)
            }
            else{
              setCatalogue(item?.catalogue)
            }
          }}
            href={`${ `/collection/${item?.slug}`}`}
            className={`block ${hasChildren ? "w-fit" : "w-full"} `}
          >
            {item?.name}
          </a>

        {hasChildren && (
          <span>{open ? <IoChevronUp size={16} /> : <IoChevronDown size={16} />}</span>
        )}
      </div>

      {hasChildren && open && (
        <ul className="ml-2">
          {item.children.map((child, idx) => (
            <MenuAccordion key={idx} item={child} level={level + 1} />
          ))}
        </ul>
      )}
    </li>
    );
};

export default MenuAccordion;