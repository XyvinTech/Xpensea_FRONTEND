import { Divider, Stack, Typography } from "@mui/material";
import React from "react";

const Description = ({ data }) => {
  return (
    <Stack
      spacing={1}
      bgcolor={"#fff"}
      borderRadius={"12px"}
      minHeight={"230px"}
    >
      <Typography padding={3} color={"#002B9B"} variant="h3" fontWeight={600}>
        Description
      </Typography>
      <Divider sx={{ width: "100%" }} />
      {data && (
        <Typography padding={3} color={"#353434"} variant="h3">
          {data}
        </Typography>
      )}
    </Stack>
  );
};

export default Description;
