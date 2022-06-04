import React,{useState} from 'react'
import {Stack ,Autocomplete,TextField} from '@mui/material'

const skills = ['HTML','CSS','Javascript','React','ExpressJS','MongoDB','ReactJS','Nodejs']

function MuiAutocomplete() {
    const [value,setValue] = useState(null)
    console.log(value)
  return (
    <Stack spacing={2} width="250px">
        <Autocomplete options={skills} value={value} onChange={(e,newValue)=>setValue(newValue)} renderInput= {(params)=><TextField {...params} label="skills"/>} />
    </Stack>
  )
}

export default MuiAutocomplete