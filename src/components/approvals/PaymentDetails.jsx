import { Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { ApproveIcon } from "../../assets/icons/ApproveIcon";

const PaymentDetails = ({ data }) => {
  return (
    <Stack
      bgcolor={"#fff"}
      borderRadius={"12px"}
      paddingBottom={4}
      minHeight={"200px"}
    >
      <Typography padding={3} color={"#002B9B"} variant="h3" fontWeight={600}>
        Payment Details
      </Typography>{" "}
      <Divider sx={{ width: "100%" }} />
      <Grid container padding={4}>
        <Grid item md={4}>
          <Stack spacing={2}>
            {" "}
            <Typography variant="h3">Amount paid : 10,000</Typography>{" "}
            <Typography variant="h3">Pending : Nil</Typography>
          </Stack>
        </Grid>
        <Grid item md={4}>
          <Stack spacing={2}>
            {" "}
            <Typography variant="h3">
              Paid on : Aug 01 2024 10:00AM
            </Typography>{" "}
            <Typography variant="h3">Paid by : Financer name</Typography>
          </Stack>
        </Grid>
        <Grid item md={4}>
          <Stack spacing={2}>
            {" "}
            <Typography variant="h3">
              Payment method : Deducted from wallet
            </Typography>{" "}
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default PaymentDetails;
