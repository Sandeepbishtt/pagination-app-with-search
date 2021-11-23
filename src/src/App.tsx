import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PaginationTable from "./components/PaginationTable";
import { addData } from "./Redux/PostSlice";

const App = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [showLoading , setShowLoading] = useState(true)

  useEffect(() => {
    axios
    .get(
      `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`
      )
      .then((response) => {
        dispatch(addData(response.data));
        setShowLoading(false)
      })
      .catch((error) => console.log(error));
  }, [page]);



  useEffect(() => {
    const interval = setTimeout(() => {
      setPage((prev) => prev + 1);
    }, 10000);
    if(page === 49){
      clearTimeout(interval)
    }
  }, [page]);

  return (
    <>
     <h1 style={{textAlign:'center'}}>Pagination with API</h1>
      <PaginationTable pageNumber={page} showLoad = {showLoading} />
    </>
  );
}

export default App;
