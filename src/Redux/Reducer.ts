import {createSlice,PayloadAction} from '@reduxjs/toolkit'

interface Post{
	data:any[]
	isLoading:boolean
}

const PaginationSlice = createSlice({
	name:'data',
	initialState:{
		data:[],
		isLoading:true
	} as Post,
	reducers:{
		addData:(state,action :PayloadAction<any>) => {
             return {
             	...state,
             	data:state.data.concat(action.payload.hits)
             }
		},
		showLoading:(state) =>{
			state.isLoading = false
		}
	}
})

export const {addData,showLoading} = PaginationSlice.actions

export const fetchData = (state:any) => state.data.data

export const isLoad = (state:any) => state.data.isLoading

export default PaginationSlice