import { createSlice } from "@reduxjs/toolkit";

const favoritePostsSlice = createSlice({
    name: 'favorites',
    initialState: {
        favorites: [],
        favorite: {
            id: 0,
            image: "",
            text: "",
            date: "",
            lesson_num: 0,
            title: "",
            description: "",
            author: 0,
            isFavorite: false,
        },
        loading: false,
        error: null as string | null,
    },
    reducers: {
        fetchPostStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchPostSuccess(state, action) {
            state.loading = false;
            state.favorites = action.payload;
        },
        fetchPostFail(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        setFavorite(state, action) {
            state.favorite = action.payload;
        },
    }
})
export const {fetchPostStart, fetchPostSuccess, fetchPostFail, setFavorite} = favoritePostsSlice.actions;
export default favoritePostsSlice.reducer