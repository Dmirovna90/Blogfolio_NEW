import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUserInfo = createAsyncThunk('userMe/getUserInfo', async(_, {rejectWithValue}) => {
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
        const data = await response.json()
        console.log(data)
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
    }},
    reducers: {

    },
})
export default userMeSlice.reducer