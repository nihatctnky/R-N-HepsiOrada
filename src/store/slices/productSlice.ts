
import { createSlice } from "@reduxjs/toolkit";
import { ProductState } from "../../models/data/productsState";
import { getProducts, getProductsFilterCategory, getSingleProduct } from "../actions/productsAction";


const initialState:ProductState={
    products:[],
    productsFilterCategory:[],
    pending:false,
    productDetailData:{},
    pendingDetail:false
    
}

const productsSlice =createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(getProducts.pending,(state,action) => {
            state.pending=true
        })
        .addCase(getProducts.fulfilled,(state,action) => {
            state.pending=false
            state.products=action.payload
        })
        .addCase(getProducts.rejected,(state,action) => {
            state.pending=false
        })

        .addCase(getProductsFilterCategory.pending,(state,action) => {
            state.pending=true
        })
        .addCase(getProductsFilterCategory.fulfilled,(state,action) => {
            state.pending=false
            state.productsFilterCategory=action.payload
        })
        .addCase(getProductsFilterCategory.rejected,(state,action) => {
            state.pending=false
        })

        .addCase(getSingleProduct.pending,(state,action) => {
            state.pendingDetail=true
        })
        .addCase(getSingleProduct.fulfilled,(state,action) => {
            state.pendingDetail=false
            state.productDetailData=action.payload
        })
        .addCase(getSingleProduct.rejected,(state,action) => {
            state.pendingDetail=false
        })
    }

})

export default productsSlice.reducer