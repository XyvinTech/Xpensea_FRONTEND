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
    { title: "Order", field: "title", sortable: false },
    { title: "Date", field: "reportDate", sortable: true },
    { title: "No of Expense", field: "expenseCount", sortable: true },
    { title: "Total", field: "totalAmount", sortable: true },
    { title: "Location", field: "location", sortable: false },
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
