import React from 'react'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material'

function MuiBreadcrumbs() {
    return (
        <Box m={2}>
            <Breadcrumbs aria-label="Breadcrumb">
                <Link underline="hover" href="#">Home</Link>
                <Link underline="hover" href="#">Catalogue</Link>
                <Link underline="hover" href="#">Accessories</Link>
                <Typography color="purple">Shoes</Typography>
            </Breadcrumbs>
        </Box>
    )
}

export default MuiBreadcrumbs