import React, { useState } from 'react';
import PlaceDetails from "../PlaceDetails/PlaceDetails.jsx"
import {
  CircularProgress,
  Typography,
  InputLabel,
  MenuItem,
  Select,
  Grid
} from '@mui/material';
import {
  Container,
  StyledFormControl,
  Loading,
  ListWrapper
} from './styles';

const List = ({places,childClick}) => {
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  return (
    <Container>
      <Typography variant='h4'>
        Restaurants, Hotels & Attractions around you
      </Typography>

      <StyledFormControl>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value='restaurants'>Restaurants</MenuItem>
          <MenuItem value='hotels'>Hotels</MenuItem>
          <MenuItem value='attractions'>Attractions</MenuItem>
        </Select>
      </StyledFormControl>

      <StyledFormControl>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </StyledFormControl>
     <ListWrapper>
      <Grid container spacing={3} >
        {places?.map((place,i)=>(
        <Grid item key={i} xs={12} size={12}>
          <PlaceDetails place={place}/>
        </Grid>
        ))}
      </Grid>
      </ListWrapper>
    </Container>
  );
};

export default List;
