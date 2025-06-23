import { createAsyncThunk } from "@reduxjs/toolkit";
import {  postRequest } from "../../service/verb";
import {  REGISTER_URL} from "../../service/url";



const registerUser = createAsyncThunk(" auth/registerUser",
    async (params: object) => {
        try {
            const response = await postRequest(REGISTER_URL, params)
            console.log("🔵 REGISTER RESPONSE:", response.data);
            return response.data
        } catch (error) {
            console.error("Register error:", error);
        }
    }
       
)

export { registerUser }