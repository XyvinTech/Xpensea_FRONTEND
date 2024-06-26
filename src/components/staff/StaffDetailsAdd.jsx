import { Box, Stack, Grid, Dialog } from '@mui/material'; // Import Grid from Material-UI
import React, { useState } from 'react';
import StyledSwitch from '../../ui/StyledSwitch';
import StyledSelectField from '../../ui/StyledSelectField';
import StyledTextField from '../../ui/StyledTextField';
import StyledButton from '../../ui/StyledButton';
import StyledInput from '../../ui/StyledInput';
import { UploadImageIcon } from '../../assets/icons/UploadImageIcon';
import StyledInputFile from '../../ui/StyledInputfile';

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const StaffDetailsAdd = ({ open, onClose }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = (event) => {
    setIsChecked(event.target.checked);
  };


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file); // Handle file change
  };

  return (
    <Dialog open={open} onClose={onClose}maxWidth="md" fullWidth >
      <Box padding={3}>
        <Stack spacing={2}>
          <Box display="flex" justifyContent="space-between" alignItems="center" position="relative">
            <Box flexGrow={1} />
            <h2 style={{ flexGrow: 1 }}>Staff</h2>
            <Box position="absolute" right={0}>
              <StyledSwitch checked={isChecked} onChange={handleSwitchChange} />
            </Box>
          </Box>

          <Stack direction="row" spacing={2}>
            <StyledTextField label={"Name"} sx={{ flex: 1 }} />
            <StyledSelectField placeholder={"Tier"} options={options} sx={{ flex: 1 }} />
          </Stack>

          <Stack direction="row" spacing={2}>
            <StyledSelectField placeholder={"Submitter"} options={options} sx={{ flex: 1 }} />
            <StyledSelectField placeholder={"Location"} options={options} sx={{ flex: 1 }} />
          </Stack>

          <Stack direction="row" spacing={2}>
            <StyledTextField label={"E-mail ID"} sx={{ flex: 1 }} />
            <StyledTextField label={"Employee ID"} sx={{ flex: 1 }} />
          </Stack>

          <Stack direction="row" spacing={2}>
            <StyledTextField label={"Ph No"} sx={{ flex: 1 }} />
            <StyledInputFile
        placeholder="Upload Image"
        endIcon={<UploadImageIcon />}
        onChange={handleFileChange}
      />
          </Stack>

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
                  // onClick={() => onPageChange && onPageChange(null, "prev")}
                />
                <StyledButton
                  variant="primary"
                  sx={{ padding: "15px 50px" }}
                  name="Save"
                  // onClick={() => onPageChange && onPageChange(null, "next")}
                />
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Dialog>
  );
}

export default StaffDetailsAdd;
