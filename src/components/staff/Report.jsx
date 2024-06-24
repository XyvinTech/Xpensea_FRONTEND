import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { VerticalIcon } from "../../assets/icons/VerticalIcon";

const Report = () => {
  return (
    <Box bgcolor={"#fff"} height={"338px"}display={"flex"} alignItems={"center"} justifyContent={"center"}>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Stack
          direction={"row"}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h5">Total Report Submitted</Typography>
          <VerticalIcon />
          <Typography variant="h12" fontWeight={700}>
            65
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack
          direction={"row"}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h5">Total Report Reimbursed</Typography>
          <VerticalIcon />
          <Typography variant="h12" fontWeight={700}>
            21
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack
          direction={"row"}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h5">Total Report Rejected</Typography>
          <VerticalIcon />
          <Typography variant="h12" fontWeight={700}>
            22
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack
          direction={"row"}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h5">Total Report Pending</Typography>
          <VerticalIcon />
          <Typography variant="h12" fontWeight={700}>
            23
          </Typography>
        </Stack>
      </Grid>
    </Grid></Box>
  );
};

export default Report;
