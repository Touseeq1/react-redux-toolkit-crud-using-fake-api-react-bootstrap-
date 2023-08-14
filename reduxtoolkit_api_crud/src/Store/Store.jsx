import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from "./AllSlice"
const store = configureStore({
  name: "users",
  reducer: userDataSlice
})
export default store