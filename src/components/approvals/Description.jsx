import { Stack, Typography } from "@mui/material";
import React from "react";

const Description = ({data}) => {
  return (
    <Stack spacing={1} bgcolor={"#fff"} borderRadius={"12px"}minHeight={'230px'}>
      <Typography
        bgcolor="#FFF7F3"
        padding={3}
        color={"#79001D"}
        variant="h3"
        fontWeight={600}
      >
        Description
      </Typography>{data && (
      <Typography padding={3} color={"#353434"} variant="h3">
         {data}
      </Typography>)}
    </Stack>
  );
};

export default Description;
