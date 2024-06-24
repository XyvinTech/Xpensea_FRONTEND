import { InputAdornment } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import React from "react";

const StyledInput = ({ placeholder, startIcon, endIcon, onChange  }) => {

  
  return (
    <FormControl sx={{ width: "100%" }} variant="outlined">
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
          <InputAdornment position="end" sx={{ marginRight: "12px" }}>
            {endIcon}
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
      onClick={() => document.getElementById("file-input").click()}
    />
    <input
      id="file-input"
      type="file"
      style={{ display: "none" }}
      onChange={onChange}
    />
  </FormControl>
  );
};

export default StyledInput;
