import React, { useState } from "react";
import styled from "styled-components";
import { ExpandMoreIcon } from "../assets/icons/ExpandMoreIcon";
import StyledSlider from "../ui/StyledSlider";
import StyledTextField from "../ui/StyledTextField";
import { Stack } from "@mui/material";

const StyledSelect = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.div`
  padding: 10px 26px 10px 12px;
  font-size: 16px;
  background-color: white;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:focus {
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

const StyledMinMax = () => {
  const [open, setOpen] = useState(false);
  const [sliderValue, setSliderValue] = useState([20, 80]);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  return (
    <StyledSelect>
      <StyledInput onClick={handleToggle}>
        Amount
        <ExpandMoreIcon />
      </StyledInput>
      {open && (
        <>
          <StyledSlider value={sliderValue} onChange={handleSliderChange} />
          <Stack direction={"row"} spacing={2}>
            <StyledTextField label={"Min"} value={sliderValue[0]} />
            <StyledTextField label={"Max"} value={sliderValue[1]} />
          </Stack>
        </>
      )}
    </StyledSelect>
  );
};

export default StyledMinMax;
