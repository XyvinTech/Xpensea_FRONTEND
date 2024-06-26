import React, { useState } from "react";
import { Box, Typography, Dialog, DialogContent, Divider, Stack } from "@mui/material";
import StyledButton from "../ui/StyledButton";

const DeleteComponent = ({ open, onClose }) => {
  const handleSubmit = () => {};
  const handleClear = () => {
    onClose();
  };
  return (
    <Dialog open={open} onClose={onClose}  PaperProps={{
        sx: { borderRadius: '21px' }
      }}>
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
          <Typography variant="h2" paddingBottom={2} fontWeight={600}>Do you want to delete this?</Typography>
         <Typography variant="h3">You cannot undo this action</Typography>
        </Box>
        <Divider />
      
      </DialogContent>
  
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} >
          <Box onClick={handleClear}p={2} sx={{ cursor: "pointer" }}>
            <Typography variant="button"fontSize={"23px"} textTransform={"none"} color={"#027AFF"} fontWeight={600}>Cancel</Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box onClick={handleSubmit}p={2} sx={{ cursor: "pointer" }}>
            <Typography variant="button"fontSize={"23px"} textTransform={"none"} color={"#FF4136"} fontWeight={600}>Delete</Typography>
          </Box>
        </Stack>
         
       
    
    </Dialog>
  );
};

export default DeleteComponent;
