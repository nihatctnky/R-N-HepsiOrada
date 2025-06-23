import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../models/data/userState";
import { getuserInfo } from "../actions/userAction";


const initialState:UserState={
    userInfo:{},
    pending:false
}

const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(getuserInfo.pending,(state,action) =>{
            state.pending=true

        })
        .addCase(getuserInfo.fulfilled,(state,action) =>{
            state.pending=false
            state.userInfo=action.payload
        })
        .addCase(getuserInfo.rejected,(state,action) =>{
            state.pending=false
        })
    }
})
export default userSlice.reducer