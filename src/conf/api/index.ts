import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.github.com/",
    headers: {
        'Content-Type': 'application/json'
    }
})