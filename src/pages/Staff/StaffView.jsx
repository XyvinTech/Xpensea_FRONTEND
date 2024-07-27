import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { GtIcon } from "../../assets/icons/GtIcon";
import StaffDetail from "../../components/staff/StaffDetail";
import Report from "../../components/staff/Report";
import { useParams } from "react-router-dom";
import { useUserStore } from "../../store/userStore";
import StyledFilter from "../../components/StyledFilter";
import { FilterIcon } from "../../assets/icons/FilterIcon";
import StyledTable from "../../ui/StyledTable";
import { useListStore } from "../../store/listStore";
const StaffView = () => {
  const { user, fetchUserById } = useUserStore();
  const { fetchReportById } = useListStore();
  const { id } = useParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [status, setStatus] = useState(null);
  const handleSelectionChange = (newSelectedIds) => {
    setSelectedRows(newSelectedIds);
    // console.log("Selected items:", newSelectedIds);
  };

  const handleDelete = async () => {};
  const handleSort = (field) => {
    // console.log(`Sorting by ${field}`);
  };
  const handleOpenFilter = () => {
    setFilterOpen(true);
  };

  const handleCloseFilter = () => {
    setFilterOpen(false);
  };
  useEffect(() => {
    if (id) {
      fetchUserById(id);
    }
  }, [id, fetchUserById]);
  const userColumns = [
    { title: "Order", field: "title", sortable: false },
    { title: "Date", field: "reportDate", sortable: true },
    { title: "No of Expense", field: "expenseCount", sortable: true },
    { title: "Total", field: "totalAmount", sortable: true },
    { title: "Location", field: "location", sortable: false },
    { title: "Status", field: "status", sortable: true },
  ];
  useEffect(() => {
    if (id) {
      let filter = {};

      if (status !== null) {
        filter.status = status;
      }
      fetchReportById(id, filter);
    }
  }, [id, status, fetchReportById]);
  return (
    <>
      <Box display="flex" alignItems="center" paddingTop={2}>
        <Typography variant="h11" marginRight={1}>
          Staff Page
        </Typography>
        <GtIcon />
        <Typography variant="h11" marginLeft={1}>
          Staff Details
        </Typography>
      </Box>
      <Grid container spacing={2} paddingTop={2}>
        <Grid item xs={12} md={6}>
          {user && <StaffDetail user={user} />}
        </Grid>

        <Grid item xs={12} md={6}>
          <Report />
        </Grid>
      </Grid>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        paddingTop={4}
        paddingBottom={2}
      >
        <Box display="flex" width={"50%"} gap={1}>
          <Button
            style={{
              cursor: "pointer",
              textTransform: "none",
              backgroundColor: status === null ? "#79001D" : "#fff",
              borderRadius: "8px",
              border: "1px solid rgba(226, 232, 240, 1)",
              padding: "10px",
              color: status === null ? "#fff" : "#4D515A",
            }}
            onClick={() => setStatus(null)}
          >
            All
          </Button>

          <Button
            style={{
              cursor: "pointer",
              textTransform: "none",
              backgroundColor: status === "pending" ? "#79001D" : "#fff",
              borderRadius: "8px",
              border: "1px solid rgba(226, 232, 240, 1)",
              padding: "10px",
              color: status === "pending" ? "#fff" : "#4D515A",
            }}
            onClick={() => setStatus("pending")}
          >
            Pending{" "}
          </Button>
          <Button
            style={{
              cursor: "pointer",
              textTransform: "none",
              backgroundColor: status === "approved" ? "#79001D" : "#fff",
              border: "1px solid rgba(226, 232, 240, 1)",
              borderRadius: "8px",
              padding: "10px",
              color: status === "approved" ? "#fff" : "#4D515A",
            }}
            onClick={() => setStatus("approved")}
          >
            Approved
          </Button>
          <Button
            style={{
              cursor: "pointer",
              textTransform: "none",
              backgroundColor: status === "rejected" ? "#79001D" : "#fff",
              border: "1px solid rgba(226, 232, 240, 1)",
              borderRadius: "8px",
              padding: "10px",
              color: status === "rejected" ? "#fff" : "#4D515A",
            }}
            onClick={() => setStatus("rejected")}
          >
            Rejected
          </Button>
        </Box>
        <Stack direction={"row"} spacing={2}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width={"44px"}
            height={"44px"}
            borderRadius={"7px"}
            boxShadow={
              "0 -4px 6px -1px rgba(0, 0, 0, 0.01), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)"
            }
            onClick={handleOpenFilter}
            sx={{ cursor: "pointer" }}
            bgcolor={"#fff"}
          >
            <FilterIcon />
          </Box>
        </Stack>
      </Stack>
      <Box bgcolor={"white"} paddingTop={0}>
        <StyledTable
          columns={userColumns}
          onSelectionChange={handleSelectionChange}
          onSort={handleSort}
          onDelete={handleDelete}
        />
      </Box>
      <StyledFilter open={filterOpen} onClose={handleCloseFilter} />
    </>
  );
};

export default StaffView;
