import React,{useState} from 'react'
import {Stack,Rating} from "@mui/material"


function MuiRatings() {

    const [value,setValue] = useState(null)

    function handleChange(e,newValue){
        setValue(newValue)
    }
    console.log(value)

  return (
    <Stack spacing={2} >
        <Rating value={value} onChange={handleChange} precision={0.5} />
    </Stack>
  )
}

export default MuiRatings