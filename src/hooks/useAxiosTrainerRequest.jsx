import axios from "axios";

function useAxiosTrainerRequest(props) {
  const trainerRequest = axios.create({
    // baseURL: "https://quick-fit-server.vercel.app/api/v1",
    baseURL: "http://localhost:3001/api/v1",
  });

  return trainerRequest;
}

export default useAxiosTrainerRequest;