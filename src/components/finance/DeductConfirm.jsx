import React from "react";
import {
  Box,
  Typography,
  Dialog,
  DialogContent,
  Divider,
  Stack,
} from "@mui/material";
import { useApprovalStore } from "../../store/approvalstore";

const DeductConfirm = ({ open, onClose, formData, paymentAmount }) => {
  const { deductWallet, setRefresh } = useApprovalStore();
  const handleSubmit = async () => {
    const data = {
      amount: paymentAmount,
      report: formData._id,
    };
    await deductWallet(data);
    setRefresh();
    onClose();
  };

  const handleClear = (event) => {
    event.preventDefault();
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { borderRadius: "21px" } }}
    >
      <DialogContent sx={{ height: "auto", width: "380px", padding: 0 }}>
        <Box
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          alignItems="center"
          mb={2}
          marginTop={"10px"}
          padding={2}
        >
          <Typography variant="h4" paddingBottom={2} fontWeight={600}>
            Deduct From Wallet?
          </Typography>
        </Box>
        <Divider />
      </DialogContent>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Box onClick={handleSubmit} p={2} sx={{ cursor: "pointer" }}>
          <Typography
            variant="button"
            fontSize={"23px"}
            textTransform={"none"}
            color={"#14AE5C"}
            fontWeight={600}
          >
            Yes
          </Typography>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box
          onClick={(event) => handleClear(event)}
          p={2}
          sx={{ cursor: "pointer" }}
        >
          <Typography
            variant="button"
            fontSize={"23px"}
            textTransform={"none"}
            color={"#FC0303"}
            fontWeight={600}
          >
            No
          </Typography>
        </Box>
      </Stack>
    </Dialog>
  );
};

export default DeductConfirm;
