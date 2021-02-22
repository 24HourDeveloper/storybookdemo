import React from 'react'
import { Paper } from '@material-ui/core';
import './logoimage.css'
import ttech from '../assets/ttech2.png'

export default function LogoImage() {
  return (
    <Paper elevation={3} style={{textAlign:'center', borderRadius:0}}>
      <img alt="Logo" src={ttech} width="45%"/>
    </Paper>
  )
}
