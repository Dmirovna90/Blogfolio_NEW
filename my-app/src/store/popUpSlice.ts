import { createSlice } from "@reduxjs/toolkit";

const popUpSlice = createSlice({
    name: 'activePop',
    initialState: {
        isActive: false,
    },
    reducers:{
        popUpActive(state) {
            if(!state.isActive) state.isActive = true
            else state.isActive = false
        }
    }
});
export const {popUpActive} = popUpSlice.actions;
export default popUpSlice.reducer;