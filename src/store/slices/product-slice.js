import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: [],
    refresher: false,
    tableMode: "compact",
    productDetails: null,
    productToEdit: null,
    editFormState: false,
    createFormState: false
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        triggerRefresh: (state) => {
            state.refresher = !state.refresher
        },
        setTableMode: (state, action) => {
            state.tableMode = action.payload;
        },
        setProductsData: (state, action) => {
            state.data = action.payload;
        },
        setProductDetails: (state, action) => {
            state.productDetails = state.data.find(product => product.id === action.payload);
        },
        editProduct: (state, action) => {
            const index = state.data.findIndex(product => product.id === action.payload.id);
            state.data[index] = action.payload;
            state.productToEdit = null;
        },
        deleteProduct: (state, action) => {
            const index = state.data.findIndex(product => product.id === action.payload);
            state.data.splice(index, 1);
        },
        addProduct: (state, action) => {
            state.data.unshift(action.payload);
        },
        setEditProduct: (state, action) => {
            state.productToEdit = action.payload;
        },
        setCreateFormState: (state, action) => {
            state.createFormState = action.payload;
        },
        setEditFormState: (state, action) => {
            state.editFormState = action.payload;
        }
    }
})

export const { triggerRefresh, setTableMode, setProductsData, setProductDetails, editProduct, deleteProduct, addProduct, setEditProduct, setCreateFormState, setEditFormState } = productSlice.actions;
export default productSlice.reducer;