import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../service/verb";
import { PRODUCTS_URL } from "../../service/url";


const getProducts = createAsyncThunk("products/getProducts",
    async (params: object) => {
        try {
            const response = await getRequest(PRODUCTS_URL, params)
          
            return response.data
        } catch (error) {
         
        }
    }
       
)


const getProductsFilterCategory = createAsyncThunk("products/getProductsFilterCategory",
    async (params: object) => {
        try {
            const response = await getRequest(PRODUCTS_URL, params)
           
            return response.data
        } catch (error) {
            
        }
    }
       
)

const getSingleProduct = createAsyncThunk("products/getSingleProduct",
    async (productId: number) => {
        try {
            const url=`${PRODUCTS_URL}/${productId}`
            const response = await getRequest(url,{})
           
            return response.data
        } catch (error) {
           
        }
    }
       
)

export { getProducts,getProductsFilterCategory,getSingleProduct }