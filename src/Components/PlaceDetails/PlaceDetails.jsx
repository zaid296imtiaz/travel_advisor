// PlaceDetails.jsx
import React from "react";
import { Typography } from '@mui/material';
import { StyledSubtitle, StyledSpacing, StyledChip } from './styles'; // import the styled components

const PlaceDetails = () => {
    return(
        <div>
            <Typography variant="h4" component="h1" gutterBottom>
                Place Details
            </Typography>
            <StyledSubtitle>
                {/* Content for the subtitle */}
            </StyledSubtitle>
            <StyledSpacing>
                {/* Additional content with spacing */}
            </StyledSpacing>
            <StyledChip label="Example Chip" /> {/* Example usage of StyledChip */}
        </div>
    )
}

export default PlaceDetails;
