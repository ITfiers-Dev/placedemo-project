import React from "react";
import Headre from "./compomemts/Header/Headre.jsx";
import List from "./compomemts/List/List.jsx";
import Map from "./compomemts/Map/Map.jsx";
import PlaceDetails from "./compomemts/PlaceDetails/PlaceDetails.jsx";
import { useEffect ,useState} from "react";
import { CssBaseline, Grid } from "@mui/material";
import {getPlacesData} from "../src/api/index.js"
const App = () => {
const [places,setPlaces]=useState([]);
const [cordinates,setCordinates]=useState({});
const [bounds,setBounds]=useState({})
const [childClick,setChildClick]=useState(null)

useEffect(()=>{
  
  navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
    setCordinates({lat:Number(latitude),lng:Number(longitude)})

  })
},[])
console.log(bounds)
useEffect(()=>{
getPlacesData(bounds.south,bounds.north,bounds.east,bounds.west).then((data)=>{
 
  setPlaces(data)
})

  },[cordinates,bounds])
  
  return (
    <>
      <CssBaseline />
      <Headre />

      <Grid container spacing={2} >
        <Grid item xs={12} md={4} lg={4} size={4}>
          <List places={places} childClick={childClick}/>
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          lg={8}
          size={8}
          style={{
            
            display:"flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Map setCordinates={setCordinates} setBounds={setBounds}  cordinates={cordinates}  places={places} setCHildCick={setChildClick}
          />
          
        </Grid>
      </Grid>
    </>
  );
};

export default App;
