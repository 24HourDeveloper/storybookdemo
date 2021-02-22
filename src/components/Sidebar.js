import React from 'react'
import { Paper } from '@material-ui/core';
import './sidebar.css'


export default function Sidebar({logo, children}) {
  return (
    <Paper className="sidebar-container" elevation={3}>
      <div>
        {logo}
      </div>
      {children}
    </Paper>
  )
}
