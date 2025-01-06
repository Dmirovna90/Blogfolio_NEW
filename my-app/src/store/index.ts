import { configureStore } from "@reduxjs/toolkit";
import themeSlice from './themeSlice';
import activeSlice from './activeSlice';
import postsSlice from './postsSlice';
import popUpSlice from "./popUpSlice";
import signUpSlice from './signUpSlice'
import signInSlice from './signInSlice';
import userMeSlice from './userMeSlice';
import myPostsSlice from './myPostsSlice';
import addPostSlice from './addPostSlice';
import searchSlice from './searchSlice';
export default configureStore ({
    reducer: {
        theme: themeSlice,
        active: activeSlice,
        posts: postsSlice,
        activePop: popUpSlice,
        user: signUpSlice,
        signIn: signInSlice,
        userMe: userMeSlice,
        myPosts: myPostsSlice,
        addPost: addPostSlice,
        search: searchSlice,
    }
})