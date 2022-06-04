import React from 'react'
import {Stack,Chip,Avatar} from '@mui/material'

function MuiChip() {
  return (
    <>
    <Stack direction='row' spacing={1}>
        <Chip label='Chip' color="primary" size="large"  />
        <Chip label='Chip Outlined' color="secondary" size="large" variant="outlined" avatar={<Avatar>V</Avatar>} />
    </Stack>
    </>
  )
}

export default MuiChip