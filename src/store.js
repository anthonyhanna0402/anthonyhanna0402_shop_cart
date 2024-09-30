import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./components/slice/cartSlice";

export default configureStore({
  reducer:{
    cart:cartReducer,
},
})