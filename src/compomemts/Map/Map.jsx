import React, { useCallback, useEffect } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Paper, Rating, Typography, useMediaQuery } from "@mui/material";
import { StyledMapWrapper } from "./styles"; // use appropriate names
import { useRef, useState } from "react";
import { LocationCity, LocationOnOutlined } from "@mui/icons-material";
const Map = ({
  setCordinates,
  setBounds,
  cordinates,
  places,
  setChildClick,
}) => {
  const isDesktop = useMediaQuery("(min-width:600px)");

  const containerStyle = {
    width: "100%",
    height: "85vh",
  };

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "",
  });

  const mapRef = useRef(null);

  function handleLoad(map) {
    mapRef.current = map;
    console.log(mapRef.current);
  }

  function handleIdle() {
    if (!mapRef.current) return;
    //

    const newPos = mapRef.current.getCenter().toJSON();
    const newBounds = mapRef.current.getBounds().toJSON();
    console.log(newBounds);

    setBounds(newBounds);

    if (newPos.lat !== cordinates.lat || newPos.lng !== cordinates.lng) {
      setCordinates(newPos);
    }
  }

  if (loadError)
    return <div style={{ color: "red" }}>❌ Error loading Google Maps</div>;
  if (!isLoaded)
    return <div style={{ color: "gray" }}>⏳ Loading Google Map...</div>;

  return (
    <StyledMapWrapper>
      <GoogleMap
        mapContainerStyle={containerStyle}
        // defaultCenter={cordinates}
        center={cordinates}
        margin={[50, 50, 50, 50]}
        zoom={14}
        onLoad={handleLoad}
        onIdle={handleIdle}
        onChildClick={(child) => setChildClick(child)}
      >
        {places?.map((place, i) => {
          <div
            className="markerContainer"
            lat={Number(place.latitude)}
            lng={Number(place.lonitude)}
            key={i}
          >
            {!isDesktop ? (
              <LocationOnOutlined color="primary" fontSize="large" />
            ) : (
              <Paper elevation={3} className="paper">
                <Typography className="typography" variant="subtitle2">
                  {place.name}
                </Typography>
                <img
                  src={place.photo ? place.photo.images.large.url : "image url"}
                  alt={place.name}
                  className="pointer"
                />
                <Rating size="small" value={Number(place.rating)} readOnly />
              </Paper>
            )}
          </div>;
        })}
      </GoogleMap>
    </StyledMapWrapper>
  );
};

export default Map;
