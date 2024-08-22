import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

export const login = async (payload) => {
    const resp = await axios.post(`${baseURL}/auth/login`, payload, {
        headers: {
            "Content-Type": "application/json",
        }
    });
    const data = await resp.data;
    return data;
};