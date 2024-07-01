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

const StaffDetailsAdd = ({ open, onClose, onChange }) => {
  const { tiers, fetchTiers } = useDropDownStore();
  const { addUsers, updateUsers, user, updateChange, isUpdate } =
    useUserStore();
  const [isChecked, setIsChecked] = useState(false);
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: isUpdate ? user?.name : "",
      email: isUpdate ? user?.email : "",
      mobile: isUpdate ? user?.mobile : "",
      employeeId: isUpdate ? user?.employeeId : "",
      tier: isUpdate ? { value: user?.tier?._id, label: user?.tierName } : "",
      userType: isUpdate ? { value: user?.userType, label: user?.userType } : "",
      location: isUpdate ? { value: user?.location, label: user?.location } : "",
    },
  });

  useEffect(() => {
    if (isUpdate) {
      reset({
        name: user?.name,
        email: user?.email,
        mobile: user?.mobile,
        employeeId: user?.employeeId,
        tier: { value: user?.tier?._id, label: user?.tierName },
        userType: { value: user?.userType, label: user?.userType },
        location: { value: user?.location, label: user?.location },
      });
      setIsChecked(user?.status || false);
    }
  }, [isUpdate, user, reset]);

  const handleClear = () => {
    updateChange(isUpdate);
    reset();
   
    onClose();
  };

  const onSubmit = async (data) => {
    const formData = {
      name: data.name,
      email: data.email,
      mobile: data.mobile,
      employeeId: data.employeeId,
      tier: data.tier.value,
      userType: data.userType.value,
      location: data.location.value,
      status: isChecked,
    };

    if (isUpdate) {
      await updateUsers(user._id, formData);
    } else {
      await addUsers(formData);
    }
    updateChange(isUpdate);
    onChange();
    reset();
    onClose();
   
  };

  const handleSwitchChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
  };

  useEffect(() => {
    fetchTiers();
  }, [fetchTiers]);

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
                render={({ field }) => (
                  <StyledTextField {...field} label="Name" sx={{ flex: 1 }} />
                )}
              />

              <Controller
                name="tier"
                control={control}
                render={({ field }) => (
                  <StyledSelectField
                    {...field}
                    placeholder="Tier"
                    options={tierOptions}
                    sx={{ flex: 1 }}
                  />
                )}
              />
            </Stack>

            <Stack direction="row" spacing={2} paddingBottom={2}>
              <Controller
                name="userType"
                control={control}
                render={({ field }) => (
                  <StyledSelectField
                    {...field}
                    placeholder="User Type"
                    options={roleOptions}
                    sx={{ flex: 1 }}
                  />
                )}
              />

              <Controller
                name="location"
                control={control}
                render={({ field }) => (
                  <StyledSelectField
                    {...field}
                    placeholder="Location"
                    options={optionData}
                    sx={{ flex: 1 }}
                  />
                )}
              />
            </Stack>

            <Stack direction="row" spacing={2} paddingBottom={2}>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <StyledTextField
                    {...field}
                    label="E-mail ID"
                    sx={{ flex: 1 }}
                  />
                )}
              />

              <Controller
                name="employeeId"
                control={control}
                render={({ field }) => (
                  <StyledTextField
                    {...field}
                    label="Employee ID"
                    sx={{ flex: 1 }}
                  />
                )}
              />
            </Stack>

            <Stack direction="row" spacing={2} paddingBottom={2}>
              <Controller
                name="mobile"
                control={control}
                render={({ field }) => (
                  <StyledTextField
                    {...field}
                    label="Phone No"
                    sx={{ flex: 1 }}
                  />
                )}
              />

              <Controller
                name="image"
                control={control}
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
                <Stack direction="row" spacing={2} justifyContent="flex-end">
                  <StyledButton
                    variant="secondary"
                    sx={{ padding: "15px 50px" }}
                    onClick={handleClear}
                    name="Back"
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
