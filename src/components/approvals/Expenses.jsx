import React, { useEffect, useState } from "react";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { ProgramIcon } from "../../assets/icons/ProgramIcon";
import { TripIcon } from "../../assets/icons/TripIcon";
import { StayIcon } from "../../assets/icons/StayIcon";
import { MiscellaneousIcon } from "../../assets/icons/MiscellaneousIcon";
import { MaintenanceIcon } from "../../assets/icons/MaintenanceIcon";
import { FoodIcon } from "../../assets/icons/FoodIcon";
import ExpenseDetail from "./ExpenseDetail";
const iconMapping = {
  Shopping: <ProgramIcon />,
  Travel: <TripIcon />,
  // Stay&Leisure: <StayIcon />,
  Miscellaneous: <MiscellaneousIcon />,
  Maintenance: <MaintenanceIcon />,
  Food: <FoodIcon />,
};
const Expenses = ({
  data,
  authenticExpenses,
  setAuthenticExpenses,
  rejectedExpenses,
  setRejectedExpenses,
}) => {
  const [detailOpen, setDetailOpen] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState(null);

  const handleOpenDetail = (item) => {
    setSelectedExpense(item);
    setDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setDetailOpen(false);
  };

  const handleMarkAuthentic = (item) => {
    if (!authenticExpenses.some((id) => id === item?._id)) {
      setAuthenticExpenses([...authenticExpenses, item?._id]);
    }
    setRejectedExpenses(rejectedExpenses.filter((id) => id !== item?._id));
    setDetailOpen(false);
  };

  const handleMarkFaulty = (item) => {
    if (!rejectedExpenses.some((id) => id === item?._id)) {
      setRejectedExpenses([...rejectedExpenses, item?._id]);
    }
    setAuthenticExpenses(authenticExpenses.filter((id) => id !== item?._id));
    setDetailOpen(false);
  };

  useEffect(() => {
    // console.log("Authenticated Expenses:", authenticExpenses);
  }, [authenticExpenses]);

  useEffect(() => {
    // console.log("Rejected Expenses:", rejectedExpenses);
  }, [rejectedExpenses]);

  return (
    <Stack bgcolor={"#fff"} borderRadius={"12px"}>
      <Typography padding={3} color={"#002B9B"} variant="h3" fontWeight={600}>
        Expenses
      </Typography>
      <Divider sx={{ width: "100%" }} />
      <Grid container>
        {data?.map((item) => (
          <Grid
            item
            key={item?._id}
            md={3}
            spacing={2}
            padding={2}
            paddingBottom={4}
            onClick={() => handleOpenDetail(item)}
            sx={{ cursor: "pointer" }}
          >
            <Box bgcolor={"#FDFDFD"} p={1} borderRadius={"8px"}>
              <Stack spacing={2}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  paddingLeft={2}
                  paddingRight={2}
                >
                  <Stack direction="row" spacing={1}>
                    {iconMapping[item?.category] || <StayIcon />}
                    <Stack direction="column" spacing={1}>
                      <Typography variant="h5" color={"#333333"}>
                        {item?.title}
                      </Typography>
                      <Typography variant="h4" fontWeight={"600"}>
                        {item?.amount}
                      </Typography>
                    </Stack>
                  </Stack>
                  <Typography variant="h4">
                    {item?.status === "approved" ||
                    authenticExpenses?.some((id) => id === item._id) ? (
                      <span
                        style={{
                          backgroundColor: "rgba(209, 250, 229, 0.5)",
                          borderRadius: "50%",
                          padding: "3px",
                          color: "green",
                        }}
                      >
                        {" "}
                        ✔
                      </span>
                    ) : (
                      <span
                        style={{
                          backgroundColor: "rgba(255, 228, 230, 0.5)",
                          borderRadius: "50%",
                          padding: "3px",
                          color: "red",
                        }}
                      >
                        {" "}
                        x
                      </span>
                    )}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  paddingLeft={2}
                  paddingRight={2}
                >
                  <Typography variant="h4" color={"#838485"}>
                    {item?.location}
                  </Typography>
                  <Typography
                    variant="h4"
                    color="#B4B4B4"
                    fontWeight={400}
                    style={{ cursor: "pointer" }}
                  >
                    {item?.createdAt}
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
      <ExpenseDetail
        open={detailOpen}
        onClose={handleCloseDetail}
        expense={selectedExpense}
        onMarkAuthentic={() => handleMarkAuthentic(selectedExpense)}
        onMarkFaulty={() => handleMarkFaulty(selectedExpense)}
      />
    </Stack>
  );
};

export default Expenses;
