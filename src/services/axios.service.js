import axios from "axios";
import {apiKEY, baseURL} from "../configs/urls";
const axiosService = axios.create({baseURL});

// API key by default
// axiosService.defaults.headers['Authorization'] = 'Bearer 4df228ec1ca61b17b81da23d2c90df24';
axiosService.defaults.headers['Authorization'] = `Bearer ${apiKEY}`;

export {
    axiosService,
}