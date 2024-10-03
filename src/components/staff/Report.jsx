import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { VerticalIcon } from "../../assets/icons/VerticalIcon";
import { useTransactionStore } from "../../store/transactionStore";

const Report = ({id}) => {
  const { fetchWallet, transaction } = useTransactionStore();
  useEffect(() => {
    fetchWallet(id);
  }, []);
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
           {transaction?.totalReportSubmitted}
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
          {transaction?.totalReportReimbursed}
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
          {transaction?.totalReportRejected}
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
          {transaction?.totalReportPending}
          </Typography>
        </Stack>
      </Grid>
    </Grid></Box>
  );
};

export default Report;
