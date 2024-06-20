import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const StaffDetails = () => {
  return (
    <Stack spacing={1} bgcolor={"#fff"} borderRadius={"12px"}>
      <Typography  bgcolor="#FFF7F3" padding={3} color={"#79001D"} variant="h3" fontWeight={600}>Staff Details</Typography>
      <Stack  padding={2} paddingTop={0}direction={"row"} justifyContent={"space-between"}>
        <Stack spacing={2}>
          <Typography variant="h11">Amal Davis T N</Typography>
          <Typography variant="h3">Employee ID : 78946548</Typography>
          <Typography variant="h3"> Tier No<Box component="span" sx={{ ml:6 }}>:</Box>Tier 033</Typography>
          <Typography variant="h3">Location<Box component="span" sx={{ ml:4 }}>:</Box> Alappuzha</Typography>
        </Stack>
        <Stack spacing={2}justifyContent="center">
          <Typography variant="h3" color={"#79001D"}>ApEx55213</Typography>
          <Typography variant="h4" color={"#B4B4B4"}>Nov 19 2023</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default StaffDetails;
