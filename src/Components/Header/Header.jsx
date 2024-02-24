// Header.jsx
import React, {useState} from "react";
import { Box } from '@mui/material';
import { StyledAppBar, StyledToolbar, StyledTitle, StyledSearch, StyledSearchIcon, StyledInputBase } from './styles';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete } from "@react-google-maps/api";

const Header = ({setCoordinates}) => {

  const [autocomplete, setAutocomplete] = useState(null)

  const onLoad = (autoC) => setAutocomplete(autoC)

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat()
    const lng = autocomplete.getPlace().geometry.location.lng()

    setCoordinates({lat, lng})
  }

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
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <StyledSearch>
            <StyledSearchIcon>
              <SearchIcon />
            </StyledSearchIcon>
            <StyledInputBase
              placeholder="Search ..."
            />
          </StyledSearch>
          </Autocomplete>
        </Box>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
