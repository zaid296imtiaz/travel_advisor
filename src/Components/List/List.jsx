// List.jsx
import React, { useState } from "react";
import {
  Typography,
  CircularProgress,
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { StyledContainer, StyledList, StyledFormControl } from "./styles"; // import the styled components
import PlaceDetails from '../PlaceDetails/PlaceDetails'

const List = ({places}) => {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  return (
    <StyledContainer>
      {" "}
      {/* Use the StyledContainer component */}
      <Typography variant="h4" component="h1" gutterBottom>
        Restaurants, Hotels & Attractions near you
      </Typography>
      <StyledFormControl>
        {/* Select type */}
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
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
        {places?.map((place, i) => (<Grid item={i} xs={12}>
          <PlaceDetails place={place}/>
        </Grid>))}
      </Grid>
      <StyledList>
        {" "}
        {/* Use the StyledList component */}
        {/* ... your list items here */}
      </StyledList>
    </StyledContainer>
  );
};

export default List;
