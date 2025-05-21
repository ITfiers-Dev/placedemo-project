import React from 'react'
import {Box,Typography,Card,Button,CardMedia,CardContent,CardActions,Chip} from "@mui/material"
import LocationPinIcon from '@mui/icons-material/LocationPin';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Rating from '@mui/material/Rating'
const PlaceDetails = ({place}) => {
  return (
    <Card elevation={6}>
      <CardMedia style={{height:350}}
      image={place.photo?place.photo.images.large.url:"image url"}
      title={place.name}/>

<CardContent>
  <Typography gutterBottom variant='h5'>{place.name}</Typography>
  <Box display="felx" justifyContent="space-between">
  <Rating  value={Number(place.rating)} readOnly/>
    <Typography variant='subtitle1' gutterBottom>out of {place.num_reviews} revewies</Typography>
  </Box>
  <Box display="felx" justifyContent="space-between">
    <Typography variant='subtitle1'>price</Typography>
    <Typography variant='subtitle1' gutterBottom>{place.price_level}</Typography>
  </Box>

  <Box display="felx" justifyContent="space-between">
    <Typography variant='subtitle1'>Ranking</Typography>
    <Typography variant='subtitle1' gutterBottom>{place.ranking}</Typography>
  </Box> 
  {place?.awards?.map((award)=>{
<Box my={1} display="flex" justifyContent="center">
  <img src={award.images.small} alt={award.display_name}/>
  <Typography variant="subtitle2" color='textSecondary'>{award.display_name}</Typography>
</Box>
  })}
  {place?.cuisine?.map(({name})=>{
    <Chip key={name} size='small' label={name} margin='5px 5px 5px 0'/>
  })}
  {place?.address &&(
    <Typography gutterBottom variant='subtitle2' color='textSecondary'  display='flex' alignItems='center' justifyContent='space-between' marginTop='10px'>
      <LocationPinIcon/>{place.address}
    </Typography>
  )}

{place?.phone &&(
    <Typography gutterBottom variant='subtitle2' color='textSecondary' display='flex' alignItems='center' justifyContent='space-between'>
      <LocalPhoneIcon/>{place.phone}
    </Typography>
  )}
  <CardActions>
    <Button size='small' color='primary' onClick={()=>window.open(place.web_url,"_blank")}>Trip Advisor</Button>

    <Button size='small' color='primary' onClick={()=>window.open(place.website,"_blank")}>Website</Button>
  </CardActions>
</CardContent>
    </Card>
  )
}

export default PlaceDetails