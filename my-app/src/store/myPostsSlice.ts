import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getMyPosts = createAsyncThunk(
    'myPosts/getMyPosts',
    async(objectFromMyPostsPage, {rejectWithValue}) => {
        const {limit, offset, path}: any = objectFromMyPostsPage;
        try {
            const access = localStorage.getItem('access')
            const response = await fetch(
                `https://studapi.teachmeskills.by/blog/posts/my_posts/?${path}&limit=${limit}&offset=${offset}`,
                {
                    method: "GET",
                    headers: {
                    //   "Content-Type": "application/json",
                      Authorization: "Bearer " + JSON.parse(access as string),
                    },
                }                
            );
            if (!response.ok) {
                const errorData = await response.json();
                if (response.status === 401) {
                  return rejectWithValue(errorData.detail);
                }
                throw new Error("error is here");
            }
            const data = await response.json();
            return data.results;
        } catch (error) {
            return rejectWithValue((error as Error).message);
        }
    }
);
const myPostsSlice = createSlice ({
    name: 'myPosts',
    initialState: {
        myPosts: [],
        error: null as null | string,
        isLoading: false,
        currentPage: 1,
        itemsPerPage: 10,
        totalItems: 0,
        select: [],
        },
    reducers: {
        setPage: (state, action) => {
            state.currentPage = action.payload
        },
        selectPost(state, action) {
            state.select = action.payload;
        },       
    },
    extraReducers: (builder) => {
        builder.addCase(getMyPosts.fulfilled, (state, action) => {
            (state.myPosts = action.payload), (state.isLoading = false), (state.totalItems = action.payload.count);
        });
        builder.addCase(getMyPosts.pending, (state) => {
            (state.error = null), (state.isLoading = true);
        });
        builder.addCase(getMyPosts.rejected, (state, action) => {
            (state.error = (action.payload as string) || "error!!!!!!"),
              (state.isLoading = false);
        });        
    },
});
export const {setPage, selectPost} = myPostsSlice.actions;
export default  myPostsSlice.reducer