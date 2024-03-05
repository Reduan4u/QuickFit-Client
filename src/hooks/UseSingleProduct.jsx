import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

function useSingleProducts(props) {

    const axiosPublic = useAxiosPublic()

    const {refetch, isPending, data:products=[]}=useQuery({
        queryKey:["category-products"],
        queryFn:async()=>{
            const res = await axiosPublic.get(`/eshop`) ;
            return res.data
        }
    })

    return {refetch, isPending, products}
}

export default useSingleProducts;