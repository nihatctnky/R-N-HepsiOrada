
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../service/verb";
import {  USER_URL } from "../../service/url";



const getuserInfo = createAsyncThunk(" profile/getuserInfo",
    async (params?: object) => {
        try {
            const response = await getRequest(USER_URL,params || {})
          
            return response.data
        } catch (error) {
           
        }
    }
       
)

export { getuserInfo }