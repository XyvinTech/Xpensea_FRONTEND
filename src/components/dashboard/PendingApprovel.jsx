import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { ProgramIcon } from "../../assets/icons/ProgramIcon";
import { ArrowIcon } from "../../assets/icons/ArrowIcon";
import { useNavigate } from "react-router-dom";

const PendingApprovals = ({ data }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ backgroundColor: "white", borderRadius: "8px" }}>
      <Stack spacing={4} padding={0} paddingBottom={0}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          padding={2}
          paddingBottom={0}
        >
          <Typography variant="h8" fontWeight="600" paddingTop={2}>
            Pending Approvals
          </Typography>
          <ArrowIcon />
        </Stack>
        <Divider />
        <Stack
          spacing={2}
          sx={{
            minHeight: "360px",
            maxHeight: "360px",
            borderRadius: "8px",
            paddingRight: "8px",
           
          }}
        >
          {data?.map((item) => (
            <Stack key={item?._id} spacing={2}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                paddingLeft={2}
                paddingRight={2}
              >
                <Stack direction="row" spacing={1}>
                  <ProgramIcon />
                  <Stack direction="column" spacing={1}>
                    <Typography variant="h5" color={"#333333"}>
                      {item?.title}
                    </Typography>
                    <Typography variant="h4" fontWeight={"600"}>
                      Rs {item?.totalAmount}{" "}
                      <Typography variant="h7" color={"#4F4F4F"}>
                        {item?.expensesCount} expenses
                      </Typography>
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
                    {item?.location}
                  </span>
                </Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                paddingLeft={2}
                paddingRight={2}
              >
                <Typography variant="h6" color={"#B4B4B4"}>
                  {item?.reportDate}
                </Typography>
                <Typography
                  variant="h6"
                  color="#002B9B"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`/approvals/view/${item?._id}`)}
                >
                  View more <ArrowIcon />
                </Typography>
              </Stack>
              <Divider />
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default PendingApprovals;
