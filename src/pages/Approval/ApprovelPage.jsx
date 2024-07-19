import React, { useEffect, useState } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import StaffDetails from "../../components/approvals/StaffDetails";
import StyledButton from "../../ui/StyledButton";
import { GtIcon } from "../../assets/icons/GtIcon";
import Details from "../../components/approvals/Details";
import Description from "../../components/approvals/Description";
import Expenses from "../../components/approvals/Expenses";
import LiveLocation from "../../components/approvals/LiveLocation";
import RejectedForm from "../../components/approvals/RejectedForm";
import { useParams } from "react-router-dom";
import { useApprovalStore } from "../../store/approvalstore";
import ApproveComponent from "../../components/ApproveComponent";

const ApprovalPage = () => {
  const [rejectOpen, setRejectOpen] = useState(false);
  const [approveOpen, setApproveOpen] = useState(false);
  const [authenticExpenses, setAuthenticExpenses] = useState([]);
  const [rejectedExpenses, setRejectedExpenses] = useState([]);
  const [isChange, setIsChange] = useState(false);
  const { approval, fetchApprovalById, updateApprovals } = useApprovalStore();
  const { id } = useParams();

  const handleOpenReject = () => {
    setRejectOpen(true);
  };

  const handleCloseReject = () => {
    setRejectOpen(false);
  };

  const handleOpenApprove = () => {
    setApproveOpen(true);
  };

  const handleCloseApprove = () => {
    setApproveOpen(false);
  };

  const handleApprove = async () => {
    await updateApprovals(id, "approve", { expenses: authenticExpenses });
    setIsChange(!isChange);
    handleCloseApprove();
  };
  // const handleReject = (description) => {
  //   console.log("Rejection Description:", description);
  //   setRejectOpen(false);
  // };
  const handleReject = async () => {
    await updateApprovals(id, "reject", { expenses: rejectedExpenses });
    setIsChange(!isChange);
    setRejectOpen(false);
  };
  useEffect(() => {
    if (id) {
      fetchApprovalById(id);
    }
  }, [id, fetchApprovalById, isChange]);
  console.log("approval", approval);
  console.log("rejectedExpenses", rejectedExpenses);
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
              <Typography variant="h11" marginRight={1}>
                Approvals
              </Typography>
              <GtIcon />
              <Typography variant="h11" marginLeft={1}>
                Report
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              width="30%"
              gap={2}
            >
              {approval?.status === "approved" ? (
                <StyledButton variant="green" name="Approved" />
              ) : approval?.status === "rejected" ? (
                <StyledButton variant="danger" name="Rejected" />
              ) : (
                <>
                  <StyledButton
                    variant="green"
                    name="Approve"
                    onClick={handleOpenApprove}
                  />
                  <StyledButton
                    variant="danger"
                    name="Reject"
                    onClick={handleOpenReject}
                  />
                </>
              )}
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <StaffDetails data={approval} />
        </Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={6}>
          <Details data={approval} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Description data={approval?.description} />
        </Grid>
        <Grid item xs={12} md={12}>
          <Expenses
            data={approval?.expenses}
            authenticExpenses={authenticExpenses}
            setAuthenticExpenses={setAuthenticExpenses}
            rejectedExpenses={rejectedExpenses}
            setRejectedExpenses={setRejectedExpenses}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <LiveLocation />
        </Grid>
        <RejectedForm
          open={rejectOpen}
          onClose={handleCloseReject}
          onReject={handleReject}
        />
        <ApproveComponent
          open={approveOpen}
          onClose={handleCloseApprove}
          onApprove={handleApprove}
        />{" "}
      </Grid>
    </>
  );
};

export default ApprovalPage;
