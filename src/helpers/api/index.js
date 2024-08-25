import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        "Content-Type": "application/json", // default
        // lang and token can be added here
        // but in this case it is not needed
    }
});

export default api;
