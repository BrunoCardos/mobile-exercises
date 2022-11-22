import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import PhoneIcon from '@mui/icons-material/Phone';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import Dial from '../../screen/dial/Dial';
import Contact from '../../screen/contact/Contact';
import MessageIcon from '@mui/icons-material/Message';
import Messages from '../../screen/messages/Messages';



export default function FixedBottomNavigation() {
  const [activeTab, setActiveTab] = React.useState(0);


  return (
    <Box sx={{ pb: 7 }}>

        
       {activeTab ==0 && <Dial />}
       {activeTab==1 && <Contact />}
       {activeTab==2 && <Messages />}

      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={activeTab}
          onChange={(event, newValue) => {
            setActiveTab(newValue);
          }}
        >
          <BottomNavigationAction label="Dial" icon={<PhoneIcon />} />
          <BottomNavigationAction label="Contacts" icon={<PermContactCalendarIcon />} />
          <BottomNavigationAction label="Messages" icon={<MessageIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

