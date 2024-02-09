"use client";

import { useQuery } from "@tanstack/react-query";
import UseContext from "./UseContext";
import useAxiosPublic from "./useAxiosPublic";

function useUser() {
  const { user } = UseContext();
  const axios = useAxiosPublic();
  const { refetch, isPending, data } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axios.get(`/users/${user?.email}`);
      return res.data;
    },
  });

  return { data, refetch, isPending, role: data?.role };
}

export default useUser;
