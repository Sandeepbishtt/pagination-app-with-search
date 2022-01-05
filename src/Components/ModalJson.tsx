import React from 'react'
import {Dialog,DialogContent,DialogTitle } from '@mui/material'

const Detail = (props:any) =>{
	const {title,open,setOpen,data} = props
	return(
<Dialog
maxWidth ="sm"
open={open}
onClose={()=>setOpen(false)}
aria-labelledby="confirm-dialog">
<DialogTitle id="confirm-dialog"> {title} </DialogTitle>
<DialogContent>{JSON.stringify(data)}
</DialogContent>
</Dialog>


		)
}
export default Detail