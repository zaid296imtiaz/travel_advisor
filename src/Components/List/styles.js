// styles.js
import { styled } from '@mui/material/styles';
import { FormControl, Select, Box } from '@mui/material';

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 120,
  marginBottom: '30px',
}));

export const StyledSelectEmpty = styled(Select)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export const StyledLoadingBox = styled(Box)(({ theme }) => ({
  height: '600px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const StyledContainer = styled(Box)(({ theme }) => ({
  padding: '25px',
  height: '100vh',
  overflow: 'auto'
}));

export const StyledMarginBottomBox = styled(Box)({
  marginBottom: '30px',
});

export const StyledList = styled(Box)({
  height: '75vh',
  overflow: 'auto',
});
