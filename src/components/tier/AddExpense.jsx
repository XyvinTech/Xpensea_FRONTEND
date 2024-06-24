import { Box, Dialog, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import StyledButton from "../../ui/StyledButton";
import StyledInput from "../../ui/StyledInput";
import { CrossIcon } from "../../assets/icons/CrossIcon";
import StyledSwitch from "../../ui/StyledSwitch";
import tierData from "../../assets/json/TierData";
import StyledTextField from "../../ui/StyledTextField";

const AddExpense = ({ open, onClose }) => {
  const [data, setData] = useState(tierData);

  const handleSwitchChange = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, expense: item.expense === "true" ? "false" : "true" } : item
      )
    );
  };

  const handleClear = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <Box padding={3}>
        <Stack spacing={2}>
          <Box display="flex" justifyContent="space-between" alignItems="center" position="relative">
            <Box flexGrow={1} />
            <h2 style={{ flexGrow: 1 }}>Tier</h2>
            <Box position="absolute" right={0} onClick={handleClear}>
              <CrossIcon />
            </Box>
          </Box>

          <Stack direction="row" spacing={2}>
            <StyledInput placeholder={"Tier Title"} sx={{ flex: 1 }} />
            <StyledInput placeholder={"Activation Date"} sx={{ flex: 1 }} />
          </Stack>

          {data.map((item) => (
            <Grid container key={item.id} spacing={1}>
              <Grid item xs={12} md={6} padding={2}>
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Typography variant="subtitle1" fontWeight={"500"}>
                    Total Expense
                  </Typography>
                  <StyledSwitch
                    checked={item.expense === "true"}
                    onChange={() => handleSwitchChange(item.id)}
                    variant="primary"
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <StyledTextField
                  label={"Max Time"}
                  value={item.amount}
                  // disabled={item.expense === "false"}
                  sx={{ flex: 1 }}
                />
              </Grid>
            </Grid>
          ))}

          <Stack direction="row" spacing={2}>
            <StyledInput placeholder={"Event Expense"} sx={{ flex: 1 }} />
            <StyledInput placeholder={"Max Time"} sx={{ flex: 1 }} />
          </Stack>

          <Grid container spacing={1}>
            <Grid item md={6} sm={6}></Grid>
            <Grid item md={6} sm={6}>
              <Stack direction="row" spacing={2} justifyContent="flex-end">
                <StyledButton
                  variant="white"
                  padding="15px 50px"
                  name="Add Expense"
                  onClick={() => onPageChange(null, "prev")}
                />
                <StyledButton
                  variant="primary"
                  padding="15px 50px"
                  name="Save"
                  onClick={() => onPageChange(null, "next")}
                />
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Dialog>
  );
};

export default AddExpense;
