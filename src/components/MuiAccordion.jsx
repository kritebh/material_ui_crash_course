import React from 'react'
import {Accordion,AccordionSummary,AccordionDetails,Typography} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'


function MuiAccordion() {
  return (
    <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id='panel1-header' aria-label="panel1-content">
            Accordion 1
        </AccordionSummary>
        <AccordionDetails>
            <Typography> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat mollitia blanditiis, enim dolorem consectetur quam.</Typography>
        </AccordionDetails>
    </Accordion>
  )
}

export default MuiAccordion