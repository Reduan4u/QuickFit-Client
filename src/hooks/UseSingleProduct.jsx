import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

function UseSingleProduct({params}) {
    console.log(params.single)
    const axiosPublic = useAxiosPublic()

    const {refetch, isPending, data:product={}}=useQuery({
        queryKey:["single-product"],
        queryFn:async()=>{
            const res = await axiosPublic.get(`/eshop/data/${params?._single}`) ;
            return res.data
        }
    })

    return {refetch, isPending, product}
}

export default UseSingleProduct;