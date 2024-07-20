import React, { useState } from "react";
import StyledTextArea from "../../ui/StyledTextArea";
import { CrossIcon } from "../../assets/icons/CrossIcon";
import StyledButton from "../../ui/StyledButton";
import { Box, Dialog, DialogContent, Typography } from "@mui/material";

const RejectedForm = ({ open, onClose, onReject }) => {
  const [reason, setReason] = useState("");

  const handleSubmit = () => {
    onReject(reason);
  };

  const handleClear = () => {
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
          <Typography onClick={handleClear} style={{ cursor: "pointer" }}>
            <CrossIcon />
          </Typography>
        </Box>
        <StyledTextArea
          placeholder="Reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
      </DialogContent>
      <Box p={3}>
        <StyledButton variant="danger" name="Reject" onClick={handleSubmit} />
      </Box>
    </Dialog>
  );
};

export default RejectedForm;
