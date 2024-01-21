// Map.jsx
import React from "react";
import { Typography, Paper, useMediaQuery, Rating } from "@mui/material";
import {
  StyledMapContainer,
  StyledMarkerContainer,
  StyledPointer,
} from "./styles"; // import the styled components
import GoogleMapReact from "google-map-react";
import { LocationOnOutlined } from "@mui/icons-material";

const Map = () => {
  // const classes = useStyles();
  const isMobile = useMediaQuery("(min-width: 600px)");

  const coordinates = { lat: 0, lng: 0 };

  return (
    <StyledMapContainer>
      {" "}
      {/* Use the StyledMapContainer component */}
      <Typography variant="h4" component="h1" gutterBottom>
        Map
      </Typography>
      {/* Map implementation would go here */}
      {/* For example, a marker might look like this: */}
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB7m5Z3fCcjQB8j-VdhmjIrKwYpSlk0FNo" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMapReact>
      <StyledMarkerContainer tainer>
        <StyledPointer>
          {" "}
          {/* Use the StyledPointer component */}
          {/* Marker content goes here */}
        </StyledPointer>
      </StyledMarkerContainer>
    </StyledMapContainer>
  );
};

export default Map;
