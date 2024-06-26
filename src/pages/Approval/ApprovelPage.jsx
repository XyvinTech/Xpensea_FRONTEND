import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import StaffDetails from "../../components/approvals/StaffDetails";
import StyledButton from "../../ui/StyledButton";
import { GtIcon } from "../../assets/icons/GtIcon";
import Details from "../../components/approvals/Details";
import Description from "../../components/approvals/Description";
import Expenses from "../../components/approvals/Expenses";
import LiveLocation from "../../components/approvals/LiveLocation";
import RejectedForm from "../../components/approvals/RejectedForm";

const ApprovalPage = () => {
  const [rejectOpen, setRejectOpen] = useState(false);

  const handleOpenReject = () => {
    setRejectOpen(true);
  };

  const handleCloseReject = () => {
    setRejectOpen(false);
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={12}
          bgcolor={"#F7F7F7"}
          borderBottom={"1px solid rgba(0, 0, 0, 0.05)"}
        >
          <Stack direction={"row"} justifyContent={"space-between"} padding={2}>
            <Box display="flex" alignItems="center">
              <Typography variant="h11" marginRight={1}>Approvals</Typography>
              <GtIcon />
              <Typography variant="h11" marginLeft={1}>Report</Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              width="30%"
              gap={2}
            >
              <StyledButton variant="green" name="Approve" />
              <StyledButton
                variant="danger"
                name="Reject"
                onClick={handleOpenReject}
              />
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <StaffDetails />
        </Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={6}>
          <Details />
        </Grid>
        <Grid item xs={12} md={6}>
          <Description />
        </Grid>
        <Grid item xs={12} md={12}>
          <Expenses />
        </Grid>
        <Grid item xs={12} md={6}>
          <LiveLocation />
        </Grid>
        <RejectedForm open={rejectOpen} onClose={handleCloseReject} />
      </Grid>
    </>
  );
};

export default ApprovalPage;
