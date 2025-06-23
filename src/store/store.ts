import { configureStore } from "@reduxjs/toolkit";
import productsSlice from './slices/productSlice';
import cartSlice from "./slices/cartSlice"
 import categoriesSlice from "./slices/categoriesSlice"   
import authSlice from './slices/authSlice';
import favoriteSlice from './slices/favoriteSlice';
import userSlice from './slices/userSlice';
import searchSlice from './slices/searchSlice';


export const store =configureStore({
    reducer:{
        cart:cartSlice,
        products:productsSlice,
        categories:categoriesSlice,
        auth:authSlice,
        favorite:favoriteSlice,
        user:userSlice,
        search:searchSlice,
      


    }
})

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch= typeof store.dispatch