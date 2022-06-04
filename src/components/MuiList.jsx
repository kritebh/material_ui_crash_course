import React from 'react'
import { Box, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar,Divider } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

function MuiList() {
    return (
        <Box sx={{ width: '400px', bgcolor: '#efefef' }}>
            <List>
                <ListItem>
                    <ListItemIcon> 
                        <ListItemAvatar>
                            <Avatar>
                                <MailIcon />
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary='List item 1' />
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemText primary='List item 2' />
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemText primary='List item 3' />
                </ListItem>
            </List>
        </Box>
    )
}

export default MuiList