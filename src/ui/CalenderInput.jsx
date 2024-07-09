import React from 'react';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import styled from 'styled-components';
import dayjs from 'dayjs'; // Ensure dayjs is imported

const StyledDatePicker = styled(DatePicker)`
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
  } width:100%
`;

const CalenderInput = ({ placeholder, dateValue, onDateChange,disabled }) => {
  // Ensure dateValue is initialized and valid
  const initialDate = dateValue ? dayjs(dateValue) : null;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledDatePicker
        value={initialDate} // Pass initialized date
        onChange={onDateChange}
        label={placeholder}
        inputVariant="outlined"disabled={disabled}
      />
    </LocalizationProvider>
  );
};

export default CalenderInput;
