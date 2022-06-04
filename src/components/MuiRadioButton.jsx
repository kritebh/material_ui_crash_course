import React,{useState} from 'react'
import {Box,FormControl,FormLabel,FormControlLabel,RadioGroup,Radio} from '@mui/material'


function MuiRadioButton() {

    const [value,setValue] = useState('')

    function handleChange(e){
            setValue(e.target.value)
    }
    console.log(value);

  return (
    <Box>
        <FormControl>
            <FormLabel id="job-experience-group-label">
                Years Of Experience
            </FormLabel>
            <RadioGroup name="job-experience-group" aria-labelledby='job-experience-group-label' value={value} onChange={handleChange} row>
                <FormControlLabel control={<Radio />} label='0-2' value='0-2' />
                <FormControlLabel control={<Radio />} label='3-5' value='3-5' />
                <FormControlLabel control={<Radio />} label='6-10' value='6-10' />
            </RadioGroup>
        </FormControl>
    </Box>
  )
}

export default MuiRadioButton