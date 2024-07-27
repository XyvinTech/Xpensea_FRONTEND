import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import img from "../../assets/images/staff.png";
import StyledSwitch from "../../ui/StyledSwitch";

const StaffDetail = ({ user }) => {
  const [isChecked, setIsChecked] = useState(user?.status || false);
  useEffect(() => {
    setIsChecked(user?.status || false);
  }, [user?.status]);

  return (
    <Box
      bgcolor={"#fff"}
      height={"338px"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {user && (
        <Grid container spacing={2} key={user?._id}>
          <Grid item md={4} xs={6}>
            <Stack alignItems={"center"} spacing={3}>
              <img
                src={img}
                alt="img"
                width={"190px"}
                height={"190px"}
                style={{ borderRadius: "50%" }}
              />
              <Typography variant="h11">{user?.name}</Typography>
              <Stack direction={"row"} spacing={6}>
                <Typography variant="h4" color={"#B4B4B4"}>
                  Status
                </Typography>
                <StyledSwitch checked={isChecked}variant={"primary"} />
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={4}>
            <Stack spacing={3}>
              <Stack>
                <Typography variant="h4" color={"#B4B4B4"} fontWeight={400}>
                  Date
                </Typography>
                <Typography variant="h4">
                  {new Date(user?.createdAt).toLocaleDateString()}
                </Typography>
              </Stack>
              <Stack>
                <Typography variant="h4" color={"#B4B4B4"} fontWeight={400}>
                  Email
                </Typography>
                <Typography variant="h4">{user?.email}</Typography>
              </Stack>
              <Stack>
                <Typography variant="h4" color={"#B4B4B4"} fontWeight={400}>
                  Tier
                </Typography>
                <Typography variant="h4">{user?.tier?.title}</Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={4}>
            <Stack spacing={3}>
              <Stack>
                <Typography variant="h4" color={"#B4B4B4"} fontWeight={400}>
                  Location
                </Typography>
                <Typography variant="h4">{user?.location}</Typography>
              </Stack>
              <Stack>
                <Typography variant="h4" color={"#B4B4B4"} fontWeight={400}>
                  Ph No
                </Typography>
                <Typography variant="h4">{user?.mobile}</Typography>
              </Stack>
              <Stack>
                <Typography variant="h4" color={"#B4B4B4"} fontWeight={400}>
                  Role
                </Typography>
                <Typography variant="h4">{user?.role}</Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default StaffDetail;
