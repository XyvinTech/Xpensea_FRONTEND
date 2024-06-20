import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import pendingApprovalsData from "../../assets/json/PendingApprovel";
import { ProgramIcon } from "../../assets/icons/ProgramIcon";
import { ArrowIcon } from "../../assets/icons/ArrowIcon";
import { TripIcon } from "../../assets/icons/TripIcon";

const iconMap = {
  event: <ProgramIcon  />,
  trip: <TripIcon  />,
};

const PendingApprovals = () => {
  return (
    <Box sx={{ backgroundColor: "white",borderRadius:"8px" }}>
      <Stack spacing={4} padding={0} paddingBottom={0}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"padding={2}paddingBottom={0}
        >
          {" "}
          <Typography variant="h8" fontWeight="600" paddingTop={2}>
            Pending Approvals
          </Typography>
          <ArrowIcon />
        </Stack>
        <Divider />
        {pendingApprovalsData.map((item) => (
          <Stack key={item.id} spacing={2} >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"paddingLeft={2} paddingRight={2}
            >
              <Stack direction="row" spacing={1}>
                {iconMap[item.icon]}{" "}
                <Stack direction="column" spacing={1}>
                  <Typography variant="h5" color={"#333333"}>{item.name}</Typography>
                  <Typography variant="h4" fontWeight={"600"}>
                    {item.price}{" "}
                    <Typography variant="h7" color={"#4F4F4F"}>{item.number}expenses</Typography>
                  </Typography>
                </Stack>
              </Stack>
              <Typography variant="h7">
                <span
                  style={{
                    padding: "5px",
                    borderRadius: "2px",
                    backgroundColor: "#FFF7F3",
                  }}
                >
                  {item.location}
                </span>
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between"paddingLeft={2} paddingRight={2}>
              <Typography variant="h6" color={"#B4B4B4"}>
                {item.date}
              </Typography>
              <Typography
                variant="h6"
                color="#79001D"
                style={{ cursor: "pointer" }}
              >
                View more <ArrowIcon />
              </Typography>
            </Stack>
            <Divider />
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default PendingApprovals;
