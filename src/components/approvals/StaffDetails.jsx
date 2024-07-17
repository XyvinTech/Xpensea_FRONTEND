import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const StaffDetails = ({ data }) => {
  return (
    <Stack spacing={1} bgcolor={"#fff"} borderRadius={"12px"}>
      <Typography
        bgcolor="#FFF7F3"
        padding={3}
        color={"#79001D"}
        variant="h3"
        fontWeight={600}
      >
        Staff Details
      </Typography>
      {data && (
        <Stack
          padding={2}
          paddingTop={0}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Stack spacing={2}>
            <Typography variant="h11">{data?.user}</Typography>
            <Typography variant="h3">Employee ID : {data?.employeeId}</Typography>
            <Typography variant="h3" sx={{width:'50%'}}>
              {" "}
              Tier
              <Box component="span" sx={{ ml: 10 }}>
                :
              </Box>
              {data?.tier}
            </Typography>
            <Typography variant="h3">
              Location
              <Box component="span" sx={{ ml: 4 }}>
                :
              </Box>{" "}
              {data?.location}
            </Typography>
          </Stack>
          <Stack spacing={2} justifyContent="center">
            <Typography variant="h3" color={"#79001D"}>
            {data?.reportId}
            </Typography>
            <Typography variant="h4" color={"#B4B4B4"}>
            {data?.reportDate}
            </Typography>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default StaffDetails;
