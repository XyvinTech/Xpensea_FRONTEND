import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import location from "../../assets/images/location.png";
import locationData from "../../assets/json/LiveLocation";
const LiveLocation = () => {
  return (
    <Stack spacing={1} bgcolor={"#fff"} borderRadius={"12px"} paddingBottom={4}>
      <Typography
        bgcolor="#FFF7F3"
        padding={3}
        color={"#79001D"}
        variant="h3"
        fontWeight={600}
      >
        Live Location
      </Typography>
      <Grid container>
        {locationData.map((item) => (
          <Grid item key={item.id} md={6}>
            <Stack
              padding={2}
              direction={"row"}
              justifyContent={"space-between"}
            >
              <Stack direction="column" spacing={1}>
                <Typography variant="h3" textTransform={"uppercase"}>
                  {item.day}
                </Typography>

                <Stack direction="row" spacing={1} alignItems={"center"}>
                  <img src={location} width={"115px"} height={"78px"} />
                  <Typography variant="h3" color="#838485">
                    {item.location}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default LiveLocation;
