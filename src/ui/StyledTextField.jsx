import React from 'react';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';


const CustomTextField = styled(({ ...props }) => <TextField {...props} />)`
  & .MuiInputBase-root {
    color: #000000; 
    background-color: #ffffff; 
  }
  & .MuiInputLabel-root {
    color: #79747E; 
    &.Mui-focused {
      color: #79747E; 
    }
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: rgba(0, 0, 0, 0.2)
    }
    &:hover fieldset {
      border-color: rgba(0, 0, 0, 0.2); 
    }
    &.Mui-focused fieldset {
      border-color: rgba(0, 0, 0, 0.2); 
    }
  }
  
  & .MuiInputBase-input::placeholder {
    color: #79747E; 
  }
`;

const StyledTextField = ({ label }) => {
  return (
    <CustomTextField
      fullWidth
      label={label}
      variant="outlined"
    />
  );
}

export default StyledTextField;