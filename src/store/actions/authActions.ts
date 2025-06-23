
import { createAsyncThunk } from "@reduxjs/toolkit";
import { postRequest } from "../../service/verb";
import { SIGNIN_URL } from "../../service/url";
import AsyncStorage from "@react-native-async-storage/async-storage";




const signInUser = createAsyncThunk(" auth/signInUser",
    async (params: object) => {
        try {
            const response = await postRequest(SIGNIN_URL, params)
            await AsyncStorage.setItem("access_token",response.data.access_token)
            await AsyncStorage.setItem("refresh_token",response.data.refresh_token)
        
            return response.data
        } catch (error) {
            console.error("signInUser error:", error);
           
        }
    }
       
)
const checkUser = createAsyncThunk("auth/checkUser", async () => {
    try {
      const token = await AsyncStorage.getItem("access_token");
      
      if (token) {
        return { isLogin: true };
      } else {
        return { isLogin: false };
      }
    } catch (error) {
      return { isLogin: false };
    }
  });

  const logOutUser = createAsyncThunk("auth/logOutUser", async () => {
    try {
  await AsyncStorage.removeItem("access_token");
     
        return { isLogin:false};
      
    } catch (error) {
      return { isLogin: true};
    }
  });
  

  
export {  signInUser,checkUser,logOutUser}