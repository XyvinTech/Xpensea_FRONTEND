import React, { useEffect, useState } from "react";
import { Box, Grid, LinearProgress, Stack, Typography } from "@mui/material";
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
import PaymentDetails from "../../components/approvals/PaymentDetails";
const ApprovalPage = () => {
  const [rejectOpen, setRejectOpen] = useState(false);
  const [approveOpen, setApproveOpen] = useState(false);
  const [authenticExpenses, setAuthenticExpenses] = useState([]);
  const [rejectedExpenses, setRejectedExpenses] = useState([]);
  const [isChange, setIsChange] = useState(false);
  const { approval, fetchApprovalById, updateApprovals, loading } =
    useApprovalStore();
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
  const handleReject = async (reason) => {
    await updateApprovals(id, "reject", { expenses: rejectedExpenses, reason });
    setIsChange(!isChange);
    setRejectOpen(false);
  };
  useEffect(() => {
    if (id) {
      fetchApprovalById(id);
    }
  }, [id, fetchApprovalById, isChange]);
  return (
    <>
      {loading ? (
        <LinearProgress />
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} bgcolor={"#F7F7F7"}>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Box display="flex" alignItems="center">
                <Typography variant="h11" marginRight={1}>
                  Approvals
                </Typography>
                <Typography variant="h11" marginRight={1}>
                  &gt;
                </Typography>

                <Typography variant="h11" marginLeft={1}>
                  Report
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" gap={2}>
                {approval?.status === "approved" ? (
                  <StyledButton variant="green" name="Approved" />
                ) : approval?.status === "reimbursed" ? (
                  <StyledButton variant="action" name="Reimbursed" />
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
          <Grid item xs={12} md={6}>
            <Details data={approval} />
          </Grid>
          {approval?.status==='reimbursed'&& (
              <Grid item xs={12} md={12}>
              <PaymentDetails data={approval} />
            </Grid>
          )}
        
          {approval?.expenses?.length > 0 && (
            <Grid item xs={12} md={12}>
              <Expenses
                data={approval?.expenses}
                authenticExpenses={authenticExpenses}
                setAuthenticExpenses={setAuthenticExpenses}
                rejectedExpenses={rejectedExpenses}
                setRejectedExpenses={setRejectedExpenses}
              />
            </Grid>
          )}{" "}
          <Grid item xs={12} md={12}>
            <Description data={approval?.description} />
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
      )}
    </>
  );
};

export default ApprovalPage;
