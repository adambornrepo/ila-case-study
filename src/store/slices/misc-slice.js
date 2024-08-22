import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    refresher: false,
    listMode: "table",
}

export const miscSlice = createSlice({
    name: "misc",
    initialState,
    reducers: {
        triggerRefresh: (state) => {
            state.refresher = !state.refresher
        },
        setListMode: (state, action) => {
            state.listMode = action.payload;
        },
    }
})

export const { triggerRefresh, setListMode } = miscSlice.actions;
export default miscSlice.reducer;