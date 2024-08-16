import { Box, Dialog, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import StyledButton from "../../ui/StyledButton";
import StyledTextField from "../../ui/StyledTextField";
import { Controller, useForm } from "react-hook-form";
import StyledTextArea from "../../ui/StyledTextArea";
import StyledSelectField from "../../ui/StyledSelectField";
import { useTransactionStore } from "../../store/transactionStore";

const AdvancePayment = ({ open, onClose, onChange, isUpdate = false }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { transaction, updateTransactions } = useTransactionStore();
  const handleClear = (event) => {
    event.preventDefault();
    onClose();
  };
  const options = [
    { value: "Bank Transfer", label: "Bank Transfer" },
    { value: "Cash", label: "Cash" },
    { value: "Credit card", label: "Credit card" },
    { value: "Other", label: "Other" },
  ];

  const onSubmit = async (data) => {
    const formData = {
      paymentMethod: data?.paymentMethod?.value,
    };
    await updateTransactions(transaction._id, formData);
    onChange();
    onClose();
    reset();
  };
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <Box padding={3}>
        <Stack spacing={2}>
          <h2 style={{ flexGrow: 1, textAlign: "center" }}>Advance Payment</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={4} padding={6}>
              {transaction?.status !== "pending" && (
                <Grid item md="6">
                  {" "}
                  <Stack direction={"row"} justifyContent={"space-between"}>
                    <Typography variant="h3" color={"#79747E"}>
                      Transaction ID :
                    </Typography>
                    <Typography variant="h3">{transaction?.id}</Typography>{" "}
                  </Stack>
                </Grid>
              )}
              <Grid item md="6">
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Typography variant="h3" color={"#79747E"}>
                    Requested by :
                  </Typography>
                  <Typography variant="h3">
                    {transaction?.requestedBy?.sender.name}
                  </Typography>{" "}
                </Stack>
              </Grid>
              <Grid item md="6">
                {" "}
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Typography variant="h3" color={"#79747E"}>
                    Staff name :
                  </Typography>
                  <Typography variant="h3">
                    {" "}
                    {transaction?.requestedBy?.receiver.name}
                  </Typography>{" "}
                </Stack>
              </Grid>
              <Grid item md="6">
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Typography variant="h3" color={"#79747E"}>
                    Requested on :
                  </Typography>
                  <Typography variant="h3">{transaction?.createdAt}</Typography>{" "}
                </Stack>
              </Grid>{" "}
              {transaction?.status !== "pending" && (
                <>
                  <Grid item md="6">
                    {" "}
                    <Stack direction={"row"} justifyContent={"space-between"}>
                      <Typography variant="h3" color={"#79747E"}>
                        Amount :
                      </Typography>
                      <Typography variant="h3">
                        {transaction?.amount}
                      </Typography>{" "}
                    </Stack>
                  </Grid>
                  <Grid item md="6">
                    <Stack direction={"row"} justifyContent={"space-between"}>
                      <Typography variant="h3" color={"#79747E"}>
                        Paid by :
                      </Typography>
                      <Typography variant="h3">
                        {transaction?.paidBy.name}
                      </Typography>{" "}
                    </Stack>
                  </Grid>{" "}
                </>
              )}
              <Grid item md="6">
                {" "}
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Typography variant="h3" color={"#79747E"}>
                    Status :
                  </Typography>
                  <Typography variant="h3">{transaction?.status}</Typography>{" "}
                </Stack>
              </Grid>
              {transaction?.status !== "pending" && (
                <>
                  <Grid item md="6">
                    <Stack direction={"row"} justifyContent={"space-between"}>
                      <Typography variant="h3" color={"#79747E"}>
                        Paid on :
                      </Typography>
                      <Typography variant="h3">
                        {transaction?.paidOn}
                      </Typography>{" "}
                    </Stack>
                  </Grid>
                  <Grid item md="6">
                    <Stack direction={"row"} justifyContent={"space-between"}>
                      <Typography variant="h3" color={"#79747E"}>
                        Payment method:
                      </Typography>
                      <Typography variant="h3">
                        {transaction?.paymentMethod}
                      </Typography>{" "}
                    </Stack>
                  </Grid>{" "}
                </>
              )}
              <Grid item md="12">
                <Stack spacing={2}>
                  <Typography variant="h3" color={"#79747E"}>
                    Descripition
                  </Typography>
                  <Typography variant="h3">
                    {transaction?.description}
                  </Typography>{" "}
                </Stack>
              </Grid>{" "}
              {transaction?.status === "pending" && (
                <Grid item md="12" paddingBottom={4}>
                  <Controller
                    name="paymentMethod"
                    control={control} 
                    defaultValue=""
                    rules={{ required: "Amount is required" }}
                    render={({ field }) => (
                      <>
                        <StyledSelectField
                          {...field}
                          placeholder="Choose Payment method"
                          options={options}
                          sx={{ width: "100%" }}
                        />
                        {errors.paymentMethod && (
                          <span style={{ color: "red" }}>
                            {errors.paymentMethod.message}
                          </span>
                        )}
                      </>
                    )}
                  />
                </Grid>
              )}
              <Grid item md={6} sm={6}></Grid>
              {/* {isUpdate && <Grid item md={6} sm={6}></Grid>} */}{" "}
              {transaction?.status === "pending" && (
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
                      name="Make Payment"
                    />
                  </Stack>
                </Grid>
              )}
            </Grid>
          </form>
        </Stack>
      </Box>
    </Dialog>
  );
};

export default AdvancePayment;
