import React from 'react'
import { GoogleMap,useJsApiLoader } from '@react-google-maps/api'
import { Paper,Typography,useMediaQuery } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import Rating from '@mui/material';
import { MapStyle } from './styles';
const Map = () => {
  const isMobile=useMediaQuery('(min-width:600px)')
  const coordinates={lat:0,lng:0}  
  return (
    <MapStyle>
<div className='mapContainer'>
  <GoogleMap bootstrapURLKeys={{key:""}} defaultCenter={coordinates} center={coordinates} defaultZoom={14} margin={[50,50,50,50]}
  options={''} onChange={''} onChildClick={''} >mashAllah</GoogleMap>
</div>
    </MapStyle>
  )
}

export default Map