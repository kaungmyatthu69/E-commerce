import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      return data;
    },
    staleTime: 1000 * 60 * 3, // 3 minutes (data is fresh for 3 mins)
  });
};
