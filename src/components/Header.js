import React from 'react'
import SideDrawer from './Drawer'
import { Typography, Paper } from '@mui/material'

function Header() {
  return (
    <Paper style={{display: 'flex', flexDirection: 'row', backgroundColor:'#111827', marginBottom: 20}} elevation={5}>
        <SideDrawer style={{flex: 2, marginTop: 200}} />
        <Typography style={{flex:10, color:"whitesmoke", padding:10}} variant="h3"> Dashboard</Typography>
    </Paper>
  )
}

export default Header