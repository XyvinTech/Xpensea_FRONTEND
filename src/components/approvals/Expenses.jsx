import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { ProgramIcon } from "../../assets/icons/ProgramIcon";
import expense from "../../assets/json/ApprovalExpenseData";

const Expenses = () => {
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
      <Grid container  >
      {expense.map((item) => (
        <Grid item key={item.id} md={3} padding={2} paddingBottom={4}>
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
                    {item.type} expenses
                  </Typography>
                  <Typography variant="h4" fontWeight={"600"}>
                   {item.price}
                  </Typography>
                </Stack>
              </Stack>
              <Typography variant="h4" color={"green"}>
             <span style={{backgroundColor:"rgba(209, 250, 229, 0.5)",borderRadius:"50%",padding:"3px"}}> ✔</span>
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              paddingLeft={2}
              paddingRight={2}
            >
              <Typography variant="h4" color={"#838485"}>
                {item.location}
              </Typography>
              <Typography
                variant="h4"
                color="#B4B4B4"
                fontWeight={400}
                style={{ cursor: "pointer" }}
              >
               {item.date}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      ))}</Grid>
    </Stack>
  );
};

export default Expenses;
