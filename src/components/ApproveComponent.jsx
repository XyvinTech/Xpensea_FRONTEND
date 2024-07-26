import React from "react";
import { Box, Typography, Dialog, DialogContent, Divider, Stack } from "@mui/material";

const ApproveComponent = ({ open, onClose, onApprove }) => {
  const handleSubmit = () => {
    onApprove(); 
  };

  const handleClear = (event) => {
    event.preventDefault();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} PaperProps={{ sx: { borderRadius: '21px' } }}>
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
          <Typography variant="h2" paddingBottom={2} fontWeight={600}>Do you want to Approve this?</Typography>
          <Typography variant="h3">You cannot undo this action</Typography>
        </Box>
        <Divider />
      </DialogContent>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
        <Box  onClick={(event) => handleClear(event)} p={2} sx={{ cursor: "pointer" }}>
          <Typography variant="button" fontSize={"23px"} textTransform={"none"} color={"#027AFF"} fontWeight={600}>No</Typography>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box onClick={handleSubmit} p={2} sx={{ cursor: "pointer" }}>
          <Typography variant="button" fontSize={"23px"} textTransform={"none"} color={"#14AE5C"} fontWeight={600}>Yes</Typography>
        </Box>
      </Stack>
    </Dialog>
  );
};

export default ApproveComponent;
