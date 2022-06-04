import React,{useState} from 'react'
import {Box,FormControlLabel,Checkbox,FormControl,FormLabel,FormGroup} from '@mui/material'

import { BookmarkBorder,Bookmark } from '@mui/icons-material'


function MuiCheckbox() {

    const [accept,setAccept] = useState(false)
    const [icon,setIcon] = useState(false)
    const [skills,setSkills] = useState([])

    function handleAccept(e){
        setAccept(e.target.checked)
    }

    function handleIcon(e){
        setIcon(e.target.checked)
    }

    function handleSkill(e){
        const index = skills.indexOf(e.target.value)
        if(index===-1){
            setSkills([...skills,e.target.value])
        }
        else{
            setSkills(skills.filter((skill)=>skill!== e.target.value))
        }
    }
    console.log(skills)

  return (
    <Box>
        <Box>
            <FormControlLabel label="I accept terms and conditions" control={<Checkbox checked={accept} onChange={handleAccept}  />}/>
        </Box>
        <Box>
            <Checkbox icon={ <BookmarkBorder/> } checkedIcon={<Bookmark/>} checked={accept} onChange={handleIcon}/>
        </Box>
        <Box>
            <FormControl>
                <FormLabel>Skills</FormLabel>
                <FormGroup>
                    <FormControlLabel label="HTML" value="HTML" control={<Checkbox checked={skills.includes("HTML")} onChange={handleSkill}  />}/>
                    <FormControlLabel label="CSS" value="CSS" control={<Checkbox checked={skills.includes("CSS")} onChange={handleSkill}  />}/>
                    <FormControlLabel label="Javascript" value="Javascript" control={<Checkbox checked={skills.includes("Javascript")} onChange={handleSkill}  />}/>
                </FormGroup>
            </FormControl>
        </Box>
    </Box>
  )
}

export default MuiCheckbox