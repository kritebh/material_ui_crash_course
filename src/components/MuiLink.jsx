import React from 'react'
import {Stack ,Link} from '@mui/material'

function MuiLink() {
  return (
    <Stack spacing={2} direction="row" m={4}>
        <Link href="#" color="inherit">Home</Link>
    </Stack>
  )
}

export default MuiLink