import { Box, Stack, Grid, Dialog } from "@mui/material";
import React, { useState } from "react";
import StyledSwitch from "../../ui/StyledSwitch";
import StyledSelectField from "../../ui/StyledSelectField";
import StyledTextField from "../../ui/StyledTextField";
import StyledButton from "../../ui/StyledButton";
import StyledInput from "../../ui/StyledInput";
import { UploadImageIcon } from "../../assets/icons/UploadImageIcon";
import StyledInputFile from "../../ui/StyledInputfile";
import { Controller, useForm } from "react-hook-form";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const StaffDetailsAdd = ({ open, onClose }) => {
  const [isChecked, setIsChecked] = useState(false);
  const { control, handleSubmit, reset } = useForm();
  const handleClear = () => {
    onClose();
  };

  const onSubmit = (data) => {
    console.log("Form data:", data);
    onClose();
    reset();
  };

  const handleSwitchChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
  };



  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <Box padding={3}>
        <Stack spacing={2}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            position="relative"
          >
            <Box flexGrow={1} />
            <h2 style={{ flexGrow: 1 }}>Staff</h2>
            <Box position="absolute" right={0}>
              <StyledSwitch checked={isChecked} onChange={handleSwitchChange} />
            </Box>
          </Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack direction="row" spacing={2} paddingBottom={2}>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledTextField {...field} label={"Name"} sx={{ flex: 1 }} />
                )}
              />

              <Controller
                name="Tier"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledSelectField
                    {...field}
                    placeholder={"Tier"}
                    options={options}
                    sx={{ flex: 1 }}
                  />
                )}
              />
            </Stack>

            <Stack direction="row" spacing={2} paddingBottom={2}>
              <Controller
                name="submiter"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledSelectField
                    {...field}
                    placeholder={"Submitter"}
                    options={options}
                    sx={{ flex: 1 }}
                  />
                )}
              />

              <Controller
                name="location"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledSelectField
                    {...field}
                    placeholder={"Location"}
                    options={options}
                    sx={{ flex: 1 }}
                  />
                )}
              />
            </Stack>

            <Stack direction="row" spacing={2} paddingBottom={2}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledTextField
                    {...field}
                    label={"E-mail ID"}
                    sx={{ flex: 1 }}
                  />
                )}
              />

              <Controller
                name="emp id"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledTextField
                    {...field}
                    label={"Employee ID"}
                    sx={{ flex: 1 }}
                  />
                )}
              />
            </Stack>

            <Stack direction="row" spacing={2} paddingBottom={2}>
              <Controller
                name="ph no"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledTextField
                    {...field}
                    label={"Ph No"}
                    sx={{ flex: 1 }}
                  />
                )}
              />
              <Controller
                name="image"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledInputFile
                    {...field}
                    placeholder="Upload Image"
                    endIcon={<UploadImageIcon />}
                    onChange={handleFileChange}
                  />
                )}
              />
            </Stack>

            <Grid container spacing={1}>
              <Grid item md={6} sm={6}></Grid>
              <Grid item md={6} sm={6}>
                <Stack
                  direction="row"
                  spacing={2}
                  marginRight={"8px"}
                  justifyContent="flex-end"
                >
                  <StyledButton
                    variant="secondary"
                    sx={{ padding: "15px 50px" }}
                    name="Back"
                    onClick={handleClear}
                  />
                  <StyledButton
                    type="submit"
                    variant="primary"
                    sx={{ padding: "15px 50px" }}
                    name="Save"
                  />
                </Stack>
              </Grid>
            </Grid>
          </form>
        </Stack>
      </Box>
    </Dialog>
  );
};

export default StaffDetailsAdd;
