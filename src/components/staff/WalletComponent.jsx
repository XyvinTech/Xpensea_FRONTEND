import { Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import StyledButton from "../../ui/StyledButton";
import AddPayment from "./AddPayment";
import { useTransactionStore } from "../../store/transactionStore";

const WalletComponent = ({ id }) => {
  const [paymentOpen, setPaymentOpen] = useState(false);
  const { fetchWallet, transaction } = useTransactionStore();
  const [isChange, setIsChange] = useState(false);
  const handleOpenPayment = () => {
    setPaymentOpen(true);
  };

  const handleClosePayment = () => {
    setPaymentOpen(false);
    setIsUpdate(false);
  };
  const handleChange = () => {
    setIsChange(!isChange);
  };
  useEffect(() => {
    fetchWallet(id);
  }, []);
  return (
    <Grid container bgcolor={"white"} padding={2} alignItems={"center"}>
      <Grid item xs={2}>
        <Typography variant="h3" fontWeight={600}>
          Wallet
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Stack>
          <Typography variant="h4" color={"#B4B4B4"}>
            Balance Amount
          </Typography>
          <Typography variant="h3"> {transaction?.balanceAmount}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={2}>
        {" "}
        <Stack>
          <Typography variant="h4" color={"#B4B4B4"}>
            Total Amount
          </Typography>
          <Typography variant="h3"> {transaction?.totalAmount}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6} display={"flex"} justifyContent={"end"}>
        <StyledButton
          variant={"primary"}
          name={"Add payment"}
          onClick={handleOpenPayment}
        />
        <AddPayment
          open={paymentOpen}
          onClose={handleClosePayment}
          onChange={handleChange}
          id={id}
        />
      </Grid>
    </Grid>
  );
};

export default WalletComponent;
