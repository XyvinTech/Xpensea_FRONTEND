import { Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const PaymentDetails = ({ data ,amount}) => {
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
            <Typography variant="h3">
              Amount paid : {data?.amount}
            </Typography>{" "}
            <Typography variant="h3">Pending : {amount===0? 'Nil':amount}</Typography>
          </Stack>
        </Grid>
        <Grid item md={4} xs={6}>
          <Stack spacing={2}>
            {" "}
            <Typography variant="h3">Paid on :{data?.deductOn}</Typography>{" "}
            <Typography variant="h3">Paid by : {data?.deductBy}</Typography>
          </Stack>
        </Grid>
        <Grid item md={4} xs={6}>
          <Stack spacing={2}>
            {data?.mode && (
              <Typography variant="h3">
                Payment method : Deduct From {data?.mode}
              </Typography>
            )}
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default PaymentDetails;
