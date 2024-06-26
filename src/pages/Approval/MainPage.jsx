import React, { useState } from "react";
import StyledTable from "../../ui/StyledTable";
import { userColumns, userData } from "../../assets/json/AllData";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import StyledFilter from "../../components/StyledFilter";
import { FilterIcon } from "../../assets/icons/FilterIcon";
const MainPage = () => {
  const navigate = useNavigate();
  const [selectedRows, setSelectedRows] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const handleSelectionChange = (newSelectedIds) => {
    setSelectedRows(newSelectedIds);
    console.log("Selected items:", newSelectedIds);
  };
  const handleView = (id) => {
    console.log("View item:", id);
    navigate(`/approvals/view`);
  };

  const handleDelete = (id) => {
    console.log("Delete item :", id);
  };
  const handleSort = (field) => {
    console.log(`Sorting by ${field}`);
  };

  const handleOpenFilter = () => {
    setFilterOpen(true);
  };

  const handleCloseFilter = () => {
    setFilterOpen(false);
  };
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
                cursor: 'pointer',
                textTransform: "none",
                backgroundColor:  '#79001D',
                borderRadius:"8px",
                border: "1px solid rgba(226, 232, 240, 1)",
                padding: "10px",
                color: '#fff'
              }}
              // onClick={() => setSelectedTab('functional')}
            >
              All
            </Button>
           
            <Button
              style={{
                cursor: 'pointer',
                textTransform: "none",
                backgroundColor:  "#fff",
                borderRadius:"8px",
                border: "1px solid rgba(226, 232, 240, 1)",
                padding: "10px",
                color: "#4D515A"
              }}
              // onClick={() => setSelectedTab('locational')}
            >
              Pending
            </Button>
            <Button
              style={{
                cursor: 'pointer',
                textTransform: "none",
                backgroundColor:  "#fff",
                border: "1px solid rgba(226, 232, 240, 1)",
                borderRadius:"8px",
                padding: "10px",
                color: "#4D515A"
              }}
              // onClick={() => setSelectedTab('locational')}
            >
              Approved
            </Button>
            <Button
              style={{
                cursor: 'pointer',
                textTransform: "none",
                borderRadius:"8px",
                backgroundColor:  "#fff",
                border: "1px solid rgba(226, 232, 240, 1)",
                padding: "10px",
                color: "#4D515A"
              }}
              // onClick={() => setSelectedTab('locational')}
            >
              Rejected
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
          data={userData}
          onSelectionChange={handleSelectionChange}
          onView={handleView}
          onSort={handleSort}
          onDelete={handleDelete}
        />
      </Box>
      <StyledFilter open={filterOpen} onClose={handleCloseFilter} />
    </>
  );
};

export default MainPage;
