import axios from "axios";
const instance = axios.create({
    baseURL:"http://localhost:8080",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
 
}) 
export default instance