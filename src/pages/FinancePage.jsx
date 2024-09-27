import React, { useEffect, useState } from "react";
import StyledTable from "../ui/StyledTable";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import StyledFilter from "../components/StyledFilter";
import { FilterIcon } from "../assets/icons/FilterIcon";
import { useListStore } from "../store/listStore";
const FinancePage = () => {
  const navigate = useNavigate();
  const { fetchLists} = useListStore();
  const [pageNo, setPageNo] = useState(1);
  const [isChange, setIsChange] = useState(false);
  const [status, setStatus] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const handleSelectionChange = (newSelectedIds) => {
    setSelectedRows(newSelectedIds);
    // console.log("Selected items:", newSelectedIds);
  };
  const handleView = (id) => {
    // console.log("View item:", id);
    navigate(`/finance/${id}`);
  };

  const handleDelete = (id) => {
    // console.log("Delete item :", id);
  };
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
    { title: "Staff Name", field: "user", sortable: true },
    { title: "Date", field: "reportDate", sortable: true },
    { title: "NO Of Expense", field: "expenseCount", sortable: true },
    { title: "Total", field: "totalAmount", sortable: true },
    { title: "Location", field: "location", sortable: true },
    { title: "Status", field: "status", sortable: true },
  ];
  useEffect(() => {
    let filter = { type: "finances" };
    if (status !== null) {
      filter.status = status;
    }
    filter.pageNo = pageNo;
    fetchLists(filter);
  }, [isChange, fetchLists, pageNo, status]);
  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
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
              backgroundColor: status === "reimbursed" ? "#002B9B" : "#fff",
              borderRadius: "8px",
              border: "1px solid rgba(226, 232, 240, 1)",
              padding: "10px",
              color: status === "reimbursed" ? "#fff" : "#4D515A",
            }}
            onClick={() => setStatus("reimbursed")}
          >
           Reimbursed
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
          
        </Box>
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
      <Box bgcolor={"white"} paddingTop={0}>
        <StyledTable
          columns={userColumns}
          onSelectionChange={handleSelectionChange}
          pageNo={pageNo}
          setPageNo={setPageNo}
          onView={handleView}
          onSort={handleSort}
          onDelete={handleDelete}
        />
      </Box>
      <StyledFilter open={filterOpen} onClose={handleCloseFilter} />
    </>
  );
};

export default FinancePage;
