import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

function useCategoryProducts(params) {

    const axiosPublic = useAxiosPublic()

    const {refetch, isPending, data:products=[]}=useQuery({
        queryKey:["category-products"],
        queryFn:async()=>{
            const res = await axiosPublic.get(`/eshop/${params.id}`) ;
            return res.data
        }
    })

    return {refetch, isPending, products}
}

export default useCategoryProducts;