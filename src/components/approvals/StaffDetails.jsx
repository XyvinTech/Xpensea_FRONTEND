import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";

const StaffDetails = ({ data }) => {
  return (
    <Stack
      bgcolor={"#fff"}
      borderRadius={"12px"}
      alignItems={"flex-start"}
      justifyContent={"center"}
    >
      <Typography padding={3} color={"#002B9B"} variant="h3" fontWeight={600} >
        Staff Details
      </Typography>
      <Divider sx={{ width: "100%" }} />
      {data && (
        <Stack
          padding={2}
          direction={"row"}
          justifyContent={"space-between"}minHeight={'250px'}
        >
          <Stack spacing={2}>
            <Typography variant="h11">{data?.user}</Typography>
            <Typography variant="h3">
              Employee ID : {data?.employeeId}
            </Typography>
            <Typography variant="h3">
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
            <Typography variant="h3">
              Approver
              <Box component="span" sx={{ ml: 4 }}>
                :
              </Box>{" "}
              {data?.approver}
            </Typography>
          </Stack>
          {/* <Stack spacing={2} justifyContent="center">
            <Typography variant="h3" color={"#002B9B"}>
              {data?.reportId}
            </Typography>
            <Typography variant="h4" color={"#B4B4B4"}>
              {data?.reportDate}
            </Typography>
          </Stack> */}
        </Stack>
      )}
    </Stack>
  );
};

export default StaffDetails;
