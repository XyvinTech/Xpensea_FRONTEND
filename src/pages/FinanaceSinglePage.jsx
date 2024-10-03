import React, { useEffect, useState } from "react";
import { Box, Grid, LinearProgress, Stack, Typography } from "@mui/material";
import StaffDetails from "../components/approvals/StaffDetails";
import StyledButton from "../ui/StyledButton";
import Details from "../components/approvals/Details";
import Description from "../components/approvals/Description";
import Expenses from "../components/approvals/Expenses";
import Reimbursement from "../components/finance/Reimbursement";
import { useNavigate, useParams } from "react-router-dom";
import { useApprovalStore } from "../store/approvalstore";
import PaymentDetails from "../components/approvals/PaymentDetails";

const FinanceSinglePage = () => {
  const navigate = useNavigate();
  const [approveOpen, setApproveOpen] = useState(false);
  const [authenticExpenses, setAuthenticExpenses] = useState([]);
  const [rejectedExpenses, setRejectedExpenses] = useState([]);
  const [paymentAmount, setPaymentAmount] = useState("");
  const [description, setDescription] = useState("");
  const { finance, fetchFinanceById, refresh, loading } = useApprovalStore();
  const { id } = useParams();

  const handleOpenApprove = () => {
    setApproveOpen(true);
  };

  const handleCloseApprove = () => {
    setApproveOpen(false);
  };

  useEffect(() => {
    if (id) {
      fetchFinanceById(id);
    }
  }, [refresh]);
  const totalDeduction = finance?.deduction?.reduce(
    (acc, item) => acc + item.amount,
    0
  );
  const pendingAmount = finance?.totalAmount - totalDeduction;
  return (
    <>
      {loading ? (
        <LinearProgress />
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} bgcolor={"#F7F7F7"}>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Box display="flex" alignItems="center">
                <Typography variant="h11" marginRight={1} onClick={() => {
                    navigate(-1);
                  }}
                  sx={{
                    cursor: "pointer",
                    "&:hover": {
                      color: "#002B9B",
                    },
                  }}>
                  Finance
                </Typography>
                <Typography variant="h11" marginRight={1}>
                  &gt;
                </Typography>
                <Typography variant="h11" marginLeft={1}>
                  Report
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" gap={2}>
                <>
                  {finance?.status === "reimbursed" ? (
                    <StyledButton variant="secondary" name="Reimbursed" />
                  ) : (
                    <StyledButton
                      variant="primary"
                      name="Make payment"
                      onClick={handleOpenApprove}
                    />
                  )}
                </>
              </Box>
            </Stack>
          </Grid>
          <Grid item md={6}>
            <StaffDetails data={finance} />
          </Grid>
          <Grid item xs={6} md={6}>
            <Details data={finance} />
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
          <Grid item xs={12} md={12}>
            <Description data={finance?.description} />
          </Grid>
          {finance?.deduction?.length > 0 && (
            <Grid item xs={12} md={12}>
            {finance.deduction.map((deduction, index) => (
              <PaymentDetails
                key={deduction._id}
                data={deduction}amount={pendingAmount}
              />
            ))}
          </Grid>
          )}
          <Reimbursement
            open={approveOpen}
            onClose={handleCloseApprove}
            data={finance}
            paymentAmount={paymentAmount}
            setPaymentAmount={setPaymentAmount}
            description={description}
            setDescription={setDescription}
          />
        </Grid>
      )}
    </>
  );
};

export default FinanceSinglePage;
