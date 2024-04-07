// styles.js
import { styled } from '@mui/material/styles';
import { Paper, Box } from '@mui/material';

export const StyledPaper = styled(Paper)({
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100px',
});

export const StyledMapContainer = styled(Box)({
  height: '100%',
  width: '66.7%',
  position: 'fixed'
});

export const StyledMarkerContainer = styled(Box)({
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  zIndex: 1,
  '&:hover': { zIndex: 2 },
});

export const StyledPointer = styled(Box)({
  cursor: 'pointer',
});
