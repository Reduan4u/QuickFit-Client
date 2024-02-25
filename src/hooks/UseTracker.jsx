import { useQuery } from "@tanstack/react-query"
import UseContext from "./UseContext"
import useAxiosPublic from "./useAxiosPublic"

const UseTracker = () => {
    const {user} = UseContext()
    const axiosPublic = useAxiosPublic()

const {refetch, isPending, data:tracker=[]}=useQuery({
    queryKey:["trackerData",user?.email ],
    queryFn:async()=>{
        const res = await axiosPublic.get(`/tracker/${user?.email}`)
        return res?.data
    }
})

  return {refetch, isPending, tracker}
}

export default UseTracker
