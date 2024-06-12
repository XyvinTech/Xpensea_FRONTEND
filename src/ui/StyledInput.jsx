import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import React from "react";

const StyledInput = ({ placeholder }) => {
  return (
    <FormControl sx={{ width: "100%" }} variant="outlined">
      <OutlinedInput
        placeholder={placeholder}
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
            fontWeight:"500"
          },
          
        }}
      />
    </FormControl>
  );
};

export default StyledInput;
