import React,{useState} from 'react'
import {AppBar,Toolbar,IconButton,Typography,Stack,Button,Menu,MenuItem} from '@mui/material'
import { CatchingPokemon,KeyboardArrowDown } from '@mui/icons-material'

function MuiNavbar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

  return (
    <AppBar position="static">
        <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label='logo'>
                <CatchingPokemon/>
            </IconButton>
            <Typography variant='h6' sx={{flexGrow:1}}>Pokemon App</Typography>
            <Stack direction="row" spacing={2}>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Pricing</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit" id="resources-button" onClick={handleClick} endIcon={<KeyboardArrowDown/>}>Resources</Button>
                <Button color="inherit">Login</Button>
            </Stack>
            <Menu id="resources-menu" anchorEl={anchorEl} open={open} MenuListProps={{'aria-labelledby':'resources-button'}} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Blog</MenuItem>
                <MenuItem onClick={handleClose}>Podcast</MenuItem>
            </Menu>
        </Toolbar>
    </AppBar>
  )
}

export default MuiNavbar