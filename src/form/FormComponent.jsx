import React from 'react';
import { useState } from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const FormComponent = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  

  const handleClose = () => {
    setOpen(false);
  };


    const initialCompany = 'Godoro';

    const companyChanced = (e) => {
        e.preventDefault();
        // alert("Değişti" + e.target.value)
        setCompany(e.target.value);
    }

    const [company, setCompany] = useState(initialCompany);

    return (
        <>
        
         <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      Nesne :<TextField id="outlined-basic" label={company} variant="outlined"  onChange={companyChanced}/>
      Öz<TextField id="filled-basic" label={company} variant="filled" />
      <TextField id="standard-basic" label="Godoro" variant="standard" />
        <Button variant="outlined" onClick={handleClickOpen}>
       Sakla
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Katılmıyorum</Button>
          <Button onClick={handleClose}>Katılıyorum</Button>
        </DialogActions>
      </Dialog>
      
    </Box>
        
       
            
        
        </>
    )
}


