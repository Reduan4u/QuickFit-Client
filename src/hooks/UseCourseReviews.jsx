"use client"
import useAxiosPublic from './useAxiosPublic'
import { useQuery } from '@tanstack/react-query';

const UseCourseReviews = () => {
    const axiosPublic = useAxiosPublic()

    const {refetch, isPending, data: reviews = [] } = useQuery({
        queryKey: [`reviews`],
        queryFn: async () => {
          const res = await axiosPublic.get(`/reviews`);
          return res.data;
        },
      });
  

  return {refetch, isPending, reviews}
}

export default UseCourseReviews