import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

export const getAllProducts = async (payload) => {
    const resp = await axios.get(`${baseURL}/products`, {
        headers: {
            "Content-Type": "application/json",
        }
    });
    const data = await resp.data;
    return data;
};

export const deleteOneProduct = async (payload) => {
    const resp = await axios.get(`${baseURL}/products/${payload}`, {
        headers: {
            "Content-Type": "application/json",
        }
    });
    const data = await resp.data;
    return data;
};

export const createProduct = async (payload) => {
    const resp = await axios.post(`${baseURL}/products`, payload, {
        headers: {
            "Content-Type": "application/json",
        }
    });
    const data = await resp.data;
    return data;
};