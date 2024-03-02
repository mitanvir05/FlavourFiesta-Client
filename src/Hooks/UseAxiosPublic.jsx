import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://y-amber-kappa.vercel.app",
});
const UseAxiosPublic = () => {
  return axiosPublic;
};
export default UseAxiosPublic;
