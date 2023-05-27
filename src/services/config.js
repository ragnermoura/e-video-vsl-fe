import axios from "axios";
export const http = axios.create({
    // baseURL: 'http://13.38.99.151:3000'
    baseURL: 'http://localhost:3000'
})