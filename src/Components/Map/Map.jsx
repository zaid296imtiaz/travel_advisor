// Map.jsx
import React, {useState} from "react";
import { Typography, Paper, useMediaQuery, Rating } from "@mui/material";
import {
  StyledMapContainer,
  StyledMarkerContainer,
  StyledPointer,
  StyledPaper,
} from "./styles"; // import the styled components
import GoogleMapReact from "google-map-react";
import { LocationOnOutlined } from "@mui/icons-material";

const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked }) => {
  // const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width: 600px)");

  const mapStyles = [
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#193341"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#2c5a71"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#29768a"
          },
          {
              "lightness": -37
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#406d80"
          }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#406d80"
          }
      ]
  },
  {
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#3e606f"
          },
          {
              "weight": 2
          },
          {
              "gamma": 0.84
          }
      ]
  },
  {
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#ffffff"
          }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
          {
              "weight": 0.6
          },
          {
              "color": "#1a3541"
          }
      ]
  },
  {
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#2c5a71"
          }
      ]
  }
]

  return (
    <StyledMapContainer>
      {" "}
      {/* Use the StyledMapContainer component */}
      {/* Map implementation would go here */}
      {/* For example, a marker might look like this: */}
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{disableDefaultUI: true, zoomControl: true, styles: mapStyles}}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={child => {setChildClicked(child)}} 
      >
        {places?.map((place, i) => (
          <StyledMarkerContainer
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!isDesktop ? (
              <LocationOnOutlined color="primary" fontSize="large" />
            ) : (
              <StyledPaper elevation={3}>
                <Typography variant="subtitle2" gutterBottom>
                  {place.name}
                </Typography>
                <img
                  style={{ cursor: "pointer" }}
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://media.cntraveler.com/photos/61e886f19580ae68b5219023/3:2/w_6399,h_4266,c_limit/Oji%20Seichi%20Toronto_Oji%20Food-Food%20Spread_Roberto%20Caruso.jpg"
                  }
                  alt={place.name}
                />
                <Rating size="small" value={Number(place.rating)} readOnly />
              </StyledPaper>
            )}
          </StyledMarkerContainer>
        ))}
      </GoogleMapReact>
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
