// Header.jsx
import React from "react";
import { Box } from '@mui/material';
import { StyledAppBar, StyledToolbar, StyledTitle, StyledSearch, StyledSearchIcon, StyledInputBase } from './styles';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <StyledTitle variant="h5">
          Travel Advisor
        </StyledTitle>
        <Box display="flex" alignItems={"center"}>
          <StyledTitle variant="h6">
            Explore new places
          </StyledTitle>
          {/* <Autocomplete> */}
          <StyledSearch>
            <StyledSearchIcon>
              <SearchIcon />
            </StyledSearchIcon>
            <StyledInputBase
              placeholder="Search ..."
            />
          </StyledSearch>
          {/* </Autocomplete> */}
        </Box>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
