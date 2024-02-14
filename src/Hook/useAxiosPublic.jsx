import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://universal-survey-backend.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;