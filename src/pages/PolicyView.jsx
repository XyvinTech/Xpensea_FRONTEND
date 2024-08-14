import { Box, Dialog, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import StyledButton from "../ui/StyledButton";
import { useParams } from "react-router-dom";
import { usePolicyStore } from "../store/policyStore";

const AdvancePayment = () => {
  const { id } = useParams();
  const { policy, fetchPolicyById } = usePolicyStore();
  const handleClear = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    if (id) {
      fetchPolicyById(id);
    }
  }, [id, fetchPolicyById]);

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
              {policy?.policyTitle}
            </Typography>
          </Grid>
          <Grid item md="4">
            {" "}
            <Stack direction={"row"} spacing={2}>
              <Typography variant="h3" color={"#79747E"}>
                Tier :
              </Typography>
              <Typography variant="h3"> {policy?.tier._id}</Typography>{" "}
            </Stack>
          </Grid>{" "}
          <Grid item md="4">
            {" "}
          </Grid>
          <Grid item md="4">
            <Stack direction={"row"} spacing={2}>
              <Typography variant="h3" color={"#79747E"}>
                User Type :
              </Typography>
              <Typography variant="h3"> {policy?.userType}</Typography>{" "}
            </Stack>
          </Grid>
          <Grid item md="4">
            {" "}
            <Stack direction={"row"} spacing={2}>
              <Typography variant="h3" color={"#79747E"}>
                Location :
              </Typography>
              <Typography variant="h3">{policy?.location}</Typography>{" "}
            </Stack>
          </Grid>{" "}
          <Grid item md="4">
            {" "}
          </Grid>
          <Grid item md="4">
            <Stack direction={"row"} spacing={2}>
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
              <Typography variant="h3">{policy?.policyDetails}</Typography>{" "}
            </Stack>
          </Grid>
          <Grid item md="12">
            <Stack spacing={2}>
              <Typography variant="h3" color={"#79747E"}>
                Accuracy
              </Typography>
              <Typography variant="h3">{policy?.accuracy}</Typography>{" "}
            </Stack>
          </Grid>
          <Grid item md="12">
            <Stack spacing={2}>
              <Typography variant="h3" color={"#79747E"}>
                Authenticity
              </Typography>
              <Typography variant="h3">{policy?.authenticity}</Typography>{" "}
            </Stack>
          </Grid>
          <Grid item md="12">
            <Stack spacing={2}>
              <Typography variant="h3" color={"#79747E"}>
                Compliance
              </Typography>
              <Typography variant="h3">{policy?.compliance}</Typography>{" "}
            </Stack>
          </Grid>
          <Grid item md="12">
            <Stack spacing={2}>
              <Typography variant="h3" color={"#79747E"}>
                Relevance
              </Typography>
              <Typography variant="h3">{policy?.relevance}</Typography>{" "}
            </Stack>
          </Grid>
          <Grid item md="12">
            <Stack spacing={2}>
              <Typography variant="h3" color={"#79747E"}>
                Completeness
              </Typography>
              <Typography variant="h3">{policy?.completeness}</Typography>{" "}
            </Stack>
          </Grid>
          <Grid item md={6} sm={6}></Grid>
          {/* {isUpdate && <Grid item md={6} sm={6}></Grid>} */}
          <Grid item md={6} sm={6}>
            {/* <Stack direction="row" spacing={2} justifyContent="flex-end">
              {" "}
              <StyledButton
                variant="primary"
                padding="15px 50px 15px 50px"
                name="Edit"
              />
            </Stack> */}
          </Grid>
        </Grid>{" "}
      </Box>
    </>
  );
};

export default AdvancePayment;
