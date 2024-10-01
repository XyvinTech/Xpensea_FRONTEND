import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import CreditTable from "./CreditTable";
import DebitTable from "./DebitTable";

const WalletTables = ({ id }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (tabIndex) => {
    setSelectedTab(tabIndex);
  };

  return (
    <>
      <Box display="flex" justifyContent="start" paddingY={2} paddingTop={4}>
        <Button
          onClick={() => handleTabChange(0)}
          variant={selectedTab === 0 ? "contained" : "outlined"}
          sx={{
            textTransform: "none",
            fontSize: "16px",
            fontWeight: 600,
            marginRight: 1,
            bgcolor: selectedTab === 0 ? "#002B9B" : "white",
            color: selectedTab === 0 ? "white" : "#002B9B",
            "&:hover": {
              bgcolor: selectedTab === 0 ? "#001A72" : "#f0f0f0",
            },
          }}
        >
          Credit
        </Button>
        <Button
          onClick={() => handleTabChange(1)}
          variant={selectedTab === 1 ? "contained" : "outlined"}
          sx={{
            textTransform: "none",
            fontSize: "16px",
            fontWeight: 600,
            bgcolor: selectedTab === 1 ? "#002B9B" : "white",
            color: selectedTab === 1 ? "white" : "#002B9B",
            "&:hover": {
              bgcolor: selectedTab === 1 ? "#001A72" : "#f0f0f0",
            },
          }}
        >
          Debit
        </Button>
      </Box>

      {selectedTab === 0 && <CreditTable id={id} />}
      {selectedTab === 1 && <DebitTable id={id} />}
    </>
  );
};

export default WalletTables;
