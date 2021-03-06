import React,{useState,ChangeEvent} from 'react'
import {fetchData,isLoad} from '../Redux/Reducer'
import {Paper,TableContainer,Table,TableBody,TableCell,TableRow,TableHead,Pagination,InputBase,Button} from '@mui/material'
import Detail from './ModalJson'
import {useSelector} from 'react-redux'
import moment from 'moment'
import {CircularProgress} from '@mui/material'



const PaginationTable = (props: any) => {
  const data = useSelector(fetchData);
  const load = useSelector(isLoad)
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [dataForModal, setDataForModal]: any[] = useState([]);
console.log(data)

  const [page, setPage] = useState(0);
  const [pageValue, setPageValue] = useState(0);

  const modalClickHandler = (id: number, val: any) => {
    setConfirmOpen(true);
    setDataForModal(val);
  };

  const [input, setInput] = useState("");
  const [showSearch, setShowSearch] = useState(true);
  const [filterData, setFilterData] = useState([]);
  const [pageForSearch, setPageForSearch] = useState(true);

  
  const changeHandler = (e: any, val: any) => {
    setPage(val);
    setPageValue(val - 1);
  };



  const searchHandler = (e: any) => {
    setPageForSearch(false);
    e.preventDefault();
    const dataBySearch = data.slice(pageValue * 20, pageValue * 20 + 20).filter((val: any) => {
      return (
        val.title.toLowerCase().trim().includes(input.toLowerCase().trim()) ||
        moment(val.created_at).format('LLLL').toLowerCase().trim().includes(input.toLowerCase().trim())
      );
    });
    setShowSearch(false);
    setFilterData(dataBySearch);
    setInput("");
   
  };
  const refreshHandler = () =>{
     if (input === "") {
      setFilterData([]);
      setShowSearch(true);
      setPageForSearch(true);
    }
  }


  return (
    <div data-test='component-pagination'>
      <Detail
        data={dataForModal}
        title="Post RawJSON"
        open={confirmOpen}
        setOpen={setConfirmOpen}
      />
 {load ? <CircularProgress size ={80} style={{marginLeft:'50%'}} /> :
      <div style={{ height: 750 }}>
        <form  onSubmit={searchHandler} style={{margin:'1rem',display:'flex',justifyContent:'end'}}>
          <InputBase
            style={{ border: "2px solid grey" }}
            placeholder="Search"
            type="text"
            value={input}
            required
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setInput(event.target.value)
            }
          ></InputBase>
         {showSearch ? <Button onClick={searchHandler} variant='contained' color='primary' disabled = {input === ''} >Search </Button> : <Button variant='contained' color='primary' onClick={refreshHandler} >Back</Button>}
        </form>
        <Paper>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                 <TableCell>Created_at</TableCell>
                 <TableCell>Title</TableCell>
                 <TableCell>Author</TableCell>
                 <TableCell>URL</TableCell>
               
                </TableRow>
              </TableHead>
              <TableBody>
                {showSearch
                  ? data
                      .slice(pageValue * 20, pageValue * 20 + 20)
                      .map((val: any, index: any) => {
                        return (
                          <TableRow
                            key={val.created_at_i}
                            onClick={() =>
                              modalClickHandler(val.created_at_i, val)
                            }
                          >
                            <TableCell>{moment(val.created_at).format('LLLL')}</TableCell>
                            <TableCell>{val.title}</TableCell>
                            <TableCell>{val.author}</TableCell>
                            <TableCell>{val.url} </TableCell>
                          </TableRow>
                        );
                      })
                  : filterData
                      .map((val: any, index: any) => {
                        return (
                          <TableRow
                            key={val.created_at_i}
                            onClick={() =>
                              modalClickHandler(val.created_at_i, val)
                            }
                          >
                            <TableCell>{ moment(val.created_at).format('LLLL')}</TableCell>
                            <TableCell>{val.title}</TableCell>
                            <TableCell>{val.author}</TableCell>
                            <TableCell>{val.url} </TableCell>
                          </TableRow>
                        );
                      })}
              </TableBody>
            </Table>

            {pageForSearch && (
              <Pagination
              style={{marginTop:'1rem',marginLeft:'30rem'}}
                count={ props.pageNumber + 1}
                page={page}
                onChange={changeHandler}
                variant="outlined"
                shape="rounded"
                color="primary"
              />
            )}
          </TableContainer>
        </Paper>
      </div>
}
    </div>
  );
};

export default PaginationTable;
