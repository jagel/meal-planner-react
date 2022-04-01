import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const emails = ['username@gmail.com', 'user02@gmail.com'];

export interface DeleteMessageDialogProps {
  open: boolean;
  onClose: (deleteitem: boolean) => void;
}

export const  DeleteMessageDialog = (props: DeleteMessageDialogProps) => {
    const { onClose, open } = props;

  return (
    <Dialog
        open={open}      
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete item"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you would like to delete the selected item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => onClose(false)} autoFocus>Cancel</Button>
          <Button onClick={() => onClose(true)}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
  );
}