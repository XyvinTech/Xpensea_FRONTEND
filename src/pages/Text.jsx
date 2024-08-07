import React, { useState } from "react";
import { userColumns, userData } from "../assets/json/TableData";
import StyledTable from "../ui/StyledTable";
import { Box, Button } from "@mui/material";
import StyledDropDown from "../ui/StyledDropDown";
import StyledChart from "../components/StyledChart";
import StyledFilter from "../components/StyledFilter";
import StyledCalender from "../components/StyledCalender";
import PendingApprovel from "../components/dashboard/PendingApprovel";
import StaffDetails from "../components/approvals/StaffDetails";
import ApprovalPage from "./Approval/ApprovelPage";
import StyledTextArea from "../ui/StyledTextArea";
import LiveLocation from "../components/approvals/LiveLocation";
import StaffDetail from "../components/staff/StaffDetail";
import Report from "../components/staff/Report";
import CreateEvent from "../components/events/CreateEvent";
import AddNewRole from "../components/subAdmin/AddNewRole";
import StaffDetailsAdd from "../components/staff/StaffDetailsAdd";
import PolicyEdit from "../components/policy/PolicyEdit";
import CalendarInput from "../ui/CalenderInput";
import UpoloadBulk from "../components/staff/UploadBulk";
import PasswordSuccess from "../components/login/PasswordSuccess";
import ChangePassword from "../components/login/ChangePassword";
import ForgotPassword from "../components/login/ForgotPassword";
const Text = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);

  const handleSelectionChange = (newSelectedIds) => {
    setSelectedRows(newSelectedIds);
    // console.log("Selected items:", newSelectedIds);
  };
  const handleView = (id) => {
    // console.log("View item:", id);
  };

  const handleDelete = (id) => {
    // console.log("Delete item :", id);
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
  return (
    <>
      <StyledTable
        columns={userColumns}
        data={userData}
        onSelectionChange={handleSelectionChange}
        onView={handleView}
        onSort={handleSort}
        onDelete={handleDelete}
        showEdit
      />
      <br />
      <br></br>
      <Box height={"400px"} width={"400px"}>
        <StyledChart />
      </Box>
      <StyledDropDown />
      <br />
      <br />
      <br />{" "}
      <Button variant="outlined" onClick={handleOpenFilter}>
        Open Filter
      </Button>
      <StyledFilter open={filterOpen} onClose={handleCloseFilter} />
      <StyledCalender />
      <PendingApprovel />
      <StaffDetails />
      <ApprovalPage />
      <StyledTextArea placeholder={"Description"} />
      <LiveLocation /><StaffDetail/><Report/>
      <StyledCalender/><PendingApprovel/>
     <StaffDetails/><ApprovalPage/>


     <CreateEvent/>


    <AddNewRole/>

    <StaffDetailsAdd/>


    <PolicyEdit/><CalendarInput/>
    <UpoloadBulk/>

    <PasswordSuccess/>
    <ChangePassword/>
    <ForgotPassword/>
    </>
  );
};

export default Text;
