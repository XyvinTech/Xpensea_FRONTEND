import React, { useState } from "react";
import StyledButton from "../../ui/StyledButton";
import {
  Box,
  Dialog,
  DialogContent,
  Divider,
  Stack,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import StyledSwitch from "../../ui/StyledSwitch";
import StyledInput from "../../ui/StyledInput";
import rows from "../../assets/json/RoleManagementData";

const RoleManagement = ({ open, onClose }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedTab, setSelectedTab] = useState('functional'); 

  const handleSubmit = () => {
    console.log("clicked");
  };

  const handleClear = () => {
    onClose();
  };

  const handleSwitchChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSpanClick = (itemId) => {
    console.log(itemId);
  };
  
  
  const tableCellStyle = {
    color: "#4D515A",
    fontSize: "18px",
    textAlign: "center",
  };

  const spanStyle = (filled) => ({
    display: "inline-block",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: filled ? "#79001D" : "transparent",
    border: "4px solid rgba(121, 0, 29, 0.5)",
    cursor: "pointer",
  });

  return (
    <Dialog open={open} onClose={onClose} maxWidth="481px">
      <DialogContent sx={{ height: "auto", width: "480px", padding: 0 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
          marginTop={"10px"}
          padding={3}
          paddingBottom={0}
        >
          <Typography variant="h11">Role Management</Typography>
          <StyledSwitch checked={isChecked} onChange={handleSwitchChange} />
        </Box>
        <Divider />
        <Box padding={2}>
          <StyledInput placeholder={"Enter Role Name"} />
          <Box display="flex" width={"50%"} paddingTop={2} gap={2}>
            <Button
              style={{
                cursor: 'pointer',
                textTransform: "none",
                backgroundColor: selectedTab === 'functional' ? '#79001D' : "#fff",
                border: "1px solid rgba(226, 232, 240, 1)",
                padding: "10px",
                color: selectedTab === 'functional' ? '#fff' : "#4D515A"
              }}
              onClick={() => setSelectedTab('functional')}
            >
              Functional
            </Button>
            <Button
              style={{
                cursor: 'pointer',
                textTransform: "none",
                backgroundColor: selectedTab === 'locational' ? '#79001D' : "#fff",
                border: "1px solid rgba(226, 232, 240, 1)",
                padding: "10px",
                color: selectedTab === 'locational' ? '#fff' : "#4D515A"
              }}
              onClick={() => setSelectedTab('locational')}
            >
              Locational
            </Button>
          </Box>
        </Box>
        {selectedTab === 'functional' ? (
          <TableContainer component={Paper} sx={{ marginTop: 0, paddingLeft: 2, paddingRight: 2 }}>
            <Table>
              <TableHead
                sx={{
                  backgroundColor: "#FFF7F3",
                  borderBottom: "2px solid #79001D",
                }}
              >
                <TableRow sx={{ textTransform: "uppercase" }}>
                  <TableCell sx={tableCellStyle}>Tier</TableCell>
                  <TableCell sx={tableCellStyle}>View</TableCell>
                  <TableCell sx={tableCellStyle}>Modify</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((item) => (
                  <TableRow
                    key={item.id}
                    sx={{
                      backgroundColor: item.id % 2 === 0 ? "#fff" : "#f9f9f9",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    <TableCell sx={tableCellStyle}>{item.tier}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      <span style={spanStyle(item.view === "yes")} onClick={() => handleSpanClick(item.id)} />
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      <span style={spanStyle(item.modify === "yes")} onClick={() => handleSpanClick(item.id)} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Box padding={2}>
            <Typography>Hi</Typography>
          </Box>
        )}
      </DialogContent>
      <Box display="flex" justifyContent="space-between" padding={3} gap={4}>
        <StyledButton variant="secondary" name="Cancel" onClick={handleClear} />
        <StyledButton variant="primary" name="Save" onClick={handleSubmit} />
      </Box>
    </Dialog>
  );
};

export default RoleManagement;
