import { Box, Dialog, Grid, Stack } from "@mui/material";
import React, { useEffect } from "react";
import StyledSelectField from "../../ui/StyledSelectField";
import StyledButton from "../../ui/StyledButton";
import { MoreVert } from "@mui/icons-material";
import StyledTextArea from "../../ui/StyledTextArea";
import StyledTextField from "../../ui/StyledTextField";
import { Controller, useForm } from "react-hook-form";
import { useDropDownStore } from "../../store/useDropDownStore";
import CalendarInput from "../../ui/CalenderInput";
import { useEventStore } from "../../store/eventStore";
import StyledTimeInput from "../../ui/StyledTimeInput";

const CreateEvent = ({ open, onClose, onChange }) => {
  const { staffs, fetchTiers, fetchStaffs } = useDropDownStore();
  const { addEvents } = useEventStore();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetchTiers();
    fetchStaffs();
  }, [fetchTiers, fetchStaffs]);

  const handleClear = () => {
    onClose();
  };

  const onSubmit = async (data) => {
    const formData = {
      eventName: data.eventName,
      days: data.days,
      startDate: data.startDate,
      endDate: data.endDate,
      description: data.description,
      staffs: Array.isArray(data.staff)
        ? data.staff.map((staff) => staff.value)
        : [data.staff.value],
      location: data.location.value,
      startTime: data.startTime,
      endTime: data.endTime,
    };
    console.log("Form data:", formData);
    await addEvents(formData);
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
            <Grid container spacing={2} padding={2}>
              <Grid item md="6">
                <Controller
                  name="eventName"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Event Name is required" }}
                  render={({ field }) => (
                    <>
                      <StyledTextField
                        {...field}
                        label="Event Title"
                        sx={{ width: "100%" }}
                      />
                      {errors.eventName && (
                        <span style={{ color: "red" }}>
                          {errors.eventName.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </Grid>
              <Grid item md="6">
                <Controller
                  name="location"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Location is required" }}
                  render={({ field }) => (
                    <>
                      <StyledSelectField
                        {...field}
                        placeholder={"Choose Location"}
                        options={location}
                        sx={{ flex: 1 }}
                      />{" "}
                      {errors.location && (
                        <span style={{ color: "red" }}>
                          {errors.location.message}
                        </span>
                      )}{" "}
                    </>
                  )}
                />
              </Grid>
              {/* <Stack direction="row" spacing={2} paddingBottom={2}> */}
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
              {/* </Stack> */}
              <Grid item md="6">
                <Controller
                  name="staff"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Staff is required" }}
                  render={({ field }) => (
                    <>
                      <StyledSelectField
                        {...field}
                        isMulti={true}
                        placeholder={"Choose Staff"}
                        options={staffs.map((staff) => ({
                          value: staff?._id,
                          label: staff?.name,
                        }))}
                        sx={{ flex: 1 }}
                      />{" "}
                      {errors.staff && (
                        <span style={{ color: "red" }}>
                          {errors.staff.message}
                        </span>
                      )}{" "}
                    </>
                  )}
                />{" "}
              </Grid>
              <Grid item md="6">
                <Controller
                  name="days"
                  control={control}
                  rules={{ required: "Days is required" }}
                  defaultValue=""
                  render={({ field }) => (
                    <>
                      <StyledTextField
                        {...field}
                        label="Number of Days"
                        sx={{ flex: 1 }}
                      />{" "}
                      {errors.days && (
                        <span style={{ color: "red" }}>
                          {errors.days.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </Grid>
              <Grid item md="6">
                <Controller
                  name="startDate"
                  control={control}
                  rules={{ required: "Start Date is required" }}
                  render={({ field }) => (
                    <>
                      <CalendarInput
                        {...field}
                        placeholder={"Start Date"}
                        dateValue={field.value}
                        onDateChange={field.onChange}
                      />{" "}
                      {errors.startDate && (
                        <span style={{ color: "red" }}>
                          {errors.startDate.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </Grid>
              <Grid item md="6">
                <Controller
                  name="endDate"
                  control={control}
                  rules={{ required: "End Date is required" }}
                  render={({ field }) => (
                    <>
                      <CalendarInput
                        {...field}
                        placeholder={"End Date"}
                        dateValue={field.value}
                        onDateChange={field.onChange}
                      />{" "}
                      {errors.endDate && (
                        <span style={{ color: "red" }}>
                          {errors.endDate.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </Grid>
              <Grid item md="6">
                <Controller
                  name="startTime"
                  control={control}
                  rules={{ required: "Start Time is required" }}
                  render={({ field }) => (
                    <>
                      <StyledTimeInput
                        {...field}
                        placeholder={"Choose Start Time"}
                        sx={{ flex: 1 }}
                      />
                      {errors.startTime && (
                        <span style={{ color: "red" }}>
                          {errors.startTime.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </Grid>
              <Grid item md="6">
                <Controller
                  name="endTime"
                  control={control}
                  rules={{ required: "End Time is required" }}
                  render={({ field }) => (
                    <>
                      <StyledTimeInput
                        {...field}
                        placeholder={"Choose End Time"}
                        // sx={{ flex: 1 }}
                      />{" "}
                      {errors.endTime && (
                        <span style={{ color: "red" }}>
                          {errors.endTime.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </Grid>
              <Grid item md="12">
                <Controller
                  name="description"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Description is required" }}
                  render={({ field }) => (
                    <>
                      <StyledTextArea
                        {...field}
                        placeholder="Description"
                        sx={{ flex: 1 }}
                      />{" "}
                      {errors.description && (
                        <span style={{ color: "red" }}>
                          {errors.description.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </Grid>
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
