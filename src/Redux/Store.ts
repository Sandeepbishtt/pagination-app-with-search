import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './PostSlice'

export default configureStore({
  reducer: {
    data: cartReducer.reducer,
  },
});
