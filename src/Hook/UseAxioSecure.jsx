import axios from 'axios';
export const axiosSecure = axios.create({
    baseURL: 'https://universal-survey-backend.vercel.app/'
})
const UseAxioSecure = () => {
    return axiosSecure;

};

export default UseAxioSecure;