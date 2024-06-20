import { Stack, Typography } from "@mui/material";
import React from "react";
import { ApproveIcon } from "../../assets/icons/ApproveIcon";

const Details = () => {
  return (
    <Stack spacing={1} bgcolor={"#fff"} borderRadius={"12px"} paddingBottom={4}>
      <Typography
        bgcolor="#FFF7F3"
        padding={3}
        color={"#79001D"}
        variant="h3"
        fontWeight={600}
      >
        Details
      </Typography>
      <Stack
        padding={2}
        direction={"row"}
        justifyContent={"space-between"}
      >
        <Stack direction="row" spacing={1}>
          <ApproveIcon />
          <Stack direction="column" spacing={1}>
            <Typography variant="h8" color={"#333333"}>
              Onam purchases
            </Typography>
            <Typography variant="h11" color="#79001D" fontWeight={"600"}>
              Rs 1,401
              <Typography variant="h4" color={"#4F4F4F"}>
                Shop Expenses
              </Typography>
            </Typography>
          </Stack>
        </Stack>
        <Stack spacing={2} justifyContent="center">
          <Typography variant="h3" color={"#79001D"}>
            ApEx55213
          </Typography>
          <Typography variant="h4" color={"#B4B4B4"}>
            Nov 19 2023
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Details;
