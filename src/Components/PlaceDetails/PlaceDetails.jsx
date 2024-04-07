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
  Rating,
} from "@mui/material";
import { StyledSubtitle, StyledSpacing, StyledChip } from "./styles"; // import the styled components
import { LocationOnOutlined } from "@mui/icons-material";
import { Phone } from "@mui/icons-material";

const PlaceDetails = ({ place, selected, refProp }) => {
  if (selected){
    console.log({selected, refProp})
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div>
      <Card elevation={0} style={{borderRadius: '1rem'}}>
        <CardMedia
          style={{ height: 350, borderRadius: '1rem' }}
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
            <Rating value={Number(place.rating)} readOnly />
            <Typography gutterBottom variant="subtitle1">
              out of {place.num_reviews} reviews
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Price</Typography>
            <Typography gutterBottom variant="subtitle1">
              {place.price_level}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <StyledSubtitle variant="subtitle1">Ranking</StyledSubtitle>
            <StyledSubtitle gutterBottom variant="subtitle1">
              {place.ranking}
            </StyledSubtitle>
          </Box>
          {place?.awards?.map((award) => (
            <Box
              my={1}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <img src={award.images.small} alt={award.display_name} />
              <StyledSubtitle variant="subtitle2" color="textSecondary">
                {" "}
                {award.display_name}
              </StyledSubtitle>
            </Box>
          ))}
          {place?.cuisine?.map(({ name }) => (
            <StyledChip key={name} size="small" label={name} />
          ))}
          {place?.address && (
            <StyledSubtitle gutterBottom variant="body2" color="textSecondary">
              <LocationOnOutlined /> {place.address}
            </StyledSubtitle>
          )}
          {place?.phone && (
            <StyledSubtitle gutterBottom variant="body2" color="textSecondary">
              <Phone /> {place.phone}
            </StyledSubtitle>
          )}
          <CardActions style={{justifyContent: 'flex-end', marginTop: '1rem'}}>
            <Button
              size="small"
              color="primary"
              style={{borderRadius: '0.5rem', backgroundColor: '#ebf8fc', padding: '5px 10px'}}
              onClick={() => window.open(place.web_url, "_black")}
            >
              Trip Advisor
            </Button>
            <Button
              size="small"
              color="primary"
              style={{borderRadius: '0.5rem', backgroundColor: '#ebf3fc', padding: '5px 10px'}}
              onClick={() => window.open(place.website, "_black")}
            >
              Website
            </Button>
          </CardActions>
        </CardContent>
        
      </Card>
      <hr/>
    </div>
  );
};

export default PlaceDetails;
