import { Box, Stack } from "@mui/material";
import React from "react";
import StyledTextField from "../../ui/StyledTextField";
import StyledSelectField from "../../ui/StyledSelectField";
import StyledTextArea from "../../ui/StyledTextArea";
import StyledButton from "../../ui/StyledButton";
import StyledInput from "../../ui/StyledInput";
import { PolicyDateIcon } from "../../assets/icons/PolicyDateIcon";
import { Grid } from "@mui/material"; // Make sure to import Grid from @mui/material

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const PolicyEdit = ({ onPageChange }) => {
  return (
    <div>
      <Box padding={3}>
        <Stack spacing={2}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            position="relative"
          >
            <Box flexGrow={1} />
            <h2 style={{ flexGrow: 1 }}>Policy</h2>
            <Box position="absolute" right={0}></Box>
          </Box>

          <Stack direction="row" spacing={2}>
            <StyledTextField label={"Policy Title"} sx={{ flex: 1 }} />
            <StyledSelectField
              placeholder={"Tier"}
              options={options}
              sx={{ flex: 1 }}
            />
          </Stack>

          <Stack direction="row" spacing={2}>
            <StyledSelectField
              placeholder={"Submitter"}
              options={options}
              sx={{ flex: 1 }}
            />

            <StyledTextField
              label={"Activation Date"}
              endIcon={<PolicyDateIcon />}
              sx={{ flex: 1 }}
            />
          </Stack>

          <Stack direction="row" sx={{ width: "49.3%" }}>
            <StyledSelectField
              placeholder={"Location"}
              options={options}
              sx={{ flex: 1 }}
            />
          </Stack>

          <Stack direction="row" spacing={2}>  <StyledTextArea placeholder={"Description"} /></Stack>
        

          <Grid container spacing={1}>
            <Grid item md={6} sm={6}>
            
            </Grid>
            <Grid item md={6} sm={6}>
              <Stack direction="row" spacing={2} marginRight={"8px"} justifyContent="flex-end">
                <StyledButton
                  variant="secondary"
                  sx={{ padding: "15px 50px" }}
                  name="Back"
                  onClick={() => onPageChange(null, "prev")}
                />
                <StyledButton
                  variant="primary"
                  sx={{ padding: "15px 50px" }}
                  name="Save"
                  onClick={() => onPageChange(null, "next")}
                />
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </div>
  );
};

export default PolicyEdit;
