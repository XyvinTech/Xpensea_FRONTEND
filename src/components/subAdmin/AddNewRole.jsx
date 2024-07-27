import { Box, Dialog, Grid, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import StyledTextField from "../../ui/StyledTextField";
import StyledButton from "../../ui/StyledButton";
import StyledSelectField from "../../ui/StyledSelectField";
import StyledSwitch from "../../ui/StyledSwitch";
import { Divider } from "antd";
import { Controller, useForm } from "react-hook-form";
import { useDropDownStore } from "../../store/useDropDownStore";
import { useAdminStore } from "../../store/adminStore";

const AddNewRole = ({ open, onClose, onChange, isUpdate = false }) => {
  const { roles, fetchRoles } = useDropDownStore();
  const { addAdmins, updateAdmins, admins } = useAdminStore();

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
      designation: "",
      role: "",
    },
  });

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (isUpdate && admins) {
      reset({
        name: admins.name || "",
        email: admins.email || "",
        mobile: admins.mobile || "",
        designation: admins.designation
          ? { value: admins.designation, label: admins.designation }
          : "",
        role: admins.role ? { value: admins.role, label: admins.role } : "",
      });
      setIsChecked(admins.status || false);
    } else {
      reset({
        name: "",
        email: "",
        mobile: "",
        designation: "",
        role: "",
      });
      setIsChecked(false);
    }
  }, [isUpdate, admins, reset]);

  const handleSwitchChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleClear = (event) => {
    event.preventDefault();
    reset({
      name: "",
      email: "",
      mobile: "",
      designation: "",
      role: "",
    });
    setIsChecked(false);
    onClose();
  };

  const designation = [{ value: "Administrator", label: "Administrator" },
    { value: "Tester", label: "Tester" },
    { value: "Financer", label: "Financer" }
  ];

  useEffect(() => {
    fetchRoles();
  }, [fetchRoles]);

  const roleOptions =
    roles && Array.isArray(roles)
      ? roles.map((list) => ({
          value: list?._id,
          label: list?.roleName,
        }))
      : [];

  const onSubmit = async (data) => {
    const formData = {
      name: data.name,
      email: data.email,
      mobile: data.mobile,
      role: data.role.value,
      password: "12345",
      designation: data.designation.value,
      status: isChecked,
    };
    const upData = {
      name: data.name,
      email: data.email,
      mobile: data.mobile,
      role: data.role.value,
      designation: data.designation.value,
      status: isChecked,
    };

    if (isUpdate) {
      await updateAdmins(admins._id, upData);
    } else {
      await addAdmins(formData);
    }
    onClose();
    onChange();
    reset({
      name: "",
      email: "",
      mobile: "",
      designation: "",
      role: "",
    });
    setIsChecked(false);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <Box padding={3}>
        <Stack spacing={2}>
          <Box display="flex" justifyContent="space-between">
            <h2 style={{ flexGrow: 1 }}>
              {isUpdate ? "Edit Admin" : "Add New Admin"}
            </h2>
            <StyledSwitch
              variant={"primary"}
              checked={isChecked}
              onChange={handleSwitchChange}
            />
          </Box>
          <Divider />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} padding={1}>
              <Grid item md="12">
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: "Name is required" }}
                  render={({ field }) => (
                    <>
                      <StyledTextField
                        {...field}
                        label={"Name"}
                        sx={{ flex: 1 }}
                      />
                      {errors.name && (
                        <span style={{ color: "red" }}>
                          {errors.name.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </Grid>
              <Grid item md="12">
                <Controller
                  name="role"
                  control={control}
                  rules={{ required: "Role is required" }}
                  render={({ field }) => (
                    <>
                      <StyledSelectField
                        {...field}
                        placeholder={"Choose a Role"}
                        options={roleOptions}
                        sx={{ flex: 1 }}
                      />
                      {errors.role && (
                        <span style={{ color: "red" }}>
                          {errors.role.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </Grid>
              <Grid item md="12">
                <Controller
                  name="designation"
                  control={control}
                  rules={{ required: "Designation is required" }}
                  render={({ field }) => (
                    <>
                      <StyledSelectField
                        {...field}
                        placeholder={"Designation"}
                        options={designation}
                        sx={{ flex: 1 }}
                      />
                      {errors.designation && (
                        <span style={{ color: "red" }}>
                          {errors.designation.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </Grid>
              <Grid item md="12">
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: "Email is required" }}
                  render={({ field }) => (
                    <>
                      <StyledTextField
                        {...field}
                        label={"Email"}
                        sx={{ flex: 1 }}
                      />
                      {errors.email && (
                        <span style={{ color: "red" }}>
                          {errors.email.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </Grid>
              <Grid item md="12">
                <Controller
                  name="mobile"
                  control={control}
                  rules={{ required: "Phone Number is required" }}
                  render={({ field }) => (
                    <>
                      <StyledTextField
                        {...field}
                        label={"Phone Number"}
                        sx={{ flex: 1 }}
                      />
                      {errors.mobile && (
                        <span style={{ color: "red" }}>
                          {errors.mobile.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </Grid>
              <Grid item md={6} sm={6}></Grid>
              <Grid item md={6} sm={6}>
                <Stack
                  direction="row"
                  spacing={2}
                  paddingTop={2}
                  justifyContent="flex-end"
                  paddingBottom={2}
                >
                  <StyledButton
                    variant="secondary"
                    padding="15px 50px"
                    name="Cancel"
                    onClick={(event) => handleClear(event)}
                  />
                  <StyledButton
                    variant="primary"
                    padding="15px 50px"
                    name="Save"
                    type="submit"
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

export default AddNewRole;
