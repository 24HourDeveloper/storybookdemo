import React from 'react'
import { Button } from '@material-ui/core';
import './iconWithText.css'


export default function IconWithText({ icon, text}) {
  return (
    <Button variant="contained" style={{width: '100%', borderRadius: 0, padding:0, backgroundColor:'orange'}} disableElevation>
      <div className="sidebar-button">
        {icon}
        <h3 className="text-padding">{text}</h3>
      </div>
    </Button>
  )
}
