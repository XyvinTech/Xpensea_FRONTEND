import React, { useEffect, useState } from "react";
import { userColumns, userData } from "../assets/json/AllData";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FilterIcon } from "../assets/icons/FilterIcon";
import StyledTable from "../ui/StyledTable";
import StyledFilter from "../components/StyledFilter";
import CreateEvent from "../components/events/CreateEvent";
import ShareVia from "../components/policy/ShareVia";
import PolicyEdit from "../components/policy/PolicyEdit";
import { useListStore } from "../store/listStore";
const PolicyPage = () => {
  const navigate = useNavigate();
  const [selectedRows, setSelectedRows] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const [policyOpen, setPolicyOpen] = useState(false);
  const { fetchLists, pageNo } = useListStore();
  const handleSelectionChange = (newSelectedIds) => {
    setSelectedRows(newSelectedIds);
    // console.log("Selected items:", newSelectedIds);
  };
  const handleShare = (id) => {
    // console.log("View item:", id);
    setShareOpen(true);
  };

  const handleDelete = (id) => {
    // console.log("Delete item :", id);
  };
  const handleSort = (field) => {
    // console.log(`Sorting by ${field}`);
  };
  const handleChange = () => {
    setIsChange(!isChange);
  };
  const handleView = (id) => {
    // console.log("View item:", id);
    navigate(`/policy/${id}`);
  };
  const handleOpenFilter = () => {
    setFilterOpen(true);
  };

  const handleCloseFilter = () => {
    setFilterOpen(false);
  };
  const handleOpenPolicy = () => {
    setPolicyOpen(true);
  };
  const handleClosePolicy = () => {
    setPolicyOpen(false);
  };
  const handleCloseShare = () => {
    setShareOpen(false);
  };
  useEffect(() => {
    let filter = { type: "policy" };

    // if (status !== null) {
    //   filter.status = status;
    // }
    filter.pageNo = pageNo;
    fetchLists(filter);
  }, [isChange, fetchLists, pageNo]);
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
              backgroundColor: "#002B9B",
              borderRadius: "8px",
              border: "1px solid rgba(226, 232, 240, 1)",
              padding: "10px",
              color: "#fff",
            }}
            // onClick={() => setSelectedTab('functional')}
          >
            All
          </Button>

          <Button
            style={{
              cursor: "pointer",
              textTransform: "none",
              backgroundColor: "#fff",
              borderRadius: "8px",
              border: "1px solid rgba(226, 232, 240, 1)",
              padding: "10px",
              color: "#4D515A",
            }}
            // onClick={() => setSelectedTab('locational')}
          >
            Pending
          </Button>
          <Button
            style={{
              cursor: "pointer",
              textTransform: "none",
              backgroundColor: "#fff",
              border: "1px solid rgba(226, 232, 240, 1)",
              borderRadius: "8px",
              padding: "10px",
              color: "#4D515A",
            }}
            // onClick={() => setSelectedTab('locational')}
          >
            Approved
          </Button>
          <Button
            style={{
              cursor: "pointer",
              textTransform: "none",
              borderRadius: "8px",
              backgroundColor: "#fff",
              border: "1px solid rgba(226, 232, 240, 1)",
              padding: "10px",
              color: "#4D515A",
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
              backgroundColor: "#002B9B",
              borderRadius: "8px",
              border: "1px solid rgba(226, 232, 240, 1)",
              padding: "10px",
              color: "#fff",
            }}
            onClick={handleOpenPolicy}
          >
            Create New
          </Button>
        </Stack>
      </Stack>
      <Box bgcolor={"white"} paddingTop={0}>
        <StyledTable
          columns={userColumns}
          data={userData}
          onSelectionChange={handleSelectionChange}
          onShare={handleShare}
          onSort={handleSort}
          onDelete={handleDelete}
          onView={handleView}
          showShare
        />
      </Box>
      <StyledFilter open={filterOpen} onClose={handleCloseFilter} />
      <PolicyEdit
        open={policyOpen}
        onClose={handleClosePolicy}
        onChange={handleChange}
      />
      <ShareVia open={shareOpen} onClose={handleCloseShare} />
    </>
  );
};

export default PolicyPage;
