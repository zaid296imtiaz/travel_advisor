// List.jsx
import React, { useState, useEffect, createRef } from "react";
import {
  Typography,
  CircularProgress,
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import {
  StyledContainer,
  StyledList,
  StyledFormControl,
  StyledLoadingBox,
} from "./styles"; // import the styled components
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = ({ places, childClicked, isLoading, type, setType, rating, setRating }) => {
 

  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    const refs = Array(places?.length)
    .fill()
    .map((_, i) => elRefs[i] || createRef());

    setElRefs(refs);
  }, [places]);

  return (
    <StyledContainer>
      {" "}
      {/* Use the StyledContainer component */}
      <Typography variant="h4" component="h1" gutterBottom>
        Restaurants & Attractions near you
      </Typography>
      {isLoading ? (
        <StyledLoadingBox>
          <CircularProgress size="5rem" />
        </StyledLoadingBox>
      ) : (
        <>
          {" "}
          <StyledFormControl>
            {/* Select type */}
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              {/* <MenuItem value="hotels">Hotels</MenuItem> */}
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </StyledFormControl>
          {/* Select Rating */}
          <StyledFormControl>
            <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value="0">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
          </StyledFormControl>
          <Grid container spacing={3}>
            {places?.map((place, i) => (
              <Grid ref={elRefs[i]} item={i} xs={12}>
                <PlaceDetails
                  place={place}
                  selected={Number(childClicked) == i}
                  refProp={elRefs[i]}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </StyledContainer>
  );
};

export default List;
