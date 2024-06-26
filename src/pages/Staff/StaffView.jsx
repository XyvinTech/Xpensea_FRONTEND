import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { GtIcon } from "../../assets/icons/GtIcon";
import StaffDetail from "../../components/staff/StaffDetail";
import Report from "../../components/staff/Report";
import { useParams } from "react-router-dom";
import { useUserStore } from "../../store/userStore";

const StaffView = () => {
  const { user, fetchUserById } = useUserStore();
  const { id } = useParams();
  console.log("fff", id);
  useEffect(() => {
    if (id) {
      fetchUserById(id);
    }
  }, [id, fetchUserById]);
  console.log(user)
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
          <StaffDetail user={user} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Report />
        </Grid>
      </Grid>
    </>
  );
};

export default StaffView;
