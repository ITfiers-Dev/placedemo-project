import React from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { AppBar,Toolbar,Box,Typography,InputBase } from '@mui/material'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { HeaderStyle } from './styles';
const Headre = () => {
  return (

    <HeaderStyle position='static'>
    
<Toolbar className="toolbar">
<Typography variant='h5' className='title'>
Travel Advisor
</Typography>
<Box display="flex">
<Typography variant='h5' className='title'>
  exploprte new places
</Typography>
{/* <Autocomplete> */}
  <div className="search">
    <div className='searchIcon'>
      <SearchRoundedIcon/>
    </div>
    <InputBase placeholder='Search...' classes={{ root:'inputRoot', input:'inputINput'}}  />
  </div>
{/* </Autocomplete> */}
</Box>
</Toolbar>
    
    </HeaderStyle>)
}

export default Headre