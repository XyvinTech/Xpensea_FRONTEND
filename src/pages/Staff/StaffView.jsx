import { Box, Button, Grid, Stack, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { GtIcon } from "../../assets/icons/GtIcon";
import StaffDetail from "../../components/staff/StaffDetail";
import Report from "../../components/staff/Report";
import { useParams } from "react-router-dom";
import { useUserStore } from "../../store/userStore";
import ReportTable from "./ReportTable";
import WalletTable from "./WalletTable";
import WalletComponent from "../../components/staff/WalletComponent";
const StaffView = () => {
  const { user, fetchUserById } = useUserStore();
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchUserById(id);
    }
  }, [id, fetchUserById]);

  return (
    <>
      <Box display="flex" alignItems="center" paddingTop={2}>
        <Typography variant="h11" marginRight={1}>
          Staff Page
        </Typography>
        <GtIcon />
        <Typography variant="h11" marginLeft={1}>
          Staff Details
        </Typography>
      </Box>
      <Grid container spacing={2} paddingTop={2}>
        <Grid item xs={12} md={6}>
          {user && <StaffDetail user={user} />}
        </Grid>

        <Grid item xs={12} md={6}>
          <Report />
        </Grid>
        <Grid item xs={12}>
          <WalletComponent />
        </Grid>
      </Grid>
      <Box paddingTop={2}>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          aria-label="tabs"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#002B9B",
              height: 4,
              borderRadius: "4px",
            },
          }}
          sx={{
            bgcolor: "white",
            paddingTop: "14px",
            "& .MuiTabs-indicator": {
              backgroundColor: "#002B9B",
            },
            "& .MuiTab-root": {
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 600,
            },
            "& .Mui-selected": {
              color: "#002B9B",
            },
          }}
        >
          <Tab label="Wallet Transactions" />
          <Tab label="Reports" />
        </Tabs>
      </Box>
      {selectedTab === 0 && <WalletTable />}
      {selectedTab === 1 && <ReportTable id={id} />}
    </>
  );
};

export default StaffView;
