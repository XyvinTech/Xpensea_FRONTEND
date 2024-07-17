import React, { useState } from "react";
import {
  Box,
  Typography,
  Dialog,
  DialogContent,
  Divider,
  Stack,
} from "@mui/material";
import StyledButton from "../../ui/StyledButton";
import { CrossIcon } from "../../assets/icons/CrossIcon";
import location from "../../assets/images/location.png";
import receipt from "../../assets/images/receipt.png";
const ExpenseDetail = ({ open, onClose }) => {
  const handleSubmit = () => {
    console.log("clicked");
  };
  const handleClear = () => {
    onClose();
  };
  return (
    <Dialog open={open} onClose={onClose} maxWidth="481px">
      <DialogContent sx={{ height: "auto", width: "480px", padding: 0 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
          marginTop={"10px"}
          padding={3}
          paddingBottom={0}
        >
          <Typography variant="h11">Expense</Typography>
          <Typography onClick={handleClear} style={{ cursor: "pointer" }}>
            <CrossIcon />
          </Typography>
        </Box>
        <Divider />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          padding={2}
        >
          <Stack direction="row" spacing={1}>
            <Stack direction="column" spacing={1}>
              <Typography variant="h4" color={"#333333"}>
                Flower Expense
              </Typography>
              <Typography variant="h3" fontWeight={"600"} color={" #79001D"}>
                Rs 401
              </Typography>
            </Stack>
          </Stack>
          <Typography variant="h5" color={"#B4B4B4"} fontWeight={400}>
            Nov 19 2023
          </Typography>
        </Stack>
        <Divider />
        <Stack direction="column" padding={2} spacing={5}>
          <Stack direction={"row"} padding={2} bgcolor={"#F3F3F3"} spacing={2}>
            <img src={receipt} width={"68px"} height={"68px"} />
            <Stack direction="column" justifyContent={"center"}>
              <Typography variant="h4" fontWeight={600}>
                ImgQR25245-11/02/2024
              </Typography>
              <Typography variant="h5" fontWeight={400} color={"#B4B4B4"}>
                22kb
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Divider />
        <Stack padding={2}>
          <Typography variant="h4" fontWeight={400} color={"#353434"}>
            Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu Duis aute irure dolor in
            reprehen
          </Typography>
        </Stack>{" "}
        <Divider />
        <Stack direction="row" padding={2} spacing={2}>
          <img src={location} width={"100px"} height={"67px"} />

          <Typography variant="h4" color={"#838485"}>
            Flower Market 404 ,Aluva Ernakulam
          </Typography>
        </Stack>
      </DialogContent>

      <Stack direction="row" padding={2} spacing={2}>
        <StyledButton
          variant="green"
          name="Mark as Authentic"
          onClick={handleMarkAsAuthentic}
        />
        <StyledButton
          variant="danger"
          name="Mark as Faulty"
          onClick={handleMarkAsFaulty}
        />
      </Stack>
    </Dialog>
  );
};

export default ExpenseDetail;
