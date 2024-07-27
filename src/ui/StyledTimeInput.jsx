import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React from "react";
import styled from 'styled-components';
const StyledTimePicker = styled(TimePicker)`
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
    width:100%
`;
const StyledTimeInput = ({ value, onChange, placeholder, sx }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    
        {/* <TimePicker
          label="Uncontrolled picker"
          defaultValue={dayjs('2022-04-17T15:30')}
        /> */}
        <StyledTimePicker
          label={placeholder}
          value={dayjs(value)}
          sx={{width:'100%'}}
          onChange={onChange}
        />
    </LocalizationProvider>
  );
};

export default StyledTimeInput;
