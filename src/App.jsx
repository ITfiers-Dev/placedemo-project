import React from "react";
import Headre from "./compomemts/Header/Headre.jsx";
import List from "./compomemts/List/List.jsx";
import Map from "./compomemts/Map/Map.jsx";
import PlaceDetails from "./compomemts/PlaceDetails/PlaceDetails.jsx";
import { useEffect ,useState} from "react";
import { CssBaseline, Grid } from "@mui/material";
// import {getPlacesData} from "../src/api/index.js"
const App = () => {
const [places,setPlaces]=useState([]);
const [cordinates,setCordinates]=useState({lat:0,lng:0});
const [bounds,setBounds]=useState(null)
//   useEffect(()=>{
// getPlacesData().then((data)=>{
 
//   setPlaces(data)
// })

//   },[])
  console.log(bounds)
  console.log("app"+cordinates.lat)
  return (
    <>
      <CssBaseline />
      <Headre />

      <Grid container spacing={2} >
        <Grid item xs={12} md={4} lg={4} size={4}>
          <List />
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
          <Map setCordinates={setCordinates} setBounds={setBounds}  cordinates={cordinates}
         />
          
        </Grid>
      </Grid>
    </>
  );
};

export default App;
