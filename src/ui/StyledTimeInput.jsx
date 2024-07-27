import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import React from "react";
import styled from 'styled-components';
import TextField from '@mui/material/TextField';

dayjs.extend(utc);

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
      border-color: rgba(0, 0, 0, 0.2);
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
  width: 100%;
`;

const StyledTimeInput = ({ value, onChange, placeholder, sx }) => {
  const handleTimeChange = (time) => {
   
    const formattedTime = time ? time.utc().format() : null;
    onChange(formattedTime);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledTimePicker
        label={placeholder}
        value={value ? dayjs(value).utc() : null}
        onChange={handleTimeChange}
        renderInput={(params) => <TextField {...params} sx={sx} />}
      />
    </LocalizationProvider>
  );
};

export default StyledTimeInput;
