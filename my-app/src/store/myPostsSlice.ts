import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getMyPosts: any = createAsyncThunk(
    'myPosts/getMyPosts',
    async(objectFromMyPostsPage, {rejectWithValue}) => {
        const {limit, offset, searchQuery, ordering}: any = objectFromMyPostsPage;
        try {
            const access = localStorage.getItem('access')
            const response = await fetch(
                `https://studapi.teachmeskills.by/blog/posts/my_posts/?&limit=${limit}&offset=${offset}&ordering=${ordering}&search=${searchQuery}`,
                {
                    method: "GET",
                    headers: {
                        
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
            return data;
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
        ordering: '',
        searchQuery: '',
        },
    reducers: {
        setPage: (state, action) => {
            state.currentPage = action.payload
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload
        },
        setOrdering: (state, action) => {
            state.ordering = action.payload
        },       
    },
    extraReducers: (builder) => {
        builder.addCase(getMyPosts.fulfilled, (state, action) => {
            (state.myPosts = action.payload.results), (state.isLoading = false), (state.totalItems = action.payload.count);
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
export const {setPage, setSearchQuery, setOrdering} = myPostsSlice.actions;
export default  myPostsSlice.reducer