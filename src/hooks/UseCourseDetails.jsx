import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const UseCourseDetails = (Category) => {
  const axiosPublic = useAxiosPublic();

  const {
    refetch,
    isPending,
    data: allCourseDetails = [],
  } = useQuery({
    queryKey: ["course-details"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/course-details`);
      return res?.data;
    },
  });
  return { refetch, isPending, allCourseDetails };
};

export default UseCourseDetails;
