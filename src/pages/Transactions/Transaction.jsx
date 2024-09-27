import React, { useEffect, useState } from "react";
import StyledTable from "../../ui/StyledTable";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import StyledFilter from "../../components/StyledFilter";
import { FilterIcon } from "../../assets/icons/FilterIcon";
import { useListStore } from "../../store/listStore";
import AdvancePayment from "./AdvancePayment";
import { useTransactionStore } from "../../store/transactionStore";
const Transaction = () => {
  const navigate = useNavigate();
  const [isChange, setIsChange] = useState(false);
  const [status, setStatus] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const { fetchTransactionById } = useTransactionStore();
  const [filterOpen, setFilterOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const { fetchLists } = useListStore();
  const [pageNo, setPageNo] = useState(1);
  const handleSelectionChange = (newSelectedIds) => {
    setSelectedRows(newSelectedIds);
    // console.log("Selected items:", newSelectedIds);
  };
  const handleView = async (id) => {
    await fetchTransactionById(id);

    setIsUpdate(true);
    setOpen(true);
  };
  const handleChange = () => {
    setIsChange(!isChange);
  };
  const handleClose = () => {
    setOpen(false);
    setIsUpdate(false);
  };
  const handleDelete = async () => {
    // if (selectedRows.length > 0) {
    //   await Promise.all(selectedRows?.map((id) => deleteApprovals(id)));
    //   setIsChange(!isChange);
    //   setSelectedRows([]);
    // }
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
  useEffect(() => {
    let filter = { type: "transactions" };

    if (status !== null) {
      filter.status = status;
    }
    filter.pageNo = pageNo;
    fetchLists(filter);
  }, [isChange, fetchLists, pageNo, status]);
  const userColumns = [
    { title: "STAFF NAME", field: "receiver", sortable: false },
    { title: "tRANSACTION ID", field: "reportDate", sortable: true },
    { title: "AMOUNT", field: "amount", sortable: true },
    { title: "PAYMENT METHOD", field: "paymentMethod", sortable: true },
    { title: "REQUESTED BY", field: "sender", sortable: true },
    { title: "Status", field: "status", sortable: true },
  ];

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
              padding: "10px 15px",
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
            Pending
          </Button>
          <Button
            style={{
              cursor: "pointer",
              textTransform: "none",
              backgroundColor: status === "completed" ? "#002B9B" : "#fff",
              border: "1px solid rgba(226, 232, 240, 1)",
              borderRadius: "8px",
              padding: "10px",
              color: status === "completed" ? "#fff" : "#4D515A",
            }}
            onClick={() => setStatus("completed")}
          >
            Completed
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
          onEdit={handleView}
          onSort={handleSort}
          pageNo={pageNo}
          setPageNo={setPageNo}
          onDelete={handleDelete}
          showView
        />
      </Box>
      <StyledFilter open={filterOpen} onClose={handleCloseFilter} />
      <AdvancePayment
        open={open}
        onClose={handleClose}
        onChange={handleChange}
        isUpdate={isUpdate}
      />
    </>
  );
};

export default Transaction;
