import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProductList = (category, limit) => {
  return useQuery({
    queryKey: ["products", category, limit],
    queryFn: async () => {
      const { data } = await axios.get("/product_list.json");

      let filtered = category ? data.filter((p) => p.categories.some((cat) => cat.toLowerCase() == category.toLowerCase())) : data;

      if(limit){
        filtered = filtered.slice(0,limit)
      }

      return filtered;
    },
  });
};
export default useProductList;
