import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic"

const UseCourses = () => {
    const axiosPublic = useAxiosPublic()

const {refetch, isPending, data:courses=[]}=useQuery({
    queryKey:["courses" ],
    queryFn:async()=>{
        const res = await axiosPublic.get(`/courses`)
        return res?.data
    }
})

  return {refetch, isPending, courses}
}

export default UseCourses
