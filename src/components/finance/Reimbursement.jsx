import React, { useState } from "react";
import {
  Box,
  Typography,
  Dialog,
  DialogContent,
  Divider,
  Stack,
} from "@mui/material";
import StyledButton from "../../ui/StyledButton";
import { CrossIcon } from "../../assets/icons/CrossIcon";
import StyledTextField from "../../ui/StyledTextField";
import StyledTextArea from "../../ui/StyledTextArea";
import StyledInput from "../../ui/StyledInput";
import ConfirmReimburse from "./ConfirmReimburse";
import DeductConfirm from "./DeductConfirm";
import { useApprovalStore } from "../../store/approvalstore";

const Reimbursement = ({
  open,
  onClose,
  data,
  paymentAmount,
  setPaymentAmount,
  description,
  setDescription,
}) => {
  const [approveOpen, setApproveOpen] = useState(false);
  const [deductOpen, setDeductOpen] = useState(false);
  const totalDeductions = data?.deduction?.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );

  const amountToBePaid = data?.totalAmount - totalDeductions;
  const handleReimburse = () => {
    setApproveOpen(true);
  };

  const handleCloseApprove = () => {
    setApproveOpen(false);
    onClose();
  };

  const handleDeduct = () => {
    setDeductOpen(true);
  };

  const handleCloseDeduct = () => {
    setDeductOpen(false);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="481px">
      <DialogContent sx={{ height: "auto", width: "480px", padding: 2 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
          paddingTop={3}
          paddingBottom={0}
        >
          <Typography variant="h8">Make Payment</Typography>
          <Typography onClick={onClose} style={{ cursor: "pointer" }}>
            <CrossIcon />
          </Typography>
        </Box>
        <Stack spacing={2} mt={3} padding={2}>
          <Stack spacing={3} mt={3}>
            <Typography variant="h4">
              Amount in wallet : {data?.walletAmount}
            </Typography>
            <Typography variant="h4">
              Amount to be paid :{amountToBePaid}
            </Typography>
          </Stack>
          <StyledInput
            placeholder="Payment Amount"
            value={paymentAmount}
            onChange={(e) => setPaymentAmount(e.target.value)}
          />
          <StyledTextArea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Stack>
      </DialogContent>
      <Stack direction="row" spacing={3} padding={3}>
        <StyledButton
          variant="secondary"
          name="Mark as Reimbursed"
          onClick={handleReimburse}
        />
        <StyledButton
          variant="primary"
          name="Deduct from wallet"
          onClick={handleDeduct}
        />
      </Stack>
      <ConfirmReimburse
        open={approveOpen}
        onClose={handleCloseApprove}
        formData={data}
        description={description}
        amount={paymentAmount}
      />
      <DeductConfirm
        open={deductOpen}
        onClose={handleCloseDeduct}
        formData={data}
        paymentAmount={paymentAmount}
      />
    </Dialog>
  );
};

export default Reimbursement;
