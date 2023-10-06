import axios from 'axios'
const BASEURL = import.meta.env.VITE_API_URL

export default axios.create({
    baseUrl: BASEURL
})
export const axiosPriv = axios.create({
    baseUrl: BASEURL,
    headers: {"Content-Type": "application/json"},
    withCredentials: true
})