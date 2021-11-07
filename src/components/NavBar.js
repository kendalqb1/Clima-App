import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="success">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Clima App
                </Typography>
            </Toolbar>
        </AppBar>
        </Box>
    )
}
