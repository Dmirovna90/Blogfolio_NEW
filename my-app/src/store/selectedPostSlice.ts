import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const getPostInfo = createAsyncThunk('post/getPostInfo', async(objectFromPostPage, {rejectWithValue}) => {
    const {id}:any = objectFromPostPage;
    try{
        const response = await fetch(`https://studapi.teachmeskills.by/blog/posts/${id}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
        const data = await response.json();
        return data;

    } catch (error) {
        return rejectWithValue((error as Error).message)
    }
})
const selectedPostSlice = createSlice({
    name: 'post',
    initialState: {
        postInfo: {
            id: 0,
            image: "",
            text: "",
            date: "",
            lesson_num: 0,
            title: "",
            description: "",
            author: 0,
        },
        loading: false,
        error: null as string | null,
    },
    reducers: {
        setPostInfo(state, action) {
            state.postInfo = action.payload;
        },
    },
        extraReducers: (builder) => {
            builder.addCase(getPostInfo.pending, (state) => {
                state.loading = true;
                state.error = null;
            }).addCase(getPostInfo.fulfilled, (state, action) => {
                state.loading = false;
                state.postInfo= action.payload;
            }).addCase(getPostInfo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string
    
            })
        },
})
export const {setPostInfo} = selectedPostSlice.actions;
export default selectedPostSlice.reducer