import { createSlice } from "@reduxjs/toolkit";


interface Post {
  data: any[]
}

interface Action {
  payload:any
}


const dataSlice =  createSlice({
  name: "data",
  initialState: {
    data: [],
  } as Post,
  reducers: {
    addData : (state,action:Action) => {
   return {
     ...state,
     data:state.data.concat(action.payload.hits)
   }
  },
 } 
});

export const { addData} = dataSlice.actions;

export const getAllData = (state: any) => state.data.data;


export default dataSlice;
