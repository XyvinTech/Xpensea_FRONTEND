import React, { useEffect, useState } from "react";
import StyledTable from "../../ui/StyledTable";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import StyledFilter from "../../components/StyledFilter";
import { FilterIcon } from "../../assets/icons/FilterIcon";
import UpoloadBulk from "../../components/staff/UploadBulk";
import StaffDetailsAdd from "../../components/staff/StaffDetailsAdd";
import { useListStore } from "../../store/listStore";
import { useUserStore } from "../../store/userStore";
import { toast } from "react-toastify";
const StaffPage = () => {
  const navigate = useNavigate();
  const { fetchLists } = useListStore();
  const [pageNo, setPageNo] = useState(1);
  const { fetchUserById, deleteUsers } = useUserStore();
  const [selectedRows, setSelectedRows] = useState([]);
  const [isChange, setIsChange] = useState(false);
  const [row, setRow] = useState(10);
  const [isUpdate, setIsUpdate] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [status, setStatus] = useState(null);
  const [isDelete, setIsDelete] = useState(false);
  const [bulkOpen, setBulkOpen] = useState(false);
  const [staffOpen, setStaffOpen] = useState(false);
  const handleSelectionChange = (newSelectedIds) => {
    setSelectedRows(newSelectedIds);
    // console.log("Selected items:", newSelectedIds);
  };
  const handleEdit = async (id) => {
    await fetchUserById(id);
    // console.log("View item:", isUpdate);
    setIsUpdate(true);
    setStaffOpen(true);
  };
  const handleView = (id) => {
    // console.log("View item:", id);
    navigate(`/staffs/${id}`);
  };
  const handleDelete = async () => {
    try {
      if (selectedRows.length > 0) {
        await Promise.all(selectedRows?.map((id) => deleteUsers(id)));
        toast.success("Deleted successfully");
        setIsChange(!isChange);
        setSelectedRows([]);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleSort = (field) => {
    // console.log(`Sorting by ${field}`);
  };
  const handleChange = () => {
    setIsChange(!isChange);
  };
  const handleOpenFilter = () => {
    setFilterOpen(true);
  };

  const handleCloseFilter = () => {
    setFilterOpen(false);
  };
  const handleOpenBulk = () => {
    setBulkOpen(true);
  };

  const handleCloseBulk = () => {
    setBulkOpen(false);
  };
  const handleOpenStaff = () => {
    setStaffOpen(true);
    setIsUpdate(false);
  };

  const handleCloseStaff = () => {
    setStaffOpen(false);
    setIsUpdate(false);
  };
  const userColumns = [
    { title: "Name", field: "name", sortable: false },
    { title: "Date of join", field: "createdAt", sortable: true },
    { title: "Position", field: "userType", sortable: true },
    { title: "Tier", field: "tier", sortable: true },
    { title: "Status", field: "status", sortable: true },
    { title: "e-mail", field: "email", sortable: true },
    { title: "Locations", field: "location", sortable: false },
    { title: "contact number", field: "mobile", sortable: false },
  ];
  useEffect(() => {
    let filter = { type: "users" };
    if (!isDelete && status !== null) {
      filter.status = status;
    }

    filter.isDeleted = isDelete;
    filter.limit = row;
    filter.pageNo = pageNo;
    fetchLists(filter);
  }, [isChange, fetchLists, pageNo, status, isDelete, row]);

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
            onClick={() => {
              setStatus(null);
              setIsDelete("");
            }}
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
            onClick={() => {
              setStatus(true);
              setIsDelete("");
            }}
          >
            Activated{" "}
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
            onClick={() => {
              setStatus(false);
              setIsDelete("");
            }}
          >
            Deactivated
          </Button>
          <Button
            style={{
              cursor: "pointer",
              textTransform: "none",
              backgroundColor: isDelete === true ? "#002B9B" : "#fff",
              border: "1px solid rgba(226, 232, 240, 1)",
              borderRadius: "8px",
              padding: "10px",
              color: isDelete === true ? "#fff" : "#4D515A",
            }}
            onClick={() => {
              setStatus("");
              setIsDelete(true);
            }}
          >
            Deleted
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
            onClick={handleOpenBulk}
          >
            Upload Bulk
          </Button>
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
            onClick={handleOpenStaff}
          >
            Create New
          </Button>
        </Stack>
      </Stack>
      <Box bgcolor={"white"} paddingTop={0}>
        <StyledTable
          columns={userColumns}
          onSelectionChange={handleSelectionChange}
          onEdit={handleEdit}
          onSort={handleSort}
          onDelete={handleDelete}
          showEdit
          rowPerSize={row}
          setRowPerSize={setRow}
          pageNo={pageNo}
          setPageNo={setPageNo}
          onView={handleView}
        />
      </Box>
      <StyledFilter open={filterOpen} onClose={handleCloseFilter} />
      <UpoloadBulk open={bulkOpen} onClose={handleCloseBulk} />
      <StaffDetailsAdd
        open={staffOpen}
        onClose={handleCloseStaff}
        onChange={handleChange}
        isUpdate={isUpdate}
      />
    </>
  );
};

export default StaffPage;
