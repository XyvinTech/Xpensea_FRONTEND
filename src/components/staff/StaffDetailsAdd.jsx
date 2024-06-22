import { Box, Stack } from '@mui/material';
import React, { useState } from 'react'
import StyledSwitch from '../../ui/StyledSwitch';
import StyledSelectField from '../../ui/StyledSelectField';
import StyledTextField from '../../ui/StyledTextField';
import StyledButton from '../../ui/StyledButton';
import StyledInput from '../../ui/StyledInput';
import { UploadImageIcon } from '../../assets/icons/UploadImageIcon';

const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

const StaffDetailsAdd = () => {
    const [isChecked, setIsChecked] = useState(false);
    const handleSwitchChange = (event) => {
        setIsChecked(event.target.checked);
      };
      const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log("Selected file:", file);
      };
  return (
    <div>
      
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
        <StyledInput
      type="file"
      placeholder="Upload Image"
      endIcon={<UploadImageIcon />}
      onChange={handleFileChange}
    />
        </Stack>
  
        
        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <StyledButton
            variant="secondary"
           padding='15px 50px 15px 50px'
            name="Back"
            onClick={() => onPageChange(null, "prev")}
          />
          <StyledButton
            variant="primary"
                 padding='15px 50px 15px 50px'
            name="Save"
            onClick={() => onPageChange(null, "next")}
          />
        </Stack>
      </Stack>
    </Box>
    </div>
  )
}

export default StaffDetailsAdd
