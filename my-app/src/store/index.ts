import { configureStore } from "@reduxjs/toolkit";
import themeSlice from './themeSlice';
import activeSlice from './activeSlice';
export default configureStore ({
    reducer: {
        theme: themeSlice,
        active: activeSlice,
    }
})