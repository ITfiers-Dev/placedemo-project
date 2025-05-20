import { styled } from "@mui/material/styles";

export const StyledMapWrapper = styled('div')(() => ({
  height: '85vh',
  width: '100%', 
}));

export const Paper = styled('div')(() => ({
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100px',
}));

export const MarkerContainer = styled('div')(() => ({
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  zIndex: 1,
  '&:hover': { zIndex: 2 },
}));

export const Pointer = styled('div')(() => ({
  cursor: 'pointer',
}));
