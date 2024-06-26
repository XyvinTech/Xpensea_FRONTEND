import { InputAdornment } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import React from "react";

const StyledInput = ({ placeholder, startIcon, endIcon, value, type }) => {
  return (
    <FormControl fullWidth variant="outlined">
      <OutlinedInput
        type={type}
        placeholder={placeholder}
        value={value}
        startAdornment={
          startIcon ? (
            <InputAdornment position="start">
              {startIcon}
            </InputAdornment>
          ) : null
        }
        endAdornment={
          endIcon ? (
            <InputAdornment position="end" onClick={endIcon.props.onClick}>
              {endIcon}
            </InputAdornment>
          ) : null
        }
        sx={{
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(0, 0, 0, 0.2)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(0, 0, 0, 0.2)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(0, 0, 0, 0.2)',
          },
          '& .MuiInputBase-input': {
            padding: '14px',
          },
          '& input::placeholder': {
            color: '#000000',
            fontWeight: '500',
          },
        }}
      />
    </FormControl>
  );
};

export default StyledInput;
