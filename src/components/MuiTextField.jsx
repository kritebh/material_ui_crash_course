import {Stack,TextField,InputAdornment} from '@mui/material'
import {useState} from 'react'

function MuiTextField() {

    const [value,setValue] = useState("")

  return (
   <Stack spacing={4}>
       <Stack direction="row" spacing={2}>
            <TextField label="Name" />
            <TextField label="Name" variant="filled" />
            <TextField label="Name" variant="standard"/>
       </Stack>
       <Stack direction="row" spacing={2}>
           <TextField  label="Small secondary" size="small" color="secondary" />
       </Stack>
       <Stack direction="row" spacing={2}>
            <TextField label="Form Input" required  value={value} onChange={ (e) => setValue(e.target.value)} error={!value} helperText={!value?'required':""} />
            <TextField label="Password" type="password" helperText="Choose password wisely" />
            <TextField label="Password" type="password" helperText="Disabled Input Field" disabled/>
            <TextField label="Read Only" InputProps={{readOnly:true}} />
       </Stack>
       <Stack direction="row" spacing={2}>
           <TextField label="Amount" InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment> }} />
           <TextField label="Weight" InputProps={{endAdornment: <InputAdornment position="end">kg</InputAdornment> }} />
       </Stack>
   </Stack>
  )
}

export default MuiTextField