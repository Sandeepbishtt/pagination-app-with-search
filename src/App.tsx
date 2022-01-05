import React,{useState,useEffect} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import PaginationTable from './Components/PaginationTable'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {addData,showLoading} from './Redux/Reducer'

function App() {

  const dispatch = useDispatch()
const [page,setPage] = useState(0)
useEffect(()=>{
axios.get(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`)
.then((response)=>{
  dispatch(addData(response.data))
  dispatch(showLoading())
})
.catch(error => console.log(error))
},[page])

useEffect(()=>{
  const interval = setTimeout(()=>{
    setPage(prev=> prev+1)
  },10000)
  if(page === 49){
    clearTimeout(interval)
  }
})

  return (
    <BrowserRouter data-test='component-app'>
    <h2 style={{textAlign:'center'}} > Pagination App </h2>
     <Switch>
     <Route exact path='/' render={(props)=> <PaginationTable pageNumber={page}/>}  />
     </Switch>
    </BrowserRouter>
  );
}

export default App;
