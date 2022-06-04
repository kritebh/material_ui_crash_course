import React from 'react'
import { Stack, Progress ,CircularProgress,LinearProgress} from '@mui/material'

function MuiProgress() {
  return (
   <Stack spacing={2} >
        <CircularProgress color="success" />
        <CircularProgress color="secondary" />
        <CircularProgress color="secondary" variant='determinate' value={60} />
        <LinearProgress color="success" />
        <LinearProgress color="secondary" />
        <LinearProgress color="secondary" variant='determinate' value={60} />
   </Stack>
  )
}

export default MuiProgress