import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useSearch = (search) => {
    // console.log(search)
     return useQuery({
    queryKey: ["products", search],
    queryFn: async () => {
      const { data } = await axios.get("/product_list.json");

      let filtered = search ? data.filter((p) => p.product_name.toLowerCase().includes(search.toLowerCase())) : [];

      return filtered;
    },
  });
};

export default useSearch;