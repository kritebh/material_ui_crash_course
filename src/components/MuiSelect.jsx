import {Box,TextField,MenuItem} from '@mui/material'
import {useState} from 'react'


function MuiSelect() {
    // const [country,setCountry] = useState("")
    const [country,setCountry] = useState([])

    function handleChange(e){
        setCountry(e.target.value)
    }
    console.log(country)
  return (
    <Box width="250px">
        <TextField label="Select Country" select value={country} onChange={handleChange} fullWidth SelectProps={{
            multiple:true
        }}>
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="AU">Australia</MenuItem>
            <MenuItem value="NP">Nepal</MenuItem>
        </TextField>
    </Box>
  )
}

export default MuiSelect