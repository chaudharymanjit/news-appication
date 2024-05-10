import React from 'react'
import "./../App.css"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Navbar = () => {
  return (
    <div
      className='nav'
    >
      <div>Manage School News</div>
      <div>
        <Stack spacing={2} direction="row">
          <Button variant="contained" color='info'>Add</Button>
          <Button variant="contained" color='info'>Publish</Button>
          <Button variant="contained" color='error'>Archive</Button>
          <Button variant="contained" color='error'>Delete</Button>
        </Stack>
      </div>
    </div>
  )
}

export default Navbar