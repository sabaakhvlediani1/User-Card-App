// src/features/user/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    picture: "",
    name: "",
    profession: "",
    social: {
      twitter: "",
      facebook: "",
      instagram: "",
      discord: "",
    },
    link: [],
    buttonColor: "#000000",
    iconColor: "#ffffff",
    backgroundColor: "#ffffff",
    backgroundImage: "", 
  },
  reducers: {
    setUser: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
