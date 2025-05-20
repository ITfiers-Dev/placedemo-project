import React from "react";
import Headre from "./compomemts/Header/Headre.jsx";
import List from "./compomemts/List/List.jsx";
import Map from "./compomemts/Map/Map.jsx";
import PlaceDetails from "./compomemts/PlaceDetails/PlaceDetails.jsx";

import { CssBaseline, Grid } from "@mui/material";
const App = () => {
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
          <Map />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
