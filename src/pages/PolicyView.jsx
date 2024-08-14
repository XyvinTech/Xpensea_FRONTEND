import { Box, Dialog, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import StyledButton from "../ui/StyledButton";

const AdvancePayment = () => {
  const handleClear = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Box p={4}>
        {" "}
        <Grid
          container
          spacing={4}
          padding={6}
          bgcolor={"white"}
          borderRadius={"12px"}
        >
          <Grid item md="12">
            <Typography variant="h3" fontWeight={500} textAlign={"center"}>
              Policy Name
            </Typography>
          </Grid>
          <Grid item md="4">
            {" "}
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography variant="h3" color={"#79747E"}>
                Tier :
              </Typography>
              <Typography variant="h3">Tier title</Typography>{" "}
            </Stack>
          </Grid>{" "}
          <Grid item md="4">
            {" "}
          </Grid>
          <Grid item md="4">
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography variant="h3" color={"#79747E"}>
                User Type :
              </Typography>
              <Typography variant="h3">Submitter</Typography>{" "}
            </Stack>
          </Grid>
          <Grid item md="4">
            {" "}
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography variant="h3" color={"#79747E"}>
                Location :
              </Typography>
              <Typography variant="h3">kochi</Typography>{" "}
            </Stack>
          </Grid>{" "}
          <Grid item md="4">
            {" "}
          </Grid>
          <Grid item md="4">
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography variant="h3" color={"#79747E"}>
                Requested on :
              </Typography>
              <Typography variant="h3">Admin name</Typography>{" "}
            </Stack>
          </Grid>
          <Grid item md="12">
            <Stack spacing={2}>
              <Typography variant="h3" color={"#79747E"}>
                Policy Details
              </Typography>
              <Typography variant="h3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur
              </Typography>{" "}
            </Stack>
          </Grid>
          <Grid item md={6} sm={6}></Grid>
          {/* {isUpdate && <Grid item md={6} sm={6}></Grid>} */}
          <Grid item md={6} sm={6}>
            <Stack direction="row" spacing={2} justifyContent="flex-end">
              {" "}
              <StyledButton
                variant="secondary"
                padding="15px 50px 15px 50px"
                name="Back"
                onClick={(event) => handleClear(event)}
              />
              <StyledButton
                variant="primary"
                padding="15px 50px 15px 50px"
                name="Edit"
              />
            </Stack>
          </Grid>
        </Grid>{" "}
      </Box>
    </>
  );
};

export default AdvancePayment;
