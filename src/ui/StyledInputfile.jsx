import React from "react";
import { FormControl, InputAdornment, IconButton, Box } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";

const StyledInputFile = ({ placeholder, startIcon, endIcon, onChange }) => {
  const handleButtonClick = () => {
    document.getElementById('hiddenFileInput').click();
  };

  return (
    <FormControl sx={{ width: "100%" }} variant="outlined">
      <Box onClick={handleButtonClick} sx={{ display: 'flex', alignItems: 'center' }}>
        <OutlinedInput
          type="text"
          placeholder={placeholder}
          startAdornment={
            startIcon ? (
              <InputAdornment position="start" sx={{ marginLeft: "12px" }}>
                {startIcon}
              </InputAdornment>
            ) : null
          }
          endAdornment={
            endIcon ? (
              <InputAdornment position="end" sx={{ marginRight: "12px", cursor: "pointer" }}>
                <IconButton>
                  {endIcon}
                </IconButton>
              </InputAdornment>
            ) : null
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
        <input
          type="file"
          id="hiddenFileInput"
          style={{ display: 'none' }}
          onChange={onChange}
        />
      </Box>
    </FormControl>
  );
};

export default StyledInputFile;
