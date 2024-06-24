import { Box, Dialog, Stack } from "@mui/material";
import React, { useState } from "react";
import StyledTextField from "../../ui/StyledTextField";
import StyledButton from "../../ui/StyledButton";
import StyledSelectField from "../../ui/StyledSelectField";
import StyledTextArea from "../../ui/StyledTextArea";
import StyledSwitch from "../../ui/StyledSwitch";
import { Divider } from "antd";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const AddNewRole = ({ open, onClose }) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleSwitchChange = (event) => {
        setIsChecked(event.target.checked);
      };
  return (
    <Dialog open={open} onClose={onClose}maxWidth="xs" fullWidth>
      <Box padding={3}>
        <Stack spacing={2}>
          <Box display="flex" justifyContent="space-between">
            <h2 style={{ flexGrow: 1 }}>Add New role</h2>

            <StyledSwitch
        variant={"primary"}
        checked={isChecked}
        onChange={handleSwitchChange}
      />

          </Box>
          <Divider/>

          <Stack direction="row" spacing={2}>
            <StyledTextField label={"Name"} sx={{ flex: 1 }} />
          </Stack>

          <Stack direction="row" spacing={2}>
            <StyledSelectField
              placeholder={"Choose Role"}
              options={options}
              sx={{ flex: 1 }}
            />
          </Stack>

          <Stack direction="row" spacing={2}>
            <StyledSelectField
              placeholder={"Designation"}
              options={options}
              sx={{ flex: 1 }}
            />
          </Stack>

          <Stack direction="row" spacing={2}>
            <StyledTextField label={"E-mail"} sx={{ flex: 1 }} />
          </Stack>

          <Stack direction="row" spacing={2}>
            <StyledTextField label={"Phone Number"} sx={{ flex: 1 }} />
          </Stack>

          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <StyledButton
              variant="secondary"
              padding="15px 50px 15px 50px"
              name="Cancel"
              onClick={() => onPageChange(null, "prev")}
            />
            <StyledButton
              variant="primary"
              padding="15px 50px 15px 50px"
              name="Save"
              onClick={() => onPageChange(null, "next")}
            />
          </Stack>
        </Stack>
      </Box>
      </Dialog>
  );
};

export default AddNewRole;
