import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { Divider } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react";
import CallIcon from '@mui/icons-material/Call';
import MessageIcon from '@mui/icons-material/Message';
import { blue, green } from '@mui/material/colors';
import FormDialog from '../../Components/formDialog/FormDialog';
import Confirmation from '../../Components/confirmation/Confirmation';


axios.defaults.baseURL = 'http://127.0.0.1:3000/';




export default function Contact() {

   

    const [contacts, setContacts] = useState([]);
    const pathUrl = '/persons';


    useEffect(()=>{
        getPersons();
    }, []);

    function getPersons() {
        axios.get(pathUrl)
            .then(response => {
                // handle success
                console.log(response);
                setContacts(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

  

    
    return <>
        <List
            sx={{
                width: '100%',
                bgcolor: 'background.paper',
            }}
        >
            {contacts.map((contact, i) =>
                <Box key={i}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                             </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={contact.name}
                            secondary={contact.phone} />
                            <CallIcon
                            sx={{
                              margin: 2,
                              color: green[500],
                              cursor: "pointer"
                            }}
                            />
                            <MessageIcon
                              sx={{
                                marginLeft: 2,
                                color: blue[500],
                                cursor: "pointer"
                              }}
                            />
                            <Confirmation contactsState={[contacts, setContacts]} id={contact.id} pos={i} />
                            
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </Box>
            )}

   

        </List>
        <FormDialog contactsState={[contacts, setContacts]} />
    </>
}