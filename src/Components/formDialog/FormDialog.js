import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import axios from "axios";

const dataUrl = '/persons';


export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [nameInput, setNameInput] = React.useState('');
  const [phoneInput, setPhoneInput] = React.useState('');
  const [contacts, setContacts] = props.contactsState;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleSave() {
    let newContact = {
      "name": nameInput,
      "phone": phoneInput
    }

    axios.post(dataUrl, newContact)
      .then(function (response) {
        // handle success
        contacts.push(response.data);
        setContacts([...contacts]);;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

      setOpen(false);

      

  }




  return (
    <div>
      <Fab sx={{
        position: 'fixed',
        bottom: 70,
        right: 10
      }} onClick={handleClickOpen} size="medium" color="secondary" aria-label="add">
      <AddIcon />
        </Fab>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Contact</DialogTitle>
        <DialogContent>

          <TextField
            autoFocus
            margin="dense"
            id="nameInput"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => setNameInput(e.target.value)}

          />

          <TextField
            margin="dense"
            id="phoneInput"
            label="Phone Number"
            type="number"
            fullWidth
            variant="outlined"
            onChange={(e) => setPhoneInput(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}