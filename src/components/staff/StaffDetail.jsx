import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import img from "../../assets/images/staff.png";
import StyledSwitch from "../../ui/StyledSwitch";
import data from "../../assets/json/StaffDetail";
const StaffDetail = () => {
  return (
    <Box bgcolor={"#fff"} height={"338px"}display={"flex"} alignItems={"center"} justifyContent={"center"}  >
      {data.map((item) => (
        <Grid container spacing={2} key={item.id}  >
          <Grid item md={4}>
            <Stack alignItems={"center"}>
              <img
                src={img}
                alt="img"
                width={"190px"}
                height={"190px"}
                style={{ borderRadius: "50%" }}
              />
              <Typography variant="h11">{item.name}</Typography>
              <Stack direction={"row"} spacing={6}>
                <Typography variant="h4" color={"#B4B4B4"}>
                 Status
                </Typography>
                <Typography>
                  <StyledSwitch />
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={4}>
            <Stack spacing={3}>
              <Stack>
                <Typography variant="h4" color={"#B4B4B4"} fontWeight={400}>
                  Date
                </Typography>
                <Typography variant="h4">{item.date}</Typography>
              </Stack>
              <Stack>
                <Typography variant="h4" color={"#B4B4B4"} fontWeight={400}>
                  Email
                </Typography>
                <Typography variant="h4">{item.email}</Typography>
              </Stack>
              <Stack>
                <Typography variant="h4" color={"#B4B4B4"} fontWeight={400}>
                  Tier
                </Typography>
                <Typography variant="h4">{item.tier}</Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={4}>
            <Stack spacing={3}>
              <Stack>
                <Typography variant="h4" color={"#B4B4B4"} fontWeight={400}>
                  Location
                </Typography>
                <Typography variant="h4">{item.location}</Typography>
              </Stack>
              <Stack>
                <Typography variant="h4" color={"#B4B4B4"} fontWeight={400}>
                  Ph No
                </Typography>
                <Typography variant="h4">{item.phoneNumber}</Typography>
              </Stack>
              <Stack>
                <Typography variant="h4" color={"#B4B4B4"} fontWeight={400}>
                  Role
                </Typography>
                <Typography variant="h4">{item.role}</Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default StaffDetail;
