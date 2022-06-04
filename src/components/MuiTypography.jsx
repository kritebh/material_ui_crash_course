import {Typography} from '@mui/material'

function MuiTypography() {
  return (
    <div>
        <Typography variant="h1">Hello World</Typography>
        <Typography variant="h2">Hello World</Typography>
        <Typography variant="h3">Hello World</Typography>
        <Typography variant="h4" component="h1" gutterBottom>Hello World</Typography>
        <Typography variant="h5">Hello World</Typography>
        <Typography variant="h6">Hello World</Typography>

        <Typography variant="subtitle1">Hello World</Typography>
        <Typography variant="subtitle2">Hello World</Typography>

        <Typography variant="body1">Hello World</Typography>
        <Typography variant="body2">Hello World</Typography>
    </div>
  )
}

export default MuiTypography