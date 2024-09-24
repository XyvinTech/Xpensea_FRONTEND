import { Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { ApproveIcon } from "../../assets/icons/ApproveIcon";

const Details = ({ data }) => {
  return (
    <Stack
      bgcolor={"#fff"}
      borderRadius={"12px"}
      paddingBottom={4}
      minHeight={"319px"}
    >
      <Typography padding={3} color={"#002B9B"} variant="h3" fontWeight={600}>
        Details
      </Typography>{" "}
      <Divider sx={{ width: "100%" }} />
      <Stack padding={2} direction={"row"} justifyContent={"space-between"}>
        <Stack direction="row" spacing={1}>
          <ApproveIcon />
          <Stack direction="column" spacing={1}>
            <Typography variant="h4" color={"#333333"}>
              {data?.title}
            </Typography>
            <Typography variant="h11" color="#002B9B" fontWeight={"600"}>
              Rs {data?.totalAmount}
              <Typography variant="h3">{data?.createdAt}</Typography>
            </Typography>
            {data?.creator?.name && (
              <Typography variant="h3">
                Created By: {data?.creator?.name}
              </Typography>
            )}
            {data?.start && (
              <Typography variant="h3">Started on : {data?.start}</Typography>
            )}{" "}
            {data?.end && (
              <Typography variant="h3">Ended on : {data?.end}</Typography>
            )}
          </Stack>
        </Stack>
        <Stack spacing={2} justifyContent="center">
          <Typography variant="h3" color={"#333333"}>
            {data?.reportId}
          </Typography>
          <Typography variant="h3" color={"#B4B4B4"}></Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Details;
