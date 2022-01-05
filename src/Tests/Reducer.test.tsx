import store from '../Redux/Store'
import {addData} from '../Redux/Reducer'

test('testinf reducer',()=>{
	store.dispatch(addData({
		hits:[{
			created_at:2,
			title:'titian',
			author:'jamesg',
			url:'https:githuab.com'
		}]
	}))

	const state = store.getState().data

	const detail = state.data.find(val => val.created_at === 2)
	expect(detail?.author).toBe('jamesg')
	expect(detail?.title).toBe('titian')
	expect(detail?.url).toBe('https:githuab.com')
})