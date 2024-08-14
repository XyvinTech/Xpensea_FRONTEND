import React from "react";
import {
  Box,
  Typography,
  Dialog,
  DialogContent,
  Divider,
  Stack,
} from "@mui/material";
import StyledButton from "../../ui/StyledButton";
import { CrossIcon } from "../../assets/icons/CrossIcon";
import location from "../../assets/images/location.png";
import receipt from "../../assets/images/receipt.png";

const ExpenseDetail = ({
  open,
  onClose,
  expense,
  onMarkAuthentic,
  onMarkFaulty,
}) => {
  if (!expense) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="481px">
      <DialogContent sx={{ height: "auto", width: "480px", padding: 0 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
          marginTop={"10px"}
          padding={3}
          paddingBottom={0}
        >
          <Typography variant="h11"> {expense.category} Expense</Typography>
          <Typography onClick={onClose} style={{ cursor: "pointer" }}>
            <CrossIcon />
          </Typography>
        </Box>
        <Divider />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          padding={2}
        >
          <Stack direction="row" spacing={1}>
            <Stack direction="column" spacing={1}>
              <Typography variant="h4" color={"#333333"}>
                {expense.title}
              </Typography>
              <Typography variant="h3" fontWeight={"600"} color={" #002B9B"}>
                {expense.amount}
              </Typography>
            </Stack>
          </Stack>
          <Typography variant="h5" color={"#B4B4B4"} fontWeight={400}>
            {expense.createdAt}
          </Typography>
        </Stack>
        <Divider />
        <Stack direction="column" padding={2} spacing={5}>
          <Stack direction={"row"} padding={2} bgcolor={"#F3F3F3"} spacing={2}>
            <img src={receipt} width={"68px"} height={"68px"} alt="Receipt" />
            <Stack direction="column" justifyContent={"center"}>
              <Typography variant="h4" fontWeight={600}>
                {expense.receiptNumber}
              </Typography>
              <Typography variant="h5" fontWeight={400} color={"#B4B4B4"}>
                {expense.receiptSize}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Divider />
        <Stack padding={2}>
          <Typography variant="h4" fontWeight={400} color={"#353434"}>
            {expense.description}
          </Typography>
        </Stack>{" "}
        <Divider />
        <Stack direction="row" padding={2} spacing={2}>
          <img src={location} width={"100px"} height={"67px"} alt="Location" />

          <Typography variant="h4" color={"#838485"}>
            {expense.location}
          </Typography>
        </Stack>
      </DialogContent>

      <Stack direction="row" padding={2} spacing={2}>
        <StyledButton
          variant="green"
          name="Mark as Authentic"
          onClick={onMarkAuthentic}
        />
        <StyledButton
          variant="danger"
          name="Mark as Faulty"
          onClick={onMarkFaulty}
        />
      </Stack>
    </Dialog>
  );
};

export default ExpenseDetail;
