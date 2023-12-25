import { createSlice } from "@reduxjs/toolkit";

const initialState ={loading:false,courseItems:[]};

const courseItemsSlice = createSlice({
  name: "courseItems",
  initialState,
  reducers: {
    setCourseItems(_, action) {
     return {...initialState, courseItems:action.payload}
    },
    setLoading(_, action) {
     return {...initialState, loading:action.payload}
    },
  },
});

export const { setCourseItems, setLoading } = courseItemsSlice.actions;

export default courseItemsSlice.reducer;
