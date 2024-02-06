import axios from 'axios';
export const axiosSecure = axios.create({
    // baseURL: 'https://universal-survey-backend.vercel.app/'
    baseURL: "http://localhost:5000"
})
const UseAxioSecure = () => {
    return axiosSecure;

};

export default UseAxioSecure;