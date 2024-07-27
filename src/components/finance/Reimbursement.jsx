import React, { useState } from "react";
import { Box, Typography, Dialog, DialogContent, Divider, Stack } from "@mui/material";
import StyledButton from "../../ui/StyledButton";
import { CrossIcon } from "../../assets/icons/CrossIcon";
import StyledTextField from "../../ui/StyledTextField";
import StyledTextArea from "../../ui/StyledTextArea";

const Reimbursement = ({ open, onClose,onApprove }) => {
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    onApprove(description);
  };

  const handleClear = (event) => {
    event.preventDefault();
    onClose();
  };
  return (
    <Dialog open={open} onClose={onClose} maxWidth="481px">
      <DialogContent sx={{ height: "auto", width: "480px", padding: 2 }}>
        <Box
          display="flex"
          justifyContent="end"
          alignItems="center"
          mb={2}
          padding={3}
          paddingBottom={0}
        >
          <Typography onClick={(event) => handleClear(event)} style={{ cursor: "pointer" }}>
            <CrossIcon />
          </Typography>
        </Box>
        <StyledTextArea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </DialogContent>
      <Box p={3}>
        <StyledButton variant="green" name="Reimburse" onClick={handleSubmit} />
      </Box>
    </Dialog>
  );
};

export default Reimbursement;
