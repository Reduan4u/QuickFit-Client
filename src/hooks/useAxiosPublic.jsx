import axios from "axios";

function useAxiosPublic(props) {
  const axiosPublic = axios.create({
    baseURL: "https://quick-fit-server.vercel.app/api/v1",
<<<<<<< HEAD
    //baseURL: "http://localhost:3001/api/v1",
=======
   // baseURL: "http://localhost:3001/api/v1",
>>>>>>> e8898ef3341efe29f1d5e7f749f559cb577a576d
  });

  return axiosPublic;
}

export default useAxiosPublic;
