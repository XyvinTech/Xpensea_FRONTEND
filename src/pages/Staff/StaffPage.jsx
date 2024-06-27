import React, { useEffect, useState } from "react";
import StyledTable from "../../ui/StyledTable";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import StyledFilter from "../../components/StyledFilter";
import { FilterIcon } from "../../assets/icons/FilterIcon";
import UpoloadBulk from "../../components/staff/UploadBulk";
import StaffDetailsAdd from "../../components/staff/StaffDetailsAdd";
import { useListStore } from "../../store/listStore";
const StaffPage = () => {

  const navigate = useNavigate();
  const { lists, fetchLists } = useListStore();
  const [selectedRows, setSelectedRows] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [bulkOpen, setBulkOpen] = useState(false);
  const [staffOpen, setStaffOpen] = useState(false);
  const handleSelectionChange = (newSelectedIds) => {
    setSelectedRows(newSelectedIds);
    console.log("Selected items:", newSelectedIds);
  };
  const handleEdit = (id) => {
    console.log("Edit item:", id);
   
  };
  const handleView = (id) => {
    console.log("View item:", id);
    navigate(`/staffs/${id}`);
   
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
  const handleOpenBulk = () => {
    setBulkOpen(true);
  };

  const handleCloseBulk = () => {
    setBulkOpen(false);
  };
  const handleOpenStaff = () => {
    setStaffOpen(true);
  };

  const handleCloseStaff = () => {
    setStaffOpen(false);
  };
  const userColumns = [
    { title: "Name", field: "name", sortable: false },
    { title: "Date of join", field: "createdAt",sortable: true  },
    { title: "Position", field: "userType",sortable: true  },
    { title: "Tier", field: "tier",sortable: true  },
    { title: "Status", field: "status",sortable: true  },
    { title: "e-mail", field: "email",sortable: true  },
    { title: "Locations", field: "location",sortable: false  },
    { title: "contact number", field: "contact number",sortable: false },
  ];
  useEffect(() => {
    let filter = {};
    filter.type ='users' ;
    fetchLists(filter);
  }, []);
  console.log(lists)
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
              backgroundColor: "#79001D",
              borderRadius: "8px",
              border: "1px solid rgba(226, 232, 240, 1)",
              padding: "10px",
              color: "#fff",
            }}
            onClick={handleOpenBulk}
          >
            Upoload Bulk
          </Button>
          <Button
            style={{
              cursor: "pointer",
              textTransform: "none",
              backgroundColor: "#79001D",
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
          data={lists}
          onSelectionChange={handleSelectionChange}
          onEdit={handleEdit}
          onSort={handleSort}
          onDelete={handleDelete}
          showEdit
          onView={handleView}

        />
      </Box>
      <StyledFilter open={filterOpen} onClose={handleCloseFilter} />
      <UpoloadBulk open={bulkOpen} onClose={handleCloseBulk} />
      <StaffDetailsAdd open={staffOpen} onClose={handleCloseStaff} />
    </>
  );
};

export default StaffPage;
