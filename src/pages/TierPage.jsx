import React, { useEffect, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FilterIcon } from "../assets/icons/FilterIcon";
import StyledTable from "../ui/StyledTable";
import StyledFilter from "../components/StyledFilter";
import AddExpense from "../components/tier/AddExpense";
import { useListStore } from "../store/listStore";
import { useTierStore } from "../store/tierStore";
const TierPage = () => {
  const { fetchLists, pageNo } = useListStore();
  const { fetchTierById, deleteTiers } = useTierStore();
  const [selectedRows, setSelectedRows] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [status, setStatus] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const [expenseOpen, setExpenseOpen] = useState(false);
  const handleSelectionChange = (newSelectedIds) => {
    setSelectedRows(newSelectedIds);
    // console.log("Selected items:", newSelectedIds);
  };

  const handleEdit = async (id) => {
    await fetchTierById(id);
    // console.log("View item:", isUpdate);
    setIsUpdate(true);
    // setAction('edit')
    setExpenseOpen(true);
  };

  const handleDelete = async () => {
    if (selectedRows.length > 0) {
      await Promise.all(selectedRows.map((id) => deleteTiers(id)));
      setIsChange(!isChange);
      setSelectedRows([]);
    }
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
  const handleOpenExpense = () => {
    setExpenseOpen(true);
    setIsUpdate(false);
  };

  const handleCloseExpense = () => {
    setExpenseOpen(false);
    setIsUpdate(false);
  };
  const userColumns = [
    { title: "Tier Title", field: "title", sortable: false },
    { title: "Date", field: "activationDate", sortable: true },
    { title: "No of Employee", field: "noOfEmployees", sortable: true },
    { title: "Max Amount", field: "totalAmount", sortable: true },
    { title: "No of allowance", field: "noAllowance", sortable: true },
  ];
  const handleChange = () => {
    setIsChange(!isChange);
  };
  useEffect(() => {
    let filter = {};
    filter.type = "tiers";
    if (status !== null) {
      filter.status = status;
    }
    filter.pageNo = pageNo;
    fetchLists(filter);
  }, [isChange, fetchLists, pageNo, status]);
  // console.log(lists);

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
              backgroundColor: status === true ? "#002B9B" : "#fff",
              borderRadius: "8px",
              border: "1px solid rgba(226, 232, 240, 1)",
              padding: "10px",
              color: status === true ? "#fff" : "#4D515A",
            }}
            onClick={() => setStatus(true)}
          >
            Activated
          </Button>
          <Button
            style={{
              cursor: "pointer",
              textTransform: "none",
              backgroundColor: status === false ? "#002B9B" : "#fff",
              border: "1px solid rgba(226, 232, 240, 1)",
              borderRadius: "8px",
              padding: "10px",
              color: status === false ? "#fff" : "#4D515A",
            }}
            onClick={() => setStatus(false)}
          >
            Deactivated
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
          <Button
            style={{
              cursor: "pointer",
              textTransform: "none",
              backgroundColor: "#002B9B",
              borderRadius: "8px",
              border: "1px solid rgba(226, 232, 240, 1)",
              padding: "10px",
              color: "#fff",
            }}
            onClick={handleOpenExpense}
          >
            Create New
          </Button>
        </Stack>
      </Stack>
      <Box bgcolor={"white"} paddingTop={0}>
        <StyledTable
          columns={userColumns}
          // data={lists}
          onSelectionChange={handleSelectionChange}
          onDelete={handleDelete}
          onSort={handleSort}
          showEdit
          onEdit={handleEdit}
        />
      </Box>
      <StyledFilter open={filterOpen} onClose={handleCloseFilter} />
      <AddExpense
        open={expenseOpen}
        onClose={handleCloseExpense}
        onChange={handleChange}
        isUpdate={isUpdate}
      />
    </>
  );
};

export default TierPage;
