import axios from "axios";

function useAxiosPublic(props) {
  const axiosPublic = axios.create({
    baseURL: "https://quick-fit-server.vercel.app/api/v1",
    // baseURL: "http://localhost:3001/api/v1",
  });

  return axiosPublic;
}

export default useAxiosPublic;
