import React, {useState} from 'react';
import {Box, Typography, SwipeableDrawer, Button, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArticleIcon from '@mui/icons-material/Article';
import PublicIcon from '@mui/icons-material/Public';
import DoneIcon from '@mui/icons-material/Done';

import { useNavigate } from 'react-router-dom';

// This function Creates the Side Drawer
export default function SideDrawer() {

  const navigate = useNavigate();  // To navigate
  const [state, setState] = useState({ left: false,});

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, height: '100%' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ListItem disablePadding onClick={()=> navigate('/dashboard')}>
        <ListItemButton>
            <Typography variant='h5' style={{alignSelf:'center', textAlign:'center',  paddingTop: 20}}>Go to Main Menu</Typography>
        </ListItemButton>
      </ListItem>
      <Divider style={{borderWidth: 1}}/>

      <Typography variant='h5' style={{alignSelf:'center', textAlign:'center',  paddingTop: 20}}>API's</Typography>
      <Divider style={{borderWidth: 1}}/>
      <List>
        <ListItem disablePadding onClick={()=> navigate('/dashboard/newsmainpage')}>
            <ListItemButton>
                <ListItemIcon>
                    <ArticleIcon />
                </ListItemIcon>
                <ListItemText primary="News" />
            </ListItemButton>
        </ListItem>

        <ListItem disablePadding onClick={()=> navigate('/dashboard/currencyconverter')}>
            <ListItemButton>
                <ListItemIcon>
                    <AttachMoneyIcon />
                </ListItemIcon>
                <ListItemText primary="Currency Converter" />
            </ListItemButton>
        </ListItem>

        <ListItem disablePadding onClick={()=> navigate('/dashboard/countryinfo')}>
            <ListItemButton>
                <ListItemIcon>
                    <PublicIcon />
                </ListItemIcon>
                <ListItemText primary="Country Information" />
            </ListItemButton>
        </ListItem>
      </List>


      <Typography variant='h5' style={{alignSelf:'center', textAlign:'center',  paddingTop: 20}}>Widgets</Typography>
      <Divider />
      <ListItem disablePadding onClick={()=> navigate('/dashboard/checklist')}>
            <ListItemButton>
                <ListItemIcon>
                    <DoneIcon />
                </ListItemIcon>
                <ListItemText primary="To Do List" />
            </ListItemButton>
      </ListItem>

    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('left', true)}><MenuIcon style={{marginTop:10, fontSize: 40}} /></Button>
      <SwipeableDrawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {list('left')}
      </SwipeableDrawer>
    </div>
  );
}
