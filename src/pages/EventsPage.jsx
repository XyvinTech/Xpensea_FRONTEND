import React, { useEffect, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { FilterIcon } from "../assets/icons/FilterIcon";
import StyledTable from "../ui/StyledTable";
import StyledFilter from "../components/StyledFilter";
import CreateEvent from "../components/events/CreateEvent";
import { useListStore } from "../store/listStore";
import { useEventStore } from "../store/eventStore";
import { toast } from "react-toastify";
const EventsPage = () => {
  const { fetchLists } = useListStore();
  const [pageNo, setPageNo] = useState(1);
  const [row, setRow] = useState(10);
  const [selectedRows, setSelectedRows] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const [eventOpen, setEventOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [status, setStatus] = useState(null);
  const { deleteEvents, fetchEventById } = useEventStore();
  const handleSelectionChange = (newSelectedIds) => {
    setSelectedRows(newSelectedIds);
    // console.log("Selected items:", newSelectedIds);
  };

  const handleDelete = async () => {
    try {
      if (selectedRows.length > 0) {
        await Promise.all(selectedRows.map((id) => deleteEvents(id)));
        toast.success("Deleted successfully");
        setIsChange(!isChange);
        setSelectedRows([]);
      }
    } catch (e) {
      toast.error("Something went wrong");
    }
  };
  const handleEdit = async (id) => {
    await fetchEventById(id);

    setIsUpdate(true);
    setEventOpen(true);
  };
  const handleRowDelete = async (id) => {
    try {
      await deleteEvents(id);
      setIsChange(!isChange);
      toast.success("Deleted successfully");
    } catch (e) {
      toast.error("Something went wrong");
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
  const handleOpenEvent = () => {
    setEventOpen(true);
    setIsUpdate(false);
  };

  const handleCloseEvent = () => {
    setEventOpen(false);
    setIsUpdate(false);
  };
  const handleChange = () => {
    setIsChange(!isChange);
  };
  const userColumns = [
    { title: "Event Title", field: "eventName", sortable: false },
    { title: "start Date", field: "startDate", sortable: true },
    { title: "End Date", field: "endDate", sortable: true },
    { title: "No of Staffs", field: "staffCount", sortable: true },
    { title: "Locations", field: "location", sortable: true },
    { title: "Status", field: "status", sortable: true },
  ];
  useEffect(() => {
    let filter = { type: "events" };

    if (status !== null) {
      filter.status = status;
    }
    filter.pageNo = pageNo;
    filter.limit = row;
    fetchLists(filter);
  }, [isChange, fetchLists, status, pageNo, row]);
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
              backgroundColor: status === "progress" ? "#002B9B" : "#fff",
              borderRadius: "8px",
              border: "1px solid rgba(226, 232, 240, 1)",
              padding: "10px",
              color: status === "progress" ? "#fff" : "#4D515A",
            }}
            onClick={() => setStatus("progress")}
          >
            Progress
          </Button>
          <Button
            style={{
              cursor: "pointer",
              textTransform: "none",
              backgroundColor: status === "scheduled" ? "#002B9B" : "#fff",
              border: "1px solid rgba(226, 232, 240, 1)",
              borderRadius: "8px",
              padding: "10px",
              color: status === "scheduled" ? "#fff" : "#4D515A",
            }}
            onClick={() => setStatus("scheduled")}
          >
            Scheduled
          </Button>
          <Button
            style={{
              cursor: "pointer",
              textTransform: "none",
              borderRadius: "8px",
              backgroundColor: status === "done" ? "#002B9B" : "#fff",
              border: "1px solid rgba(226, 232, 240, 1)",
              padding: "10px",
              color: status === "done" ? "#fff" : "#4D515A",
            }}
            onClick={() => setStatus("done")}
          >
            Done
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
            onClick={handleOpenEvent}
          >
            Create New
          </Button>
        </Stack>
      </Stack>
      <Box bgcolor={"white"} paddingTop={0}>
        <StyledTable
          columns={userColumns}
          onDeleteRow={handleRowDelete}
          onSelectionChange={handleSelectionChange}
          onSort={handleSort}
          pageNo={pageNo}
          rowPerSize={row}
          setRowPerSize={setRow}
          setPageNo={setPageNo}
          onDelete={handleDelete}
          onEdit={handleEdit}
          showEdit
        />
      </Box>
      <StyledFilter open={filterOpen} onClose={handleCloseFilter} />
      <CreateEvent
        open={eventOpen}
        onClose={handleCloseEvent}
        onChange={handleChange}
        isUpdate={isUpdate}
      />
    </>
  );
};

export default EventsPage;
