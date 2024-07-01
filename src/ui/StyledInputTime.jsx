import React, { useState } from "react";
import { FormControl, InputAdornment, IconButton, Box, Popover } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

const StyledInputTime = ({ placeholder, startIcon, endIcon, onChange }) => {
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [anchorEl, setAnchorEl] = useState(null);

  const handleTimeChange = (newTime) => {
    setSelectedTime(newTime);
    if (onChange) onChange(newTime);
  };

  const handleIconClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'time-picker-popover' : undefined;

  return (
    <FormControl sx={{ width: "100%" }} variant="outlined">
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <OutlinedInput
          type="text"
          value={`${selectedTime.getHours() % 12 || 12}:${selectedTime.getMinutes().toString().padStart(2, '0')} ${selectedTime.getHours() >= 12 ? 'PM' : 'AM'}`}
          placeholder={placeholder}
          startAdornment={
            startIcon ? (
              <InputAdornment position="start" sx={{ marginLeft: "12px" }}>
                {startIcon}
              </InputAdornment>
            ) : null
          }
          endAdornment={
            <InputAdornment position="end" sx={{ marginRight: "12px", cursor: "pointer" }}>
              <IconButton onClick={handleIconClick}>
                {endIcon ? endIcon : <AccessTimeIcon />}
              </IconButton>
            </InputAdornment>
          }
          sx={{
            width: "100%",
            padding: "3px",
            backgroundColor: "#ffffff",
            borderRadius: "5px",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "1px solid rgba(0, 0, 0, 0.2)",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(0, 0, 0, 0.2)",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(0, 0, 0, 0.2)",
            },
            "& .MuiInputBase-input": {
              color: "",
              padding: "14px",
            },
            "& input::placeholder": {
              color: "#000000",
              fontWeight: "500",
            },
          }}
          readOnly
        />
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <DateTimePicker
            value={selectedTime}
            onChange={handleTimeChange}
            disableClock={false}
            format="h:mm a"
          />
        </Popover>
      </Box>
    </FormControl>
  );
};

export default StyledInputTime;
