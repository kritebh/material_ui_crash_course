import React from 'react'
import { Box ,Stack,Divider,Grid,Paper} from '@mui/material'

function MuiBox() {
    return (
        <>
        <Paper sx={{padding:'32px'}}>

        </Paper>
            <Box sx={{
                backgroundColor: "purple",
                color: "white",
                height: "100px",
                width: "100px",
                padding: '16px'
            }}>
                Some text
            </Box>

            <Box display="flex" height="100px" width="100px" bgcolor="yellow" p={2}>

            </Box>

        </>
    )
}

export default MuiBox