import { Box, Dialog, Stack } from "@mui/material";
import React, { useState } from "react";
import StyledTextField from "../../ui/StyledTextField";
import StyledSelectField from "../../ui/StyledSelectField";
import StyledTextArea from "../../ui/StyledTextArea";
import StyledButton from "../../ui/StyledButton";
import StyledInput from "../../ui/StyledInput";
import { PolicyDateIcon } from "../../assets/icons/PolicyDateIcon";
import { Grid } from "@mui/material"; // Make sure to import Grid from @mui/material
import CalendarInput from "../../ui/CalenderInput";
import { Controller, useForm } from "react-hook-form";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const PolicyEdit = ({ open, onClose }) => {
  const { control, handleSubmit, reset } = useForm();
  const handleClear = () => {
    onClose();
  };

  const onSubmit = (data) => {
    console.log("Form data:", data);
    onClose();
    reset();
  };

  const [dateValue, setDateValue] = useState("");

  const handleDateChange = (newDate) => {
    setDateValue(newDate);
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
            <h2 style={{ flexGrow: 1 }}>Policy</h2>
            <Box position="absolute" right={0}></Box>
          </Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack direction="row" spacing={2} paddingBottom={2}>
              <Controller
                name="policy title"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledTextField
                    {...field}
                    placeholder={"Policy Title"}
                    sx={{ flex: 1 }}
                  />
                )}
              />

              <Controller
                name="tier"
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
                name="submitter"
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

              {/* <StyledInput
              placeholder="Enter RFID Expiry date"
              endIcon={<CalendarInput onDateChange={handleDateChange} />}
              // value={expiryDate}
              readOnly
              sx={{ flex: 1 }}
            /> */}
              <CalendarInput
                dateValue={dateValue}
                onDateChange={handleDateChange}
              />
            </Stack>

            <Stack direction="row" sx={{ width: "49.3%" }} paddingBottom={2}>
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
              {" "}
              <Controller
                name="description"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledTextArea {...field} placeholder={"Description"} />
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
                  paddingBottom={2}
                >
                  <StyledButton
                    variant="secondary"
                    sx={{ padding: "15px 50px" }}
                    name="Back"
                    onClick={handleClear}
                  />
                  <StyledButton
                    variant="primary"
                    type="submit"
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

export default PolicyEdit;
