import { configureStore } from "@reduxjs/toolkit";
import courseItemsSlice from "./courseSlice";

const store = configureStore({
  reducer: { courseItems: courseItemsSlice },
});

export default store;
