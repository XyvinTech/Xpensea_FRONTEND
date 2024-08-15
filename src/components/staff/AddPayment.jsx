import { Box, Dialog, Grid, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import StyledButton from "../../ui/StyledButton";
import StyledTextField from "../../ui/StyledTextField";
import { Controller, useForm } from "react-hook-form";
import ConfirmPayment from "./ConfirmPayment";
import { useAdminStore } from "../../store/adminStore";

const AddPayment = ({ open, onClose, onChange, id }) => {
  const [approveOpen, setApproveOpen] = useState(false);
  const { admin } = useAdminStore();
  const [formData, setFormData] = useState(null);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleClear = (event) => {
    event.preventDefault();
    onClose();
  };
  const handleApprove = async () => {
    onChange();

    handleCloseApprove();
  };
  const onSubmit = async (data) => {
    const newFormData = {
      amount: data?.amount,
      description: data.description,
      requestedBy: {
        sender: admin._id,
        receiver: id,
      },
    };
    setFormData(newFormData);

    setApproveOpen(true);
  };

  const handleCloseApprove = () => {
    setApproveOpen(false);

    onChange();
    onClose();
    reset();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <Box padding={3}>
        <Stack spacing={2}>
          <h2 style={{ flexGrow: 1, textAlign: "center" }}>Add Payment</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} padding={2}>
              <Grid item md="12">
                <Controller
                  name="amount"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Amount is required" }}
                  render={({ field }) => (
                    <>
                      <StyledTextField
                        {...field}
                        label="Amount"
                        sx={{ width: "100%" }}
                      />
                      {errors.amount && (
                        <span style={{ color: "red" }}>
                          {errors.amount.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </Grid>{" "}
              <Grid item md="12">
                <Controller
                  name="description"
                  control={control}
                  rules={{ required: "Description" }}
                  defaultValue=""
                  render={({ field }) => (
                    <>
                      <StyledTextField
                        {...field}
                        label="Description"
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
              </Grid>{" "}
              <Grid item md={6} sm={6}></Grid>
              {/* {isUpdate && <Grid item md={6} sm={6}></Grid>} */}
              <Grid item md={6} sm={6}>
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
                    name="Save"
                  />
                </Stack>
              </Grid>
              <ConfirmPayment
                open={approveOpen}
                onApprove={handleApprove}
                onClose={handleCloseApprove}
                formData={formData}
              />
            </Grid>{" "}
          </form>
        </Stack>
      </Box>
    </Dialog>
  );
};

export default AddPayment;
