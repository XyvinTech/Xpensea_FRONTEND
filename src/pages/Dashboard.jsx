import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import StyledChart from "../components/StyledChart";
import PendingApprovals from "../components/dashboard/PendingApprovel";
import StyledTable from "../ui/StyledTable";
import StaffExpense from "../components/dashboard/StaffExpense";
import { useListStore } from "../store/listStore";

const Dashboard = () => {
  const { fetchLists } = useListStore();

  const userColumns = [
    { title: "Event Title", field: "eventName", sortable: false },
    { title: "start Date", field: "startDate", sortable: true },
    { title: "End Date", field: "endDate", sortable: true },
    { title: "No of Staffs", field: "staffCount", sortable: true },
    { title: "Locations", field: "location", sortable: true },
    { title: "Status", field: "status", sortable: true },
  ];
  useEffect(() => {
    let filter = { type: "events" };

    filter.creator = 'Admin';
    fetchLists(filter);
  }, []);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <StyledChart />
        </Grid>
        <Grid item xs={12} md={4}>
          <PendingApprovals />
        </Grid>
        <Grid item xs={12} md={8}>
          <Box
            bgcolor="white"
            padding={2}
            paddingBottom={0}
            borderRadius={"8px"}
          >
            <Box paddingBottom={2}>
              {" "}
              <Typography variant="h8" fontWeight="600" padding={2}>
                Recent activity
              </Typography>
            </Box>
            <StyledTable columns={userColumns} dashboard />
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
