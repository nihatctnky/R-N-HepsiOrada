
import { createSlice } from "@reduxjs/toolkit";
import { CategoriesState } from "../../models/data/categoriesState";
import { getCategories } from "../actions/categoriesAction";


const initialState: CategoriesState = {
    categories: [
        {
            creationAt :"2025-06-04T22:50:06.000Z",
                   
            id : 0,
              
            image: "https://i.imgur.com/QkIa5tT.jpeg",
                
            name : "All",
                 
            slug :  "all",
                  
            updatedAt  :  "2025-06-05T14:07:44.000Z",
              
              
        }
  
    ],
    selectedCategory:"all",
    pending: false,

}

const CategoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setCategory:(state,action)=>{
            state.selectedCategory=action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.pending, (state, action) => {
                state.pending = true
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.pending = false
                state.categories = [...state.categories,...action.payload]
            })
            .addCase(getCategories.rejected, (state, action) => {
                state.pending = false
            })
    }

})
export const {setCategory}=CategoriesSlice.actions
export default CategoriesSlice.reducer