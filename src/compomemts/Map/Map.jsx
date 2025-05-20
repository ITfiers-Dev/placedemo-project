import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useMediaQuery } from '@mui/material';
import { StyledMapWrapper } from './styles'; // use appropriate names



const Map = () => {
  const isMobile = useMediaQuery('(min-width:600px)');
  const center = { lat: 0, lng: 0 };

  const containerStyle = {
    width: "100%",
    height: '85vh',
  };
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAl0nFosnEx3cdYlmSCyNvYX6VyVSfjxQM',
  });

  if (loadError) return <div style={{ color: 'red' }}>❌ Error loading Google Maps</div>;
  if (!isLoaded) return <div style={{ color: 'gray' }}>⏳ Loading Google Map...</div>;

  return (
    <StyledMapWrapper>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        margin={[50,50,50,50]}
        zoom={14}
      >

        </GoogleMap>
     </StyledMapWrapper>
  );
};

export default Map;
