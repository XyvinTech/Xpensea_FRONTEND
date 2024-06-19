import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import StyledChart from "../components/StyledChart";
import PendingApprovals from "../components/dashboard/PendingApprovel";
import StyledTable from "../ui/StyledTable";
import { userColumns, userData } from "../assets/json/TableData";
import StaffExpense from "../components/dashboard/StaffExpense";

const Dashboard = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const handleSelectionChange = (newSelectedIds) => {
    setSelectedRows(newSelectedIds);
    console.log("Selected items:", newSelectedIds);
  };
  const handleView = (id) => {
    console.log("View item:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete item :", id);
  };
  const handleSort = (field) => {
    console.log(`Sorting by ${field}`);
  };
  return (
    <>
      <Grid container spacing={2} paddingTop={3}>
        <Grid item xs={12} md={8}>
          <StyledChart />
        </Grid>
        <Grid item xs={12} md={4}>
          <PendingApprovals />
        </Grid>
        <Grid item xs={12} md={8}>
          <Box bgcolor="white" padding={2} borderRadius={"8px"}>
            <Box paddingBottom={2}>
              {" "}
              <Typography variant="h8" fontWeight="600" padding={2}>
                Recent activity
              </Typography>
            </Box>
            <StyledTable
              columns={userColumns}
              data={userData}
              onSelectionChange={handleSelectionChange}
              onView={handleView}
              onSort={handleSort}
              onDelete={handleDelete}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <StaffExpense />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
