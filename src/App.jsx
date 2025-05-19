import React from "react";
import Headre from "./compomemts/Header/Headre.jsx";
import List from "./compomemts/List/List.jsx";
import Map from "./compomemts/Map/Map.jsx";
import PlaceDetails from "./compomemts/PlaceDetails/PlaceDetails.jsx";

import { CssBaseline, Grid } from "@mui/material";
const App = () => {
  return (
    <>
      <Headre />

      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={4}>
          <Map />
        </Grid>
        {/* <Grid item xs={12} md={4}>
          <PlaceDetails />
        </Grid> */}
      </Grid>
    </>
  );
};

export default App;
