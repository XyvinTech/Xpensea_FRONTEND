import { Box, Button, Stack } from "@mui/material";
import { FilterIcon } from "../../assets/icons/FilterIcon";
import React, { useEffect, useState } from "react";
import StyledTable from "../../ui/StyledTable";
import StyledFilter from "../../components/StyledFilter";
import { useListStore } from "../../store/listStore";

const ReportTable = ( {id}) => {
  const [filterOpen, setFilterOpen] = useState(false);
  const { fetchReportById } = useListStore();
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
      {" "}
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
              backgroundColor: status === null ? "#002B9B" : "#fff",
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
              backgroundColor: status === "pending" ? "#002B9B" : "#fff",
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
              backgroundColor: status === "approved" ? "#002B9B" : "#fff",
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
              backgroundColor: status === "rejected" ? "#002B9B" : "#fff",
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

export default ReportTable;
