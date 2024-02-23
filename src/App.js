import React, { useEffect, useState } from "react";

import { CssBaseline, Grid } from "@mui/material";

import Header from "./Components/Header/Header";
import Map from "./Components/Map/Map";
import List from "./Components/List/List";
import PlaceDetails from "./Components/PlaceDetails/PlaceDetails";

import { getPlacesData } from "./api";

const App = () => {
  const [places, setPlaces] = useState([]);

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    getPlacesData(bounds?.sw, bounds?.ne).then((data) => {
      setPlaces(data);
      console.log(data);
    });
  }, [coordinates, bounds]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude }, bounds}) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  return (
    <>
      <Header />
      <CssBaseline />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List places={places}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
