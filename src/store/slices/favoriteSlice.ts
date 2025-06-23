import { createSlice } from "@reduxjs/toolkit";
import { FavoriteState } from "../../models/data/favoriteState";



const initialState:FavoriteState={
    favorite:[]
}

const favoriteSlice=createSlice ({
    name:"favorite",
    initialState,
    reducers:{
        addFavorite:(state,action)=> {
            const product =action.payload
            if(!state.favorite.find(item=>item.id == product.id)) {
                state.favorite.push({...product,isFavorite:true})
            }
           
        },
        removeFavorite:(state,action)=>{
            state.favorite= state.favorite.filter(
                item=>item.id !== action.payload.id
            )
        }
    }
})
export const {addFavorite,removeFavorite}=favoriteSlice.actions
export default favoriteSlice.reducer