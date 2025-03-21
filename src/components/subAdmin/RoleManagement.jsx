import React, { useEffect, useState } from "react";
import StyledButton from "../../ui/StyledButton";
import {
  Box,
  Dialog,
  DialogContent,
  Divider,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import StyledSwitch from "../../ui/StyledSwitch";
import StyledInput from "../../ui/StyledInput";
import StyledSelectField from "../../ui/StyledSelectField";
import { Controller, useForm } from "react-hook-form";
import { useRoleStore } from "../../store/roleStore";
import { toast } from "react-toastify";

const RoleManagement = ({ open, onClose, onChange, isUpdate = false }) => {
  const initialPermissions = {
    adminManagement_view: false,
    adminManagement_modify: false,
    roleManagement_view: false,
    roleManagement_modify: false,
    eventManagement_view: false,
    eventManagement_modify: false,
    userManagement_view: false,
    userManagement_modify: false,
    tierManagement_view: false,
    tierManagement_modify: false,
    financeManagement_view: false,
    financeManagement_modify: false,
    policyManagement_view: false,
    policyManagement_modify: false,
    transactionManagement_view: false,
    transactionManagement_modify: false,
  };

  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addRoles, updateRoles, role } = useRoleStore();
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      roleName: "",
      location: [],
    },
  });

  const [selectedTab, setSelectedTab] = useState("functional");
  const [permissions, setPermissions] = useState(initialPermissions);

  useEffect(() => {
    if (isUpdate && role) {
      reset({
        roleName: role?.roleName,
        location: role?.locationAccess?.map((loc) => ({
          value: loc,
          label: loc.charAt(0).toUpperCase() + loc.slice(1),
        })),
      });
      setPermissions(
        role?.permissions?.reduce(
          (acc, perm) => ({ ...acc, [perm]: true }),
          initialPermissions
        ) || initialPermissions
      );
    } else {
      reset({
        roleName: "",
        location: [],
      });
      setPermissions(initialPermissions);
    }
  }, [isUpdate, role, reset]);

  const handleClear = (event) => {
    event.preventDefault();
    setPermissions(initialPermissions);
    reset({
      roleName: "",
      location: [],
    });
    onClose();
  };

  const handleSwitchChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSpanClick = (permission) => {
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [permission]: !prevPermissions[permission],
    }));
  };

  const tableCellStyle = {
    color: "#4D515A",
    fontSize: "14px",
    textAlign: "center",
  };

  const spanStyle = (filled) => ({
    display: "inline-block",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: filled ? "#002B9B" : "transparent",
    border: "4px solid #d5dff2",
    cursor: "pointer",
  });

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const permissionConfig = [
    {
      key: "adminManagement",
      label: "Admin Management",
    },
    {
      key: "roleManagement",
      label: "Role Management",
    },
    {
      key: "eventManagement",
      label: "Event Management",
    },
    {
      key: "tierManagement",
      label: "Tier Management",
    },
    {
      key: "userManagement",
      label: "User Management",
    },
    {
      key: "financeManagement",
      label: "Finance Management",
    },
    {
      key: "policyManagement",
      label: "Policy Management",
    },
    {
      key: "transactionManagement",
      label: "Transaction Management",
    },
  ];

  const renderPermissionRows = () => {
    return permissionConfig?.map((perm) => (
      <TableRow
        key={perm?.key}
        sx={{
          backgroundColor: "#f9f9f9",
          borderBottom: "1px solid #ddd",
        }}
      >
        <TableCell sx={tableCellStyle}>{perm?.label}</TableCell>
        <TableCell sx={{ textAlign: "center" }}>
          <span
            style={spanStyle(permissions[`${perm?.key}_view`])}
            onClick={() => handleSpanClick(`${perm?.key}_view`)}
          ></span>
        </TableCell>
        <TableCell sx={{ textAlign: "center" }}>
          <span
            style={spanStyle(permissions[`${perm?.key}_modify`])}
            onClick={() => handleSpanClick(`${perm?.key}_modify`)}
          ></span>
        </TableCell>
      </TableRow>
    ));
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const selectedPermissions = Object.keys(permissions).filter(
        (key) => permissions[key]
      );

      const formData = {
        roleName: data.roleName,
        locationAccess: Array.isArray(data.location)
          ? data.location.map((location) => location.value)
          : [data.location.value],
        permissions: selectedPermissions,
        status: isChecked,
      };

      if (isUpdate) {
        if (role?._id) {
          await updateRoles(role._id, formData);
        } else {
          console.error("Role ID is undefined");
        }
      } else {
        await addRoles(formData);
      }

      onClose();
      onChange();
      reset({
        roleName: "",
        location: [],
      });
      setPermissions(initialPermissions);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="481px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent
          sx={{
            height: "auto",
            width: "480px",
            padding: 0,
            minHeight: "590px",
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
            marginTop={"10px"}
            padding={3}
            paddingBottom={0}
          >
            <Typography variant="h11">Role Management</Typography>
            <StyledSwitch
              checked={isChecked}
              onChange={handleSwitchChange}
              variant={"primary"}
            />
          </Box>
          <Divider />

          <Box padding={2}>
            <Controller
              name="roleName"
              control={control}
              render={({ field }) => (
                <StyledInput
                  {...field}
                  placeholder={"Enter Role Name"}
                  sx={{ flex: 1 }}
                />
              )}
            />
            <Box display="flex" width={"50%"} paddingTop={2} gap={2}>
              <Button
                style={{
                  cursor: "pointer",
                  textTransform: "none",
                  backgroundColor:
                    selectedTab === "functional" ? "#002B9B" : "#fff",
                  border: "1px solid rgba(226, 232, 240, 1)",
                  padding: "10px",
                  color: selectedTab === "functional" ? "#fff" : "#4D515A",
                }}
                onClick={() => setSelectedTab("functional")}
              >
                Functional
              </Button>
              <Button
                style={{
                  cursor: "pointer",
                  textTransform: "none",
                  backgroundColor:
                    selectedTab === "locational" ? "#002B9B" : "#fff",
                  border: "1px solid rgba(226, 232, 240, 1)",
                  padding: "10px",
                  color: selectedTab === "locational" ? "#fff" : "#4D515A",
                }}
                onClick={() => setSelectedTab("locational")}
              >
                Locational
              </Button>
            </Box>
          </Box>

          {selectedTab === "functional" ? (
            <TableContainer
              component={Paper}
              sx={{ marginTop: 0, paddingLeft: 2, paddingRight: 2 }}
            >
              <Table>
                <TableHead
                  sx={{
                    backgroundColor: "#d5dff2",
                    borderBottom: "2px solid #002B9B",
                  }}
                >
                  <TableRow sx={{ textTransform: "uppercase" }}>
                    <TableCell sx={tableCellStyle}>Permission</TableCell>
                    <TableCell sx={tableCellStyle}>View</TableCell>
                    <TableCell sx={tableCellStyle}>Modify</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody
                  sx={{
                    pointerEvents: "auto",
                    opacity: 1,
                  }}
                >
                  {permissions && renderPermissionRows()}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Box padding={2}>
              <Controller
                name="location"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledSelectField
                    {...field}
                    isMulti={true}
                    placeholder={"Choose Location"}
                    options={options}
                    sx={{ flex: 1 }}
                  />
                )}
              />
            </Box>
          )}
        </DialogContent>{" "}
        <Box display="flex" padding={3} gap={2}>
          <StyledButton
            variant="secondary"
            name="Cancel"
            onClick={(event) => handleClear(event)}
            disabled={loading}
          />
          <StyledButton
            variant="primary"
            name={loading ? "Loading..." : "Save"}
            type="submit"
            disabled={loading}
          />
        </Box>
      </form>
    </Dialog>
  );
};

export default RoleManagement;
