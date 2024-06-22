import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import StaffDetails from "../../components/approvals/StaffDetails";
import StyledButton from "../../ui/StyledButton";
import { GtIcon } from "../../assets/icons/GtIcon";
import Details from "../../components/approvals/Details";
import Description from "../../components/approvals/Description";
import Expenses from "../../components/approvals/Expenses";

const ApprovalPage = () => {
  return (
    <>
      <Grid container spacing={2} paddingTop={3}>
        <Grid
          spacing={2}
          item
          xs={12}
          md={12}
          bgcolor={"#F7F7F7"}
         borderBottom={"1px solid rgba(0, 0, 0, 0.05)"}
        >
          <Stack direction={"row"} justifyContent={"space-between"} padding={2}>
            <Typography variant="h11" fontWeight={600} color={"#333333"} > Approvals<span style={{margin:"10px"}}><GtIcon/></span> Report</Typography>
            <Box display="flex" justifyContent="space-between" width="30%" padding={3} gap={2}>
              <StyledButton variant="green" name="Approve"  />
              <StyledButton variant="danger" name="Reject"  />
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <StaffDetails />
        </Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={6}><Details/></Grid>
        <Grid item xs={12} md={6}><Description/></Grid>
        <Grid item xs={12} md={12}><Expenses/></Grid>
      </Grid>
    </>
  );
};

export default ApprovalPage;
