import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    height: "300px",
  },
});
const Detail = (props?: any) => {
  const classes = useStyles();
  const { title, open, setOpen, data } = props;
  return (
    <Dialog
      maxWidth="sm"
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="confirm-dialog"
    >
      <DialogTitle id="confirm-dialog">{title}</DialogTitle>
      <DialogContent className={classes.root}>
        {JSON.stringify(data)}
      </DialogContent>
    </Dialog>
  );
};
export default Detail;
