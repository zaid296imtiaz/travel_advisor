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

const Map = ({ setCoordinates, setBounds, coordinates }) => {
  // const classes = useStyles();
  const isMobile = useMediaQuery("(min-width: 600px)");

  return (
    <StyledMapContainer>
      {" "}
      {/* Use the StyledMapContainer component */}
      {/* Map implementation would go here */}
      {/* For example, a marker might look like this: */}
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB7m5Z3fCcjQB8j-VdhmjIrKwYpSlk0FNo" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
        }}
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
