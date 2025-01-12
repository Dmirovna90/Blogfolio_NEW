import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUserInfo = createAsyncThunk('userMe/getUserInfo', async(_, {rejectWithValue}) => {
    try{
        const {access} = JSON.parse(localStorage.getItem('token') as string);
        const response = await fetch(`https://studapi.teachmeskills.by/auth/users/me/`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + access,
                },
            }
        )
        const data = await response.json();
        console.log(data)
        return data
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

    },
    extraReducers: (builder) => {
        builder.addCase(getUserInfo.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(getUserInfo.fulfilled, (state, action) => {
            state.loading = false;
            state.UserInfo= action.payload;
        }).addCase(getUserInfo.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string
    
        })
        },    
})
export default userMeSlice.reducer