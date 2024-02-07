import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

function useAllProducts(props) {
    const axiosPublic = useAxiosPublic()
  
    const {refetch, isPending, data: products = [] } = useQuery({
      queryKey: ['products-all'],
      queryFn: async () => {
        const res = await axiosPublic.get(`/eshop`);
        return res.data;
      },
    });
    

    return {products, refetch, isPending}
}

export default useAllProducts;