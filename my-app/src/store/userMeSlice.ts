import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUserInfo = createAsyncThunk('userMe/getUserInfo', async(userLoginData, {rejectWithValue}) => {
    try{
        const {access} = JSON.parse(localStorage.getItem('token') as string);
        const response = await fetch("https://studapi.teachmeskills.by/auth/users/me/",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + access,
                },
            }
        )
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        return rejectWithValue((error as Error).message);
    }    
})
const userMeSlice = createSlice({
    name: 'userMe',
    initialState: {UserInfo: {
        username: '',
        id: 0,
        email: '',
    },
    loading: false,
    error: null as string | null,
},
    reducers: {
        setUserInfo(state, action) {
            state.UserInfo = action.payload;
        },
    },

})
export const {setUserInfo} = userMeSlice.actions;
export default userMeSlice.reducer