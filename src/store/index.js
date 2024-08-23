import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth-slice";
import productReducer from "./slices/product-slice";

export default configureStore({
    reducer: {
        auth: authReducer,
        product: productReducer
    }
})