import { Box, Stack, Grid } from "@mui/material";
import React from "react";
import StyledSelectField from "../../ui/StyledSelectField";
import StyledButton from "../../ui/StyledButton";
import { MoreVert } from "@mui/icons-material";
import StyledTextArea from "../../ui/StyledTextArea";
import StyledTextField from "../../ui/StyledTextField";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const CreateEvent = ({ onPageChange }) => {
  return (
    <Box padding={3}>
      <Stack spacing={2}>
        <Box display="flex" justifyContent="space-between" alignItems="center" position="relative">
          <Box flexGrow={1} />
          <h2 style={{ flexGrow: 1 }}>Create an Event</h2>
          <Box position="absolute" right={0}>
            <MoreVert />
          </Box>
        </Box>
        
        <Stack direction="row" spacing={2}>
          <StyledTextField label={"Event Title"} sx={{ flex: 1 }} />
          <StyledSelectField placeholder={"Choose Tier"} options={options} sx={{ flex: 1 }} />
        </Stack>
        
        <Stack direction="row" spacing={2}>
          <StyledSelectField placeholder={"Choose Role"} options={options} sx={{ flex: 1 }} />
          <StyledSelectField placeholder={"Choose Location"} options={options} sx={{ flex: 1 }} />
        </Stack>
        
        <Stack direction="row" spacing={2}>
          <StyledSelectField placeholder={"Choose Staff"} options={options} sx={{ flex: 1 }} />
          <StyledSelectField placeholder={"Number of Days"} options={options} sx={{ flex: 1 }} />
        </Stack>
        
        <Stack direction="row" spacing={2}>
          <StyledSelectField placeholder={"Start Date"} options={options} sx={{ flex: 1 }} />
          <StyledSelectField placeholder={"End Date"} options={options} sx={{ flex: 1 }} />
        </Stack>
        
        <Stack direction="row" spacing={2}>
          <StyledSelectField placeholder={"Choose Start Time"} options={options} sx={{ flex: 1 }} />
          <StyledSelectField placeholder={"Choose End Time"} options={options} sx={{ flex: 1 }} />
        </Stack>
        
        <StyledTextArea placeholder={"Description"} />
        
        <Grid container spacing={1}>
          <Grid item md={6} sm={6}>
            {/* Left Grid content if needed */}
          </Grid>
          <Grid item md={6} sm={6}>
            <Stack direction="row" spacing={2} marginRight={"8px"} justifyContent="flex-end">
              <StyledButton
                variant="secondary"
                sx={{ padding: "15px 50px" }}
                name="Back"
                onClick={() => onPageChange && onPageChange(null, "prev")}
              />
              <StyledButton
                variant="primary"
                sx={{ padding: "15px 50px" }}
                name="Save"
                onClick={() => onPageChange && onPageChange(null, "next")}
              />
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default CreateEvent;
