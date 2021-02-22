import React from 'react'
import { Button , Avatar} from '@material-ui/core'

export default function UserAvatar() {
  return (
    <div style={{position:'fixed',
          top:0,
          right:0,
          display:'flex',
          flexDirection:'row',
          padding:20,
          alignItems:'center',
          width:220,
          zIndex:10}}>
          <Button>
            <Avatar  src="../assets/ttech.png" style={{height:45,width:45, marginRight:10}}  />
              <p>TTech</p>
            </Button>
        </div>
  )
}
