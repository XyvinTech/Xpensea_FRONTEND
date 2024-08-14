import { Slider } from "@mui/material";
import React from "react";

const StyledSlider = ({value,onChange}) => {
  return (
    <div>
      <Slider
        value={value}
        onChange={onChange}
        sx={{
          "& .MuiSlider-thumb": {
            backgroundColor: "#002B9B",
            boxShadow: "0 0 2px 0px rgba(0, 0, 0, 0.1)",
            "&:focus, &:hover, &.Mui-active": {
              boxShadow: "0px 0px 3px 1px rgba(0, 0, 0, 0.1)",
            },
            "&:before": {
              boxShadow:
                "0px 0px 1px 0px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 1px 0px rgba(0,0,0,0.12)",
            },
          },
          "& .MuiSlider-track": {
            border: "none",
            backgroundColor: "#002B9B",
          },
          "& .MuiSlider-rail": {
            opacity: 0.5,
            boxShadow: "inset 0px 0px 4px -2px #000",
            backgroundColor: "#002B9B",
          },
        }}
      />
    </div>
  );
};

export default StyledSlider;

