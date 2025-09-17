import { createContext, useEffect, useState } from "react";

export const UtiContext = createContext(null)

const UtiProvider = ({children})=>{
    const [resNav, setResNav] = useState(false)
    const [catalogue, setCatalogue] = useState(() => {
    const saved = localStorage.getItem("catalogue");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (catalogue !== null) {
      localStorage.setItem("catalogue", JSON.stringify(catalogue));
    } else {
      localStorage.removeItem("catalogue");
    }
  }, [catalogue]);

    const Utilities ={
        resNav, setResNav, catalogue, setCatalogue
    }

    return <UtiContext.Provider value={Utilities}>{children}</UtiContext.Provider>
}

export default UtiProvider