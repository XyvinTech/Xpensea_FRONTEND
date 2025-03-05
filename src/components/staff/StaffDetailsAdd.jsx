import { Box, Stack, Grid, Dialog } from "@mui/material";
import React, { useEffect, useState } from "react";
import StyledSwitch from "../../ui/StyledSwitch";
import StyledSelectField from "../../ui/StyledSelectField";
import StyledTextField from "../../ui/StyledTextField";
import StyledButton from "../../ui/StyledButton";
import { UploadImageIcon } from "../../assets/icons/UploadImageIcon";
import StyledInputFile from "../../ui/StyledInputfile";
import { Controller, useForm } from "react-hook-form";
import { useDropDownStore } from "../../store/useDropDownStore";
import { useUserStore } from "../../store/userStore";
import { toast } from "react-toastify";

const StaffDetailsAdd = ({ open, onClose, onChange, isUpdate = false }) => {
  const { tiers, fetchTiers, fetchApprovers, approvers } = useDropDownStore();
  const { addUsers, updateUsers, user } = useUserStore();
  const [isChecked, setIsChecked] = useState(true);
  const [isChange, setIsChange] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      employeeId: "",
      tier: "",
      designation: "",
      approver: "",
      location: "",
    },
  });

  useEffect(() => {
    if (isUpdate && user) {
      reset({
        name: user?.name,
        email: user?.email,
        mobile: user?.mobile,
        designation: user?.designation,
        employeeId: user?.employeeId,
        tier: { value: user?.tier?._id, label: user?.tierName },
        approver: { value: user?.approver?._id, label: user?.approver?.name },
        userType: { value: user?.userType, label: user?.userType },
        location: { value: user?.location, label: user?.location },
      });
      setIsChecked(user?.status || false);
    } else {
      reset({
        name: "",
        email: "",
        mobile: "",
        employeeId: "",
        tier: "",
        designation: "",
        approver: "",
        userType: "",
        location: "",
      });
      setIsChecked(true);
    }
  }, [isUpdate, user, reset]);

  const handleClear = (event) => {
    event.preventDefault();
    reset({
      name: "",
      email: "",
      mobile: "",
      employeeId: "",
      tier: "",
      designation: "",
      approver: "",
      userType: "",
      location: "",
    });

    onClose();
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const formData = {
        name: data.name,
        email: data.email,
        mobile: data.mobile,
        designation: data.designation,
        employeeId: data.employeeId,
        tier: data.tier.value,
        approver: data.approver.value,
        userType: data.userType.value,
        location: data.location.value,
        status: isChecked,
      };

      if (isUpdate) {
        await updateUsers(user._id, formData);
      } else {
        await addUsers(formData);
      }

      onChange();
      reset({
        name: "",
        email: "",
        mobile: "",
        employeeId: "",
        tier: "",
        designation: "",
        approver: "",
        userType: "",
        location: "",
      });
      onClose();
      setIsChange(!isChange);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSwitchChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // console.log(file);
  };

  useEffect(() => {
    fetchTiers();
    fetchApprovers();
  }, [isChange]);

  const roleOptions = [
    { value: "submitter", label: "Submitter" },
    { value: "approver", label: "Approver" },
  ];

  const optionData = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const tierOptions =
    tiers && Array.isArray(tiers)
      ? tiers.map((list) => ({
          value: list?._id,
          label: list?.title,
        }))
      : [];
  const approverOptions =
    approvers && Array.isArray(approvers)
      ? approvers.map((list) => ({
          value: list?._id,
          label: list?.name,
        }))
      : [];

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
              <StyledSwitch
                checked={isChecked}
                onChange={handleSwitchChange}
                variant={"primary"}
              />
            </Box>
          </Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} padding={1}>
              <Grid item md="6">
                <Controller
                  name="employeeId"
                  control={control}
                  rules={{ required: "Employee Id is required" }}
                  render={({ field }) => (
                    <>
                      <StyledTextField
                        {...field}
                        label="Employee ID"
                        sx={{ flex: 1 }}
                      />
                      {errors.employeeId && (
                        <span style={{ color: "red" }}>
                          {errors.employeeId.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </Grid>
              <Grid item md="6">
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: "Name is required" }}
                  render={({ field }) => (
                    <>
                      {" "}
                      <StyledTextField
                        {...field}
                        label="Name"
                        sx={{ flex: 1 }}
                      />{" "}
                      {errors.name && (
                        <span style={{ color: "red" }}>
                          {errors.name.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </Grid>{" "}
              <Grid item md="6">
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: "Email is required" }}
                  render={({ field }) => (
                    <>
                      <StyledTextField
                        {...field}
                        label="E-mail ID"
                        sx={{ flex: 1 }}
                      />{" "}
                      {errors.email && (
                        <span style={{ color: "red" }}>
                          {errors.email.message}
                        </span>
                      )}{" "}
                    </>
                  )}
                />
              </Grid>
              <Grid item md="6">
                <Controller
                  name="mobile"
                  control={control}
                  rules={{ required: "Mobile Number is required" }}
                  render={({ field }) => (
                    <>
                      <StyledTextField
                        {...field}
                        label="Phone No"
                        sx={{ flex: 1 }}
                      />{" "}
                      {errors.mobile && (
                        <span style={{ color: "red" }}>
                          {errors.mobile.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </Grid>
              <Grid item md="6">
                <Controller
                  name="tier"
                  control={control}
                  rules={{ required: "Tier is required" }}
                  render={({ field }) => (
                    <>
                      <StyledSelectField
                        {...field}
                        placeholder="Tier"
                        options={tierOptions}
                        sx={{ flex: 1 }}
                      />{" "}
                      {errors.tier && (
                        <span style={{ color: "red" }}>
                          {errors.tier.message}
                        </span>
                      )}{" "}
                    </>
                  )}
                />
              </Grid>
              <Grid item md="6">
                <Controller
                  name="userType"
                  control={control}
                  rules={{ required: "User Type is required" }}
                  render={({ field }) => (
                    <>
                      <StyledSelectField
                        {...field}
                        placeholder="User Type"
                        options={roleOptions}
                        sx={{ flex: 1 }}
                      />
                      {errors.userType && (
                        <span style={{ color: "red" }}>
                          {errors.userType.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </Grid>
              <Grid item md="6">
                <Controller
                  name="approver"
                  control={control}
                  // rules={{ required: "Approver is required" }}
                  render={({ field }) => (
                    <>
                      <StyledSelectField
                        {...field}
                        placeholder="Approver"
                        options={approverOptions}
                        sx={{ flex: 1 }}
                      />{" "}
                      {/* {errors.approver && (
                        <span style={{ color: "red" }}>
                          {errors.approver.message}
                        </span>
                      )}{" "} */}
                    </>
                  )}
                />
              </Grid>
              <Grid item md="6">
                <Controller
                  name="designation"
                  control={control}
                  rules={{ required: "Designation is required" }}
                  render={({ field }) => (
                    <>
                      <StyledTextField
                        {...field}
                        label="Designation"
                        sx={{ flex: 1 }}
                      />{" "}
                      {errors.designation && (
                        <span style={{ color: "red" }}>
                          {errors.designation.message}
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
                  rules={{ required: "Location is required" }}
                  render={({ field }) => (
                    <>
                      <StyledSelectField
                        {...field}
                        placeholder="Location"
                        options={optionData}
                        sx={{ flex: 1 }}
                      />
                      {errors.location && (
                        <span style={{ color: "red" }}>
                          {errors.location.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </Grid>
              <Grid item md="6">
                <Controller
                  name="image"
                  control={control}
                  render={({ field }) => (
                    <>
                      <StyledInputFile
                        {...field}
                        placeholder="Upload Image"
                        endIcon={<UploadImageIcon />}
                        onChange={handleFileChange}
                      />
                    </>
                  )}
                />
              </Grid>
              <Grid item md={6} sm={6}></Grid>
              <Grid item md={6} sm={6}>
                <Stack direction="row" spacing={2} justifyContent="flex-end">
                  <StyledButton
                    variant="secondary"
                    sx={{ padding: "15px 50px" }}
                    onClick={(event) => handleClear(event)}
                    name="Back"
                  />
                  <StyledButton
                    type="submit"
                    variant="primary"
                    sx={{ padding: "15px 50px" }}
                    name={loading ? "Loading..." : "Save"}
                    disabled={loading}
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
