import React,{useState} from 'react'
import { Box, Drawer, Typography,IconButton } from '@mui/material'
import {Menu} from '@mui/icons-material'

function MuiDrawer() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
      <>
      <IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={()=>setIsDrawerOpen(true)}>
          <Menu></Menu>
      </IconButton>
    <Drawer anchor="left" open={isDrawerOpen} onClose={()=>setIsDrawerOpen(false)}>
        <Box p={2} width='250px' textAlign='center' role='presentation'>
            <Typography variant='h6'>Side Panel</Typography>
        </Box>
    </Drawer>
      </>
  )
}

export default MuiDrawer