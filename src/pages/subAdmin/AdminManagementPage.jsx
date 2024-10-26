import React, { useEffect, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { FilterIcon } from "../../assets/icons/FilterIcon";
import StyledTable from "../../ui/StyledTable";
import StyledFilter from "../../components/StyledFilter";
import StyledSearchbar from "../../ui/StyledSearchbar";
import AddNewRole from "../../components/subAdmin/AddNewRole";
import { useListStore } from "../../store/listStore";
import { useAdminStore } from "../../store/adminStore";
import { toast } from "react-toastify";

const AdminManagementPage = () => {
  const { fetchAdminById, deleteAdmins } = useAdminStore();
  const { lists, fetchLists, rowPerSize } = useListStore();
  const [pageNo, setPageNo] = useState(1);
  const [row, setRow] = useState(10);
  const [isChange, setIsChange] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [eventOpen, setEventOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const handleSelectionChange = (newSelectedIds) => {
    setSelectedRows(newSelectedIds);
    // console.log("Selected items:", newSelectedIds);
  };

  const handleEdit = async (id) => {
    await fetchAdminById(id);

    setIsUpdate(true);
    setEventOpen(true);
  };

  const handleView = (id) => {
    // console.log("View item:", id);
  };

  const handleDelete = async () => {
    try {
      if (selectedRows.length > 0) {
        await Promise.all(selectedRows.map((id) => deleteAdmins(id)));
        toast.success("Deleted successfully");
        setIsChange(!isChange);
        setSelectedRows([]);
      }
    } catch (e) {
      toast.error("Something went wrong");
    }
  };

  const handleOpenFilter = () => {
    setFilterOpen(true);
  };

  const handleCloseFilter = () => {
    setFilterOpen(false);
  };

  const handleOpenEvent = () => {
    setIsUpdate(false);
    setEventOpen(true);
  };

  const handleCloseEvent = () => {
    setEventOpen(false);
    setIsUpdate(false);
  };

  const handleChange = () => {
    setIsChange(!isChange);
  };

  const userColumns = [
    { title: "name", field: "name", sortable: false },
    { title: "role", field: "roleName", sortable: true },
    { title: "email", field: "email", sortable: true },
    { title: "contact no", field: "mobile", sortable: true },
    { title: "status", field: "status", sortable: false },
    { title: "designation", field: "designation", sortable: false },
  ];

  useEffect(() => {
    let filter = {};
    filter.type = "admins";
    filter.limit = row;
    filter.pageNo = pageNo;
    fetchLists(filter);
  }, [isChange, fetchLists, rowPerSize, pageNo, row]);

  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        paddingBottom={2}
      >
        <Box display="flex" width={"50%"} gap={1}></Box>
        <Stack direction={"row"} spacing={2}>
          <StyledSearchbar />
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
            onClick={handleOpenEvent}
          >
            Create New
          </Button>
        </Stack>
      </Stack>
      <Box bgcolor={"white"} paddingTop={0}>
        <StyledTable
          columns={userColumns}
          data={lists}
          onSelectionChange={handleSelectionChange}
          onEdit={handleEdit}
          showEdit
          pageNo={pageNo}
          rowPerSize={row}
          setRowPerSize={setRow}
          setPageNo={setPageNo}
          onView={handleView}
          onDelete={handleDelete}
        />
      </Box>
      <StyledFilter open={filterOpen} onClose={handleCloseFilter} />
      <AddNewRole
        open={eventOpen}
        onClose={handleCloseEvent}
        onChange={handleChange}
        isUpdate={isUpdate}
      />
    </>
  );
};

export default AdminManagementPage;
