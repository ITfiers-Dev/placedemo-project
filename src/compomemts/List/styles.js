// styles.js
import { styled } from '@mui/material/styles';
import { FormControl } from '@mui/material';

export const Container = styled('div')(({ theme }) => ({
  padding: '25px',
}));

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 120,
  marginBottom: '30px',
}));

export const Loading = styled('div')(() => ({
  height: '600px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const ListWrapper = styled('div')(() => ({
  height: '75vh',
  overflow: 'auto',
}));
