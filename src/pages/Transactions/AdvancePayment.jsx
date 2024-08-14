import { Box, Dialog, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import StyledButton from "../../ui/StyledButton";
import StyledTextField from "../../ui/StyledTextField";
import { Controller, useForm } from "react-hook-form";
import StyledTextArea from "../../ui/StyledTextArea";
import StyledSelectField from "../../ui/StyledSelectField";

const AdvancePayment = ({ open, onClose, onChange }) => {
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

  const onSubmit = async (data) => {};

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <Box padding={3}>
        <Stack spacing={2}>
          <h2 style={{ flexGrow: 1, textAlign: "center" }}>Advance Payment</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={4} padding={6}>
              <Grid item md="6">
                {" "}
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Typography variant="h3" color={"#79747E"}>
                    Transaction ID :
                  </Typography>
                  <Typography variant="h3">myjfjf6563ytgi</Typography>{" "}
                </Stack>
              </Grid>
              <Grid item md="6">
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Typography variant="h3" color={"#79747E"}>
                    Requested by :
                  </Typography>
                  <Typography variant="h3">Admin name</Typography>{" "}
                </Stack>
              </Grid>
              <Grid item md="6">
                {" "}
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Typography variant="h3" color={"#79747E"}>
                    Staff name :
                  </Typography>
                  <Typography variant="h3">myjfjf6563ytgi</Typography>{" "}
                </Stack>
              </Grid>
              <Grid item md="6">
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Typography variant="h3" color={"#79747E"}>
                    Requested on :
                  </Typography>
                  <Typography variant="h3">Admin name</Typography>{" "}
                </Stack>
              </Grid>
              <Grid item md="6">
                {" "}
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Typography variant="h3" color={"#79747E"}>
                    Amount :
                  </Typography>
                  <Typography variant="h3">myjfjf6563ytgi</Typography>{" "}
                </Stack>
              </Grid>
              <Grid item md="6">
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Typography variant="h3" color={"#79747E"}>
                    Paid by :
                  </Typography>
                  <Typography variant="h3">Admin name</Typography>{" "}
                </Stack>
              </Grid>
              <Grid item md="6">
                {" "}
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Typography variant="h3" color={"#79747E"}>
                    Status :
                  </Typography>
                  <Typography variant="h3">myjfjf6563ytgi</Typography>{" "}
                </Stack>
              </Grid>
              <Grid item md="6">
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Typography variant="h3" color={"#79747E"}>
                    Paid on :
                  </Typography>
                  <Typography variant="h3">Admin name</Typography>{" "}
                </Stack>
              </Grid>
              <Grid item md="6">
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Typography variant="h3" color={"#79747E"}>
                    Payment method:
                  </Typography>
                  <Typography variant="h3">Admin name</Typography>{" "}
                </Stack>
              </Grid>
              <Grid item md="12">
                <Stack spacing={2}>
                  <Typography variant="h3" color={"#79747E"}>
                    Descripition
                  </Typography>
                  <Typography variant="h3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur
                  </Typography>{" "}
                </Stack>
              </Grid>
              <Grid item md="12">
                <Controller
                  name="amount"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Amount is required" }}
                  render={({ field }) => (
                    <>
                      <StyledSelectField
                        {...field}
                        placeholder="Choose Payment method"
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
                    name="Make Payment"
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

export default AdvancePayment;
