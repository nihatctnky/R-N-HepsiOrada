import { createSlice } from "@reduxjs/toolkit";
// thunk dosyan varsa
import { AuthState } from "../../models/data/authState";
import { checkUser, logOutUser, signInUser } from "../actions/authActions";
import { registerUser } from "../actions/registerAction";

const initialState:AuthState = {
  pending: false,
  isLogin: false,
  user: null,

};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // boşsa bile bırakabilirsin
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInUser.pending, (state) => {
        state.pending = true;
      })
      .addCase(signInUser.fulfilled, (state) => {
        state.pending = false;
        state.isLogin = true;
      })
      .addCase(signInUser.rejected, (state) => {
        state.pending = false;
      })
      .addCase(checkUser.fulfilled, (state,action) => {
        state.isLogin = action.payload.isLogin;
      })
      .addCase(logOutUser.fulfilled, (state,action) => {
        state.isLogin = action.payload.isLogin;
      })
      .addCase(registerUser.pending, (state) => {
        state.pending = true;
   
      })
      .addCase(registerUser.fulfilled, (state,action) => {
        state.pending = false;
        state.isLogin = true;
        state.user = action.payload.user;
       
    
      })
      .addCase(registerUser.rejected, (state) => {
        state.pending = false;
    
      })

  },
});

export default authSlice.reducer;
