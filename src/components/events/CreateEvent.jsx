import { Box, Dialog, Grid, Stack } from "@mui/material";
import React, { useEffect } from "react";
import StyledSelectField from "../../ui/StyledSelectField";
import StyledButton from "../../ui/StyledButton";
import { MoreVert } from "@mui/icons-material";
import StyledTextArea from "../../ui/StyledTextArea";
import StyledTextField from "../../ui/StyledTextField";
import { Controller, useForm } from "react-hook-form";
import StyledInputTime from "../../ui/StyledInputTime";
import { useDropDownStore } from "../../store/useDropDownStore";
import CalendarInput from "../../ui/CalenderInput";
import { useEventStore } from "../../store/eventStore";

const CreateEvent = ({ open, onClose , onChange}) => {
  const {  staffs, fetchTiers, fetchStaffs } = useDropDownStore();
  const { addEvents } = useEventStore();
  const { control, handleSubmit, reset } = useForm();

  useEffect(() => {
    fetchTiers();
    fetchStaffs();
  }, [fetchTiers, fetchStaffs]);

  const handleClear = () => {
    onClose();
  };

  const onSubmit = async(data) => {
    const formData = {
      eventName: data.eventName,
      days: data.days,
      startDate: data.startDate,
      endDate: data.endDate,
      description: data.description,
      staffs: Array.isArray(data.staff) ? data.staff.map(staff => staff.value) : [data.staff.value],
      location: data.location.value,
      startTime: data.startTime,
      endTime: data.endTime,
    };
    console.log("Form data:", formData);
    await addEvents(formData)
    onChange();
    onClose();
    reset();
  };
  const location = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
      <Box padding={3}>
        <Stack spacing={2}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            position="relative"
          >
            <Box flexGrow={1} />
            <h2 style={{ flexGrow: 1 }}>Create an Event</h2>
            <Box position="absolute" right={0}>
              <MoreVert />
            </Box>
          </Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack direction="row" spacing={2} paddingBottom={2}>
              <Controller
                name="eventName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledTextField
                    {...field}
                    label="Event Title"
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
                    placeholder={"Choose Location"}
                    options={location}
                    sx={{ flex: 1 }}
                  />
                )}
              />
            </Stack>
            <Stack direction="row" spacing={2} paddingBottom={2}>
              {/* <Controller
                name="role"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledSelectField
                    {...field}
                    placeholder={"Choose Role"}
                    options={roles.map((role) => ({
                      value: role?._id,
                      label: role?.roleName
                    }))}
                    sx={{ flex: 1 }}
                  />
                )}
              /> */}
              {/* <Controller
                name="tier"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledSelectField
                    {...field}
                    placeholder={"Choose Tier"}
                    options={tiers.map((tier) => ({
                      value: tier?._id,
                      label: tier?.title,
                    }))}
                    sx={{ flex: 1 }}
                  />
                )}
              /> */}
            </Stack>
            <Stack direction="row" spacing={2} paddingBottom={2}>
              <Controller
                name="staff"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledSelectField
                    {...field}
                    isMulti={true}
                    placeholder={"Choose Staff"}
                    options={staffs.map((staff) => ({
                      value: staff?._id,
                      label: staff?.name,
                    }))}
                    sx={{ flex: 1 }}
                  />
                )}
              />
              <Controller
                name="days"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledTextField
                    {...field}
                    label="Number of Days"
                    sx={{ flex: 1 }}
                  />
                )}
              />
            </Stack>
            <Stack direction="row" spacing={2} paddingBottom={2}>
              <Controller
                name="startDate"
                control={control}
                render={({ field }) => (
                  <CalendarInput
                    {...field}
                    placeholder={"Start Date"}
                    dateValue={field.value}
                    onDateChange={field.onChange}
                  />
                )}
              />
              <Controller
                name="endDate"
                control={control}
                render={({ field }) => (
                  <CalendarInput
                    {...field}
                    placeholder={"End Date"}
                    dateValue={field.value}
                    onDateChange={field.onChange}
                  />
                )}
              />
            </Stack>
            <Stack direction="row" spacing={2} paddingBottom={2}>
              <Controller
                name="startTime"
                control={control}
                render={({ field }) => (
                  <StyledInputTime
                    {...field}
                    placeholder={"Choose Start Time"}
                    sx={{ flex: 1 }}
                  />
                )}
              />
              <Controller
                name="endTime"
                control={control}
                render={({ field }) => (
                  <StyledInputTime
                    {...field}
                    placeholder={"Choose End Time"}
                    sx={{ flex: 1 }}
                  />
                )}
              />
            </Stack>
            <Controller
              name="description"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <StyledTextArea
                  {...field}
                  placeholder="Description"
                  sx={{ flex: 1 }}
                />
              )}
            />
            <Grid container spacing={1}>
              <Grid item md={6} sm={6}></Grid>
              <Grid item md={6} sm={6}>
                <Stack direction="row" spacing={2} justifyContent="flex-end">
                  <StyledButton
                    variant="secondary"
                    padding="15px 50px 15px 50px"
                    name="Back"
                    onClick={handleClear}
                  />
                  <StyledButton
                    variant="primary"
                    type="submit"
                    padding="15px 50px 15px 50px"
                    name="Save"
                  />
                </Stack>
              </Grid>
            </Grid>{" "}
          </form>
        </Stack>
      </Box>
    </Dialog>
  );
};

export default CreateEvent;
