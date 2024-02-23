// PlaceDetails.jsx
import React from "react";
import {
  Typography,
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@mui/material";
import { StyledSubtitle, StyledSpacing, StyledChip } from "./styles"; // import the styled components
import { LocationOnOutlined } from "@mui/icons-material";
import { Phone } from "@mui/icons-material";
import Rating from "@mui/material";

const PlaceDetails = ({ place }) => {
  return (
    <div>
      <Card elevation={6}>
        <CardMedia
          style={{ height: 350 }}
          image={
            place.photo
              ? place.photo.images.large.url
              : "https://media.cntraveler.com/photos/61e886f19580ae68b5219023/3:2/w_6399,h_4266,c_limit/Oji%20Seichi%20Toronto_Oji%20Food-Food%20Spread_Roberto%20Caruso.jpg"
          }
          title={place.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {place.name}
          </Typography>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Price</Typography>
            <Typography gutterBottom variant="subtitle1">
              {place.price_level}
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <StyledSubtitle>{/* Content for the subtitle */}</StyledSubtitle>
      <StyledSpacing>{/* Additional content with spacing */}</StyledSpacing>
      <StyledChip label="Example Chip" /> {/* Example usage of StyledChip */}
    </div>
  );
};

export default PlaceDetails;
