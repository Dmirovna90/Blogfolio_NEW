import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        isActive: false,
    },
    reducers:{
        searchActive(state) {
            if(!state.isActive) state.isActive = true
            else state.isActive = false
        },
    }
});
export const {searchActive} = searchSlice.actions;
export default searchSlice.reducer;