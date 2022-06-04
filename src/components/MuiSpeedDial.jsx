import React,{useState} from 'react'

import {SpeedDial,SpeedDialAction,SpeedDialIcon} from '@mui/material'
import FileCopyIcon from '@mui/icons-material/FileCopy';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
function MuiSpeedDial() {
  return (
    <SpeedDial ariaLabel='Navigation Speed Dial' sx={{position:'absolute',bottom:16,left:16}} icon={<SpeedDialIcon/>} >
        <SpeedDialAction icon={<FileCopyIcon/>} tooltipTitle='Copy'/>
        <SpeedDialAction icon={<PrintIcon/>} tooltipTitle='Print'/>
        <SpeedDialAction icon={<ShareIcon/>} tooltipTitle='Share'/>
    </SpeedDial>
  )
}

export default MuiSpeedDial