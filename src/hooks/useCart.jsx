import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "@/components/Provider/AuthProvider";


function useCart(props) {
    const axiosPublic = useAxiosPublic()
    const { user } = useContext(AuthContext);
  
    const {refetch, isPending, data: products = [] } = useQuery({
      queryKey: ['products-cart'],
      queryFn: async () => {
        const res = await axiosPublic.get(`/cart/${user?.email}`);
        return res.data;
      },
    });

    return {refetch, isPending, products}
}

export default useCart;