import { Box, Dialog, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import StyledTextField from "../../ui/StyledTextField";
import StyledSelectField from "../../ui/StyledSelectField";
import StyledTextArea from "../../ui/StyledTextArea";
import StyledButton from "../../ui/StyledButton";
import StyledInput from "../../ui/StyledInput";
import descriptionData from "../../assets/json/ReportData";
import { PolicyDateIcon } from "../../assets/icons/PolicyDateIcon";
import { Grid } from "@mui/material";
import CalendarInput from "../../ui/CalenderInput";
import { Controller, useForm } from "react-hook-form";
import { useDropDownStore } from "../../store/useDropDownStore";
import { usePolicyStore } from "../../store/policyStore";
import { toast } from "react-toastify";

const PolicyEdit = ({ open, onClose, onChange, isUpdate = false }) => {
  const { control, handleSubmit, reset } = useForm();
  const { addPolicies, policy, updatePolicies } = usePolicyStore();
  const { tiers, fetchTiers } = useDropDownStore();
  const[loading, setLoading] = useState(false);
  const handleClear = (event) => {
    event.preventDefault();
    onClose();
  };
  useEffect(() => {
    fetchTiers();
  }, []);
  const roleOptions = [
    { value: "submitter", label: "Submitter" },
    { value: "approver", label: "Approver" },
  ];

  const options = [
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
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const formData = {
        policyTitle: data?.policyTitle,
        tier: data.tier.value,
        userType: data.userType.value,
        location: data.location.value,
        activationDate: data?.activationDate,
        policyDetails: data?.policyDetails,
        accuracy: data?.accuracy,
        authenticity: data?.authenticity,
        compliance: data?.compliance,
        relevance: data?.relevance,
        completeness: data?.completeness,
      };
      if (isUpdate) {
        await updatePolicies(policy._id, formData);
      } else {
        await addPolicies(formData);
      }
      onChange();
      onClose();
      reset();
    } catch (error) {
      toast.error(error.message);
    }
    finally{
      setLoading(false);
    }
  };
  useEffect(() => {
    if (isUpdate && policy) {
      reset({
        policyTitle: policy?.policyTitle,
        tier: { value: policy?.tier?._id, label: policy?.tier?._id },
        location: policy.location
          ? { value: policy.location, label: policy.location }
          : "",
        userType: policy.userType
          ? { value: policy.userType, label: policy.userType }
          : "",
        activationDate: policy?.activationDate,
        policyDetails: policy?.policyDetails,
        accuracy: policy?.accuracy,
        authenticity: policy?.authenticity,
        compliance: policy?.compliance,
        relevance: policy?.relevance,
        completeness: policy?.completeness,
      });
    } else {
      reset({
        policyTitle: "",
        userType: "",
        location: "",
        tier: "",
        activationDate: "",
        policyDetails: "",
        accuracy: "",
        relevance: "",
        compliance: "",
        authenticity: "",
        completeness: "",
      });
    }
    // setIsChecked(admins?.status || false);
  }, [isUpdate, policy, reset]);
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
                name="policyTitle"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledTextField
                    {...field}
                    label={"Policy Title"}
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
                defaultValue=""
                render={({ field }) => (
                  <StyledSelectField
                    {...field}
                    placeholder={"User Type"}
                    options={roleOptions}
                    sx={{ flex: 1 }}
                  />
                )}
              />

              <Controller
                name="activationDate"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <CalendarInput
                    {...field}
                    placeholder={"Activation Date"}
                    dateValue={field.value}
                    onDateChange={field.onChange}
                  />
                )}
              />
            </Stack>
            <Stack direction="row" paddingBottom={2}>
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
                name="policyDetails"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledTextArea {...field} placeholder={"Policy Details"} />
                )}
              />
            </Stack>
            <Stack direction="row" spacing={2} paddingBottom={2}>
              <Controller
                name="accuracy"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledTextField
                    {...field}
                    description={
                      "Mention policy for checking ACCURACY on a scale of 10"
                    }
                    label={"Accuracy "}
                    sx={{ flex: 1 }}
                  />
                )}
              />{" "}
            </Stack>
            <Stack direction="row" spacing={2} paddingBottom={2}>
              <Controller
                name="authenticity"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledTextField
                    {...field}
                    description={
                      "Mention policy for checking Authenticity on a scale of 10"
                    }
                    label={"Authenticity"}
                    sx={{ flex: 1 }}
                  />
                )}
              />{" "}
            </Stack>
            <Stack direction="row" spacing={2} paddingBottom={2}>
              <Controller
                name="compliance"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledTextField
                    {...field}
                    description={
                      "Mention policy for checking Compliance on a scale of 10"
                    }
                    label={"Compliance"}
                    sx={{ flex: 1 }}
                  />
                )}
              />{" "}
            </Stack>
            <Stack direction="row" spacing={2} paddingBottom={2}>
              <Controller
                name="relevance"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledTextField
                    {...field}
                    description={
                      "Mention policy for checking Relevance on a scale of 10"
                    }
                    label={"Relevance"}
                    sx={{ flex: 1 }}
                  />
                )}
              />{" "}
            </Stack>
            <Stack direction="row" spacing={2} paddingBottom={2}>
              <Controller
                name="completeness"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledTextField
                    {...field}
                    description={
                      "Mention policy for checking Completeness on a scale of 10"
                    }
                    label={"Completeness"}
                    sx={{ flex: 1 }}
                  />
                )}
              />{" "}
            </Stack>{" "}
            <Stack direction="row" spacing={2} justifyContent="flex-end">
              {" "}
              <StyledButton
                variant="secondary"
                padding="15px 50px 15px 50px"
                name="Back"
                onClick={(event) => handleClear(event)}
              />
              <StyledButton
                variant="primary"
                type="submit"
                padding="15px 50px 15px 50px"
                name={loading ? "Saving..." : "Save"}
              />
            </Stack>
          </form>
        </Stack>
      </Box>
    </Dialog>
  );
};

export default PolicyEdit;
