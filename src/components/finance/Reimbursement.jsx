import React, { useState } from "react";
import { Box, Typography, Dialog, DialogContent, Divider, Stack } from "@mui/material";
import StyledButton from "../../ui/StyledButton";
import { CrossIcon } from "../../assets/icons/CrossIcon";
import StyledTextField from "../../ui/StyledTextField";
import StyledTextArea from "../../ui/StyledTextArea";

const Reimbursement = ({ open, onClose }) => {
  const handleSubmit = () => {};
  const handleClear = () => {
    onClose();
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent sx={{ height: "auto", width: "380px", padding: 0 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
          marginTop={"10px"}
          padding={3}
          paddingBottom={0}
        >
          <Typography variant="h4">Reimbursement</Typography>
          <Box onClick={handleClear} style={{ cursor: "pointer" }}>
            <CrossIcon />
          </Box>
        </Box>
        <Divider />
        <Stack spacing={2} padding={2}>
            <StyledTextField label={"Total Amount"}/>
            <StyledTextField label={"Reimbursed Amount"}/>
            <StyledTextArea placeholder={"Description"}/>
        </Stack>
      </DialogContent>
      <Box p={3}>
        <StyledButton
          variant="green"
          name="Mark as Reimbursed"
          onClick={handleSubmit}
        />
      </Box>
    </Dialog>
  );
};

export default Reimbursement;
