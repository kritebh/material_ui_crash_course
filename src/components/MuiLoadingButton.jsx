import React from 'react'
import { LoadingButton } from '@mui/lab';
import {Stack} from '@mui/material'

function MuiLoadingButton() {
  return (
    <Stack spacing={2} direction="row">
        <LoadingButton variant="contained" color="primary">Submit</LoadingButton>
        <LoadingButton loading variant="contained" color="primary">Submit</LoadingButton>
    </Stack>
  )
}

export default MuiLoadingButton