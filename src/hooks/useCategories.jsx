import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCategories = ( slug ) => {
  return useQuery({
    queryKey: [ slug],
    queryFn: async () => {
      const { data } = await axios.get("/categories.json");

      if (slug && slug !== "all") {
        let filterData

        data.forEach(category => {
          category.children.forEach(sub => {
            if (sub.slug === slug) {
              filterData = sub
            }

            // sub.children?.forEach(child => {
            //   if (child.catalogue === slug || child.slug === slug) {
            //     filterData.push(child);
            //   }
            // });
          });
        });

        return filterData;
      }

      return data;
    },
  });
};

export default useCategories;
