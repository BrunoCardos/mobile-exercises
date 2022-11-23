import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { red } from '@mui/material/colors';
import axios from "axios";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';





const dataUrl = '/persons';


export default function Confirmation(props) {
    const [open, setOpen] = React.useState(false);
    const [contacts, setContacts] = props.contactsState;

    const handleClickOpen = (e) => {
        setOpen(true);

    };

    function del(e) {


        axios.delete(dataUrl + '/' + props.id)
            .then(function (response) {
                // handle success
                contacts.splice(props.pos, 1);
                setContacts([...contacts]);;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });

            setOpen(false);

             function BasicAlerts() {
                return (
                  <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert variant="filled" severity="error">
                      This is an error alert — check it out!
                    </Alert>
                    <Alert variant="filled" severity="warning">
                      This is a warning alert — check it out!
                    </Alert>
                    <Alert variant="filled" severity="info">
                      This is an info alert — check it out!
                    </Alert>
                    <Alert variant="filled" severity="success">
                      This is a success alert — check it out!
                    </Alert>
                  </Stack>
                );
              }

              BasicAlerts()

            

    }


    const handleClose = () => {
        setOpen(false);
    };




    return (
        <div>
            <DeleteForeverIcon
                sx={{
                    marginLeft: 3,
                    color: red[500],
                    cursor: "pointer"
                }}

                onClick={(e) => handleClickOpen(e)}
            />
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Delete"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this contact?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>No</Button>
                    <Button onClick={del} autoFocus>
                        Yes, Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}