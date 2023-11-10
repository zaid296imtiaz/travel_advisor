// Map.jsx
import React from "react";
import { Typography } from '@mui/material';
import { StyledMapContainer, StyledMarkerContainer, StyledPointer } from './styles'; // import the styled components

const Map = () => {
    return(
        <StyledMapContainer> {/* Use the StyledMapContainer component */}
            <Typography variant="h4" component="h1" gutterBottom>
                Map
            </Typography>
            {/* Map implementation would go here */}
            {/* For example, a marker might look like this: */}
            <StyledMarkerContainer>
                <StyledPointer> {/* Use the StyledPointer component */}
                    {/* Marker content goes here */}
                </StyledPointer>
            </StyledMarkerContainer>
        </StyledMapContainer>
    )
}

export default Map;
