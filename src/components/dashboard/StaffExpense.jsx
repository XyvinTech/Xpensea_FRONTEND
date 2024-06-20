import { Box, Divider, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import StyledCheckbox from "../../ui/StyledCheckbox";
import ExpenseData from "../../assets/json/ExpenseData";
import { FilterIcon } from "../../assets/icons/FilterIcon";
import StyledFilter from "../StyledFilter";
const StaffExpense = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  const handleOpenFilter = () => {
    setFilterOpen(true);
  };

  const handleCloseFilter = () => {
    setFilterOpen(false);
  };
  return (
    <Box sx={{ backgroundColor: "white",borderRadius:"8px" }}>
      <Stack spacing={4} padding={0} paddingBottom={0}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={0}padding={2}paddingBottom={0}
        >
          {" "}
          <Typography variant="h8" paddingTop={2} fontWeight="600">
            Staff Expense
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width={"44px"}
            height={"44px"}
            marginTop={3}
            borderRadius={"7px"}
            boxShadow={
              "0 -4px 6px -1px rgba(0, 0, 0, 0.01), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)"
            }
            onClick={handleOpenFilter}
          >
            <FilterIcon />
          </Box>
        </Stack>
        <Divider />
        {ExpenseData.map((item) => (
          <Stack key={item.id} spacing={2} padding={0}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <Stack direction="row" spacing={1}paddingLeft={2} paddingRight={2}>
                <StyledCheckbox />
                <Stack direction="column" spacing={1}>
                  <Typography variant="h5">{item.name}</Typography>
                  <Typography variant="h6">{item.type}</Typography>
                </Stack>
              </Stack>
              <Stack >
                {" "}
                <Typography variant="h6">{item.location}</Typography>{" "}
                <Typography variant="h6">{item.tier}</Typography>{" "}
              </Stack>
              <Typography
                variant="h4"
                color={"#79001D"}
                marginTop={1}paddingRight={2}
                fontWeight={600}
              >
                {item.price}
              </Typography>{" "}
            </Stack>

            <Divider />
          </Stack>
        ))}
      </Stack>
      <StyledFilter open={filterOpen} onClose={handleCloseFilter} />
    </Box>
  );
};

export default StaffExpense;
