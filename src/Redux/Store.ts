import {configureStore} from '@reduxjs/toolkit'

import PaginationSlice from './Reducer'

export default configureStore({
	reducer:{
		data:PaginationSlice.reducer
	}
})