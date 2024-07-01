import React, { useEffect, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { FilterIcon } from "../../assets/icons/FilterIcon";
import StyledTable from "../../ui/StyledTable";
import StyledFilter from "../../components/StyledFilter";
import StyledSearchbar from "../../ui/StyledSearchbar";
import RoleManagement from "../../components/subAdmin/RoleManagement";
import { useListStore } from "../../store/listStore";
import { useRoleStore } from "../../store/roleStore";
const RoleManagementPage = () => {
  const { lists, fetchLists } = useListStore();
  const { isUpdate, updateChange,fetchRoleById,deleteRoles } = useRoleStore();
  const [selectedRows, setSelectedRows] = useState([]);
  const [isChange, setIsChange] = useState(false);
  
  const [filterOpen, setFilterOpen] = useState(false);
  const [eventOpen, setEventOpen] = useState(false);
  const handleSelectionChange = (newSelectedIds) => {
    setSelectedRows(newSelectedIds);
    console.log("Selected items:", newSelectedIds);
  };

  const handleEdit =async (id) => {
    await fetchRoleById(id)
    
    updateChange(isUpdate);
    setEventOpen(true);
   
  };
  const handleDelete = async () => {
    if (selectedRows.length > 0) {
      await Promise.all(selectedRows.map((id) => deleteRoles(id))); 
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
  };
  const handleCloseEvent = () => {
    setEventOpen(false);
  };
  const handleChange = () => {
    setIsChange(!isChange);
  };
  const userColumns = [
    { title: "Role Name", field: "roleName", sortable: false },
    { title: "Created on", field: "createdAt",sortable: false  },
    { title: "Access type", field: "userType",sortable: true  },
    { title: "Role Description", field: "userType",sortable: true  },
    { title: "Status", field: "status",sortable: true  },
  ];
  useEffect(() => {
    let filter = {};
    filter.type = "roles";
    fetchLists(filter);
  }, [isChange,fetchLists]);
  console.log(lists);
  console.log(isUpdate);
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
          onDelete={handleDelete}
        />
      </Box>
      <StyledFilter open={filterOpen} onClose={handleCloseFilter} />
      <RoleManagement open={eventOpen} onClose={handleCloseEvent}  onChange={handleChange} />
    </>
  );
};

export default RoleManagementPage;
