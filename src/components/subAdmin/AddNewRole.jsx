import { Box, Dialog, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import StyledTextField from "../../ui/StyledTextField";
import StyledButton from "../../ui/StyledButton";
import StyledSelectField from "../../ui/StyledSelectField";
import StyledSwitch from "../../ui/StyledSwitch";
import { Divider } from "antd";
import { Controller, useForm } from "react-hook-form";
import { useDropDownStore } from "../../store/useDropDownStore";
import { useAdminStore } from "../../store/adminStore";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const AddNewRole = ({ open, onClose, onChange }) => {
  const { roles, fetchRoles } = useDropDownStore();
  const { addAdmins, updateAdmins, admins, isUpdate } = useAdminStore();
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: isUpdate ? admins?.name : "",
      email: isUpdate ? admins?.email : "",
      mobile: isUpdate ? admins?.mobile : "",
      designation: isUpdate
        ? { value: admins?.designation, label: admins?.designation }
        : "",
      role: isUpdate ? { value: admins?.role, label: admins?.role } : "",
    },
  });

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (isUpdate) {
      reset({
        name: admins?.name,
        email: admins?.email,
        mobile: admins?.mobile,
        designation: { value: admins?.designation, label: admins?.designation },
        role: { value: admins?.role, label: admins?.role },
      });
      setIsChecked(admins?.status || false);
    }
  }, [isUpdate, admins, reset]);

  const handleSwitchChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleClear = () => {
    onClose();
  };

  const designation = [{ value: "Administrator", label: "Administartor" }];

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

    if (isUpdate) {
      await updateAdmins(admins._id, formData);
    } else {
      await addAdmins(formData);
    }
    console.log("Form data:", formData);
    onClose();
    onChange();
    reset();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
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
          <Divider />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack direction="row" spacing={2} paddingBottom={2}>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <StyledTextField {...field} label={"Name"} sx={{ flex: 1 }} />
                )}
              />
            </Stack>

            <Stack direction="row" spacing={2} paddingBottom={2}>
              <Controller
                name="role"
                control={control}
                render={({ field }) => (
                  <StyledSelectField
                    {...field}
                    placeholder={"Choose a Role"}
                    options={roleOptions}
                    sx={{ flex: 1 }}
                  />
                )}
              />
            </Stack>

            <Stack direction="row" spacing={2} paddingBottom={2}>
              <Controller
                name="designation"
                control={control}
                render={({ field }) => (
                  <StyledSelectField
                    {...field}
                    placeholder={"Designation"}
                    options={designation}
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
                    label={"Email"}
                    sx={{ flex: 1 }}
                  />
                )}
              />
            </Stack>

            <Stack direction="row" spacing={2} paddingBottom={2}>
              <Controller
                name="mobile"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledTextField
                    {...field}
                    label={"Phone Number"}
                    sx={{ flex: 1 }}
                  />
                )}
              />
            </Stack>

            <Stack
              direction="row"
              spacing={2}
              justifyContent="flex-end"
              paddingBottom={2}
            >
              <StyledButton
                variant="secondary"
                padding="15px 50px 15px 50px"
                name="Cancel"
                onClick={handleClear}
              />
              <StyledButton
                variant="primary"
                padding="15px 50px 15px 50px"
                name="Save"
                type="submit"
              />
            </Stack>
          </form>
        </Stack>
      </Box>
    </Dialog>
  );
};

export default AddNewRole;
