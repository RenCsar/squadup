import axios from "axios";

const url = process.env.REACT_APP_API_URL;

export const API = axios.create({
    baseURL: url,
})