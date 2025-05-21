import React, { useCallback, useEffect } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useMediaQuery } from "@mui/material";
import { StyledMapWrapper } from "./styles"; // use appropriate names
import { useRef, useState } from "react";
const Map = ({ setCordinates, setBounds, cordinates }) => {
  const isMobile = useMediaQuery("(min-width:600px)");

  const containerStyle = {
    width: "100%",
    height: "85vh",
  };
  
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "",
  });
  const mapRef = useRef(null);
  console.log(mapRef.current)
  function handleLoad(map) {
    mapRef.current = map;
    console.log(mapRef.current)
  }
 
  
  
  function handleIdle() {
    if (!mapRef.current) return;
    const newPos = mapRef.current.getCenter().toJSON();
    const newBounds = mapRef.current.getBounds().toJSON();
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
      ></GoogleMap>
    </StyledMapWrapper>
  );
};

export default Map;
