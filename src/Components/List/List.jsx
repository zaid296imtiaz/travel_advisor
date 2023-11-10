// List.jsx
import React from "react";
import { Typography } from '@mui/material';
import { StyledContainer, StyledList } from './styles'; // import the styled components

const List = () => {
    return(
        <StyledContainer> {/* Use the StyledContainer component */}
            <Typography variant="h4" component="h1" gutterBottom>
                List
            </Typography>
            <StyledList> {/* Use the StyledList component */}
                {/* ... your list items here */}
            </StyledList>
        </StyledContainer>
    )
}

export default List;
