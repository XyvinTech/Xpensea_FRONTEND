import React, { useState } from 'react';
import StyledTextArea from '../../ui/StyledTextArea';
import { CrossIcon } from "../../assets/icons/CrossIcon";
import StyledButton from '../../ui/StyledButton';
import { Box, Dialog, DialogContent, Typography } from '@mui/material';

const RejectedForm = ({ open, onClose, onReject }) => {
  const [description, setDescription] = useState(""); // State to store the description

  const handleSubmit = () => {
    onReject(description); // Pass the description to the parent component
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
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)} // Update the description state on change
        />
      </DialogContent>
      <Box p={3}>
        <StyledButton
          variant="danger"
          name="Reject"
          onClick={handleSubmit}
        />
      </Box>
    </Dialog>
  );
};

export default RejectedForm;
