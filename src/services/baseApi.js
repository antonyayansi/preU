import axios from "axios";

const token = localStorage.getItem("preu-token");

export const baseApi = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
})