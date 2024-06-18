import React, { useState } from "react";
import {
  Box,
  Typography,
  Dialog,
  DialogContent,
  Divider
} from "@mui/material";
import StyledDropDown from "../ui/StyledDropDown";
import StyledButton from "../ui/StyledButton";

const tierOptions = ["Tier 1", "Tier 2", "Tier 3"];
const stateOptions = ["California", "Texas", "Florida", "New York"];
const locationOptions = ["San Francisco", "Austin", "Miami", "New York City"];

const StyledFilter = ({ open, onClose }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedTiers, setSelectedTiers] = useState([]);
  const [selectedStates, setSelectedStates] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleApply = () => {
    console.log("Selected Tiers:", selectedTiers);
    console.log("Selected States:", selectedStates);
    console.log("Selected Locations:", selectedLocations);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="481px">
      <DialogContent sx={{ height: "auto", width: "380px", padding: 0 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
          marginTop={"10px"}
          padding={3}
          paddingBottom={0}
        >
          <Typography variant="h4">Filter</Typography>
          <Typography onClick={onClose} color="#E71D36">
            Clear
          </Typography>
        </Box>
        <Divider />
        <Box mb={2} p={1}>
          <StyledDropDown
            label="Tier"
            options={tierOptions}
            selectedItems={selectedTiers}
            onSelectionChange={setSelectedTiers}
            open={openDropdown === "tier"}
            onToggle={() => handleDropdownToggle("tier")}
          />
        </Box>
        <Box mb={2} p={1}>
          <StyledDropDown
            label="State"
            options={stateOptions}
            selectedItems={selectedStates}
            onSelectionChange={setSelectedStates}
            open={openDropdown === "state"}
            onToggle={() => handleDropdownToggle("state")}
          />
        </Box>
        <Box mb={2} p={1}>
          <StyledDropDown
            label="Location"
            options={locationOptions}
            selectedItems={selectedLocations}
            onSelectionChange={setSelectedLocations}
            open={openDropdown === "location"}
            onToggle={() => handleDropdownToggle("location")}
          />
        </Box>
      </DialogContent>
      <Box p={3}>
        <StyledButton variant="primary" name="Apply" onClick={handleApply} />
      </Box>
    </Dialog>
  );
};

export default StyledFilter;
