import { Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { ProgramIcon } from "../../assets/icons/ProgramIcon";
import expense from "../../assets/json/ApprovalExpenseData";
import ExpenseDetail from "./ExpenseDetail";

const Expenses = ({ data }) => {
  const [detailOpen, setDetailOpen] = useState(false);

  const handleOpenDetail = () => {
    setDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setDetailOpen(false);
  };
  return (
    <Stack spacing={1} bgcolor={"#fff"} borderRadius={"12px"}>
      <Typography
        bgcolor="#FFF7F3"
        padding={3}
        color={"#79001D"}
        variant="h3"
        fontWeight={600}
      >
        Expenses
      </Typography>{" "}
      <Grid container>
        {data?.map((item) => (
          <Grid
            item
            key={item?._id}
            md={3}
            padding={2}
            paddingBottom={4}
            onClick={handleOpenDetail}
            sx={{ cursor: "pointer" }}
          >
            <Stack spacing={2}>
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
                      {item?.amount}
                    </Typography>
                  </Stack>
                </Stack>
                <Typography variant="h4" color={"green"}>
                  <span
                    style={{
                      backgroundColor: "rgba(209, 250, 229, 0.5)",
                      borderRadius: "50%",
                      padding: "3px",
                    }}
                  >
                    {" "}
                    ✔
                  </span>
                </Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                paddingLeft={2}
                paddingRight={2}
              >
                <Typography variant="h4" color={"#838485"}>
                  {item?.location}
                </Typography>
                <Typography
                  variant="h4"
                  color="#B4B4B4"
                  fontWeight={400}
                  style={{ cursor: "pointer" }}
                >
                  {item?.createdAt}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        ))}
      </Grid>
      <ExpenseDetail open={detailOpen} onClose={handleCloseDetail} />
    </Stack>
  );
};

export default Expenses;
