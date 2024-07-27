import React, { useEffect, useState } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import StaffDetails from "../components/approvals/StaffDetails";
import StyledButton from "../ui/StyledButton";
import { GtIcon } from "../assets/icons/GtIcon";
import Details from "../components/approvals/Details";
import Description from "../components/approvals/Description";
import Expenses from "../components/approvals/Expenses";
import LiveLocation from "../components/approvals/LiveLocation";
import RejectedForm from "../components/approvals/RejectedForm";
import { useParams } from "react-router-dom";
import ApproveComponent from "../components/ApproveComponent";
import { useApprovalStore } from "../store/approvalstore";
import Reimbursement from "../components/finance/Reimbursement";

const FinanceSinglePage = () => {
  const [rejectOpen, setRejectOpen] = useState(false);
  const [approveOpen, setApproveOpen] = useState(false);
  const [authenticExpenses, setAuthenticExpenses] = useState([]);
  const [rejectedExpenses, setRejectedExpenses] = useState([]);
  const [isChange, setIsChange] = useState(false);
  const { finance, fetchFinanceById, updateFinances } = useApprovalStore();
  const { id } = useParams();

  const handleOpenApprove = () => {
    setApproveOpen(true);
  };

  const handleCloseApprove = () => {
    setApproveOpen(false);
  };

  const handleApprove = async (description) => {
    await updateFinances(id, { descriptionFinance: description });
    setIsChange(!isChange);
    handleCloseApprove();
  };
  // const handleReject = (description) => {
  //   console.log("Rejection Description:", description);
  //   setRejectOpen(false);
  // };

  useEffect(() => {
    if (id) {
      fetchFinanceById(id);
    }
  }, [id, fetchFinanceById, isChange]);
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
                Finance
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
              <>
                {finance?.status === "reimbursed" ? (
                  <StyledButton variant="green" name="Reimbursed" />
                ) : (
                  <StyledButton
                    variant="green"
                    name="Mark as reimburse "
                    onClick={handleOpenApprove}
                  />
                )}
              </>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <StaffDetails data={finance} />
        </Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={6}>
          <Details data={finance} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Description data={finance?.description} />
        </Grid>
        <Grid item xs={12} md={12}>
          <Expenses
            data={finance?.expenses}
            authenticExpenses={authenticExpenses}
            setAuthenticExpenses={setAuthenticExpenses}
            rejectedExpenses={rejectedExpenses}
            setRejectedExpenses={setRejectedExpenses}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <LiveLocation />
        </Grid>
        <Reimbursement
          open={approveOpen}
          onClose={handleCloseApprove}
          onApprove={handleApprove}
        />{" "}
      </Grid>
    </>
  );
};

export default FinanceSinglePage;
