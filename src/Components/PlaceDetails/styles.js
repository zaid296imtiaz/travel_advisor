// styles.js
import { styled } from '@mui/material/styles';
import { Chip, Box } from '@mui/material';

export const StyledChip = styled(Chip)({
  margin: '5px 5px 5px 0',
});

export const StyledSubtitle = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '10px',
});

export const StyledSpacing = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
