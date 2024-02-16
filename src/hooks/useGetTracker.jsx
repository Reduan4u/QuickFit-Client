import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import UseContext from './UseContext'

function useGetTracker(props) {
    const {user} = UseContext()
    const axiosPublic = useAxiosPublic()

    const {refetch, isPending, data:tracker=[]}=useQuery({
        queryKey:["tracker"],
        queryFn:async()=>{
            const res = await axiosPublic.get(`/tracker/date/${user?.email}`) ;
            return res.data
        }
    })

    return {refetch, isPending, tracker}
}

export default useGetTracker;