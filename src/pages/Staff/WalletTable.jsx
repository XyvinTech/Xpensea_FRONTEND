import { Box, Stack } from "@mui/material";
import React, { useEffect } from "react";
import StyledTable from "../../ui/StyledTable";
import { useListStore } from "../../store/listStore";

const WalletTable = ({ id }) => {
  const { fetchLists,pageNo } = useListStore();
  useEffect(() => {
    let filter = { type: "transactions" };
   
    filter.staffId = id;
    filter.pageNo = pageNo;
    fetchLists(filter);
  }, [fetchLists, pageNo]);
  const userColumns = [
    { title: "STAFF NAME", field: "receiver", sortable: false },
    { title: "tRANSACTION ID", field: "reportDate", sortable: true },
    { title: "AMOUNT", field: "amount", sortable: true },
    { title: "PAYMENT METHOD", field: "totalAmount", sortable: true },
    { title: "REQUESTED BY", field: "receiver", sortable: true },
    { title: "Status", field: "status", sortable: true },
  ];
  return (
    <Stack paddingTop={4} paddingBottom={2}>
      <Box bgcolor={"white"} paddingTop={0}>
        <StyledTable columns={userColumns} />
      </Box>
    </Stack>
  );
};

export default WalletTable;
