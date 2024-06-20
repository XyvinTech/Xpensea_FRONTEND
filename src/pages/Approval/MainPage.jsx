import React, { useState } from "react";
import StyledTable from "../../ui/StyledTable";
import { userColumns, userData } from "../../assets/json/AllData";
import { Box } from "@mui/material";
const MainPage = () => {
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
    <Box bgcolor={"white"} paddingTop={6}>
      <StyledTable
        columns={userColumns}
        data={userData}
        onSelectionChange={handleSelectionChange}
        onView={handleView}
        onSort={handleSort}
        onDelete={handleDelete}
      />
    </Box>
  );
};

export default MainPage;
