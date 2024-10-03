import {
  Box,
  Button,
  Grid,
  LinearProgress,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { GtIcon } from "../../assets/icons/GtIcon";
import StaffDetail from "../../components/staff/StaffDetail";
import Report from "../../components/staff/Report";
import { useNavigate, useParams } from "react-router-dom";
import { useUserStore } from "../../store/userStore";
import ReportTable from "./ReportTable";
import WalletTable from "./WalletTable";
import WalletComponent from "../../components/staff/WalletComponent";
import WalletTables from "./WalletTables";
const StaffView = () => {
  const navigate = useNavigate();
  const { user, fetchUserById, loading } = useUserStore();
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
      {loading ? (
        <LinearProgress />
      ) : (
        <>
          <Box display="flex" alignItems="center">
            <Typography variant="h11" marginRight={1} onClick={() => {
                    navigate(-1);
                  }}
                  sx={{
                    cursor: "pointer",
                    "&:hover": {
                      color: "#002B9B",
                    },
                  }}>
              Staff Page
            </Typography>
            <Typography variant="h11" marginRight={1}>
              &gt;
            </Typography>
            <Typography variant="h11" marginLeft={1}>
              Staff Details
            </Typography>
          </Box>
          <Grid container spacing={2} paddingTop={2}>
            <Grid item xs={12} md={6}>
              {user && <StaffDetail user={user} />}
            </Grid>

            <Grid item xs={12} md={6}>
              <Report id={id} />
            </Grid>
            <Grid item xs={12}>
              <WalletComponent id={id} />
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
          {selectedTab === 0 && <WalletTables id={id} />}
          {selectedTab === 1 && <ReportTable id={id} />}
        </>
      )}
    </>
  );
};

export default StaffView;
