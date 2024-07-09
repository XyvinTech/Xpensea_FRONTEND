import React, { useEffect, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { FilterIcon } from "../../assets/icons/FilterIcon";
import StyledTable from "../../ui/StyledTable";
import StyledFilter from "../../components/StyledFilter";
import StyledSearchbar from "../../ui/StyledSearchbar";
import AddNewRole from "../../components/subAdmin/AddNewRole";
import { useListStore } from "../../store/listStore";
import { useAdminStore } from "../../store/adminStore";
const AdminManagementPage = () => {
  const { isUpdate, updateChange,fetchAdminById ,deleteAdmins} = useAdminStore();
  const { lists, fetchLists,rowPerSize,pageNo, } = useListStore();
  const [isChange, setIsChange] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [eventOpen, setEventOpen] = useState(false);
  const [isView, setIsView] = useState(false);
  const handleSelectionChange = (newSelectedIds) => {
    setSelectedRows(newSelectedIds);
    console.log("Selected items:", newSelectedIds);
  };
 
  const handleEdit = async(id) => {
    await fetchAdminById(id)
    console.log("View item:", isUpdate);
    updateChange(isUpdate);
    setEventOpen(true);
    setIsView(false);

  };
  const handleView = async(id) => {
    await fetchAdminById(id)
    setEventOpen(true);
    setIsView(true);
  };
  const handleDelete = async () => {
    if (selectedRows.length > 0) {
      await Promise.all(selectedRows.map((id) => deleteAdmins(id))); 
      setIsChange(!isChange); 
      setSelectedRows([]); 
    }
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
  const handleOpenEvent = () => {
    setEventOpen(true);
    setIsView(false);
  };

  const handleCloseEvent = () => {
    setEventOpen(false);
  };
  const handleChange = () => {
    setIsChange(!isChange);
  };
  const userColumns = [
    { title: "name", field: "name", sortable: false },
    { title: "role", field: "role", sortable: true },
    { title: "email", field: "email", sortable: true },
    { title: "contact no", field: "mobile", sortable: true },
    { title: "status", field: "status", sortable: false },
    { title: "designation", field: "designation", sortable: false },
  ];
  
  useEffect(() => {
    const limit=rowPerSize;
    let filter = {limit,pageNo};
    filter.type = "admins";
    fetchLists(filter);
  }, [isChange,fetchLists,rowPerSize,pageNo]);
  console.log(lists);
  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        paddingBottom={2}
      >
          <Box display="flex" width={"50%"} gap={1}>
           
          </Box><Stack direction={"row"} spacing={2}><StyledSearchbar/>
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
                cursor: 'pointer',
                textTransform: "none",
                backgroundColor:  '#79001D',
                borderRadius:"8px",
                border: "1px solid rgba(226, 232, 240, 1)",
                padding: "10px",
                color: '#fff'
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
          onSort={handleSort}
          onView={handleView}
          onDelete={handleDelete}
        />
      </Box>
      <StyledFilter open={filterOpen} onClose={handleCloseFilter} />
      <AddNewRole open={eventOpen} onClose={handleCloseEvent}onChange={handleChange}isView={isView} />
    </>
  );
};

export default AdminManagementPage;
