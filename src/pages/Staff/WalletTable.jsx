import { Box, Button, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import StyledTable from "../../ui/StyledTable";
import { useListStore } from "../../store/listStore";

const WalletTable = ({ id }) => {
  const { fetchLists } = useListStore();
  const [status, setStatus] = useState(null);
  const [pageNo, setPageNo] = useState(1);
  useEffect(() => {
    let filter = { type: "transactions" };
    if (status !== null) {
      filter.transactionType = status;
    }
    filter.staffId = id;
    filter.pageNo = pageNo;
    fetchLists(filter);
  }, [fetchLists, pageNo, status]);
  const userColumns = [
    { title: "tRANSACTION ID", field: "_id", sortable: true },
    { title: "AMOUNT", field: "amount", sortable: true },
    { title: "PAYMENT METHOD", field: "paymentMethod", sortable: true },
    { title: "Status", field: "status", sortable: true },
  ];
  return (
    <Stack paddingTop={4} paddingBottom={2}>
      <Box display="flex" width={"50%"} gap={1} mb={2}>
        <Button
          style={{
            cursor: "pointer",
            textTransform: "none",
            backgroundColor: status === null ? "#002B9B" : "#fff",
            borderRadius: "8px",
            border: "1px solid rgba(226, 232, 240, 1)",
            padding: "10px",
            color: status === null ? "#fff" : "#4D515A",
          }}
          onClick={() => setStatus(null)}
        >
          All
        </Button>

        <Button
          style={{
            cursor: "pointer",
            textTransform: "none",
            backgroundColor: status === "credit" ? "#002B9B" : "#fff",
            borderRadius: "8px",
            border: "1px solid rgba(226, 232, 240, 1)",
            padding: "10px",
            color: status === "credit" ? "#fff" : "#4D515A",
          }}
          onClick={() => setStatus("credit")}
        >
          Credit
        </Button>
        <Button
          style={{
            cursor: "pointer",
            textTransform: "none",
            backgroundColor: status === "debit" ? "#002B9B" : "#fff",
            border: "1px solid rgba(226, 232, 240, 1)",
            borderRadius: "8px",
            padding: "10px",
            color: status === "debit" ? "#fff" : "#4D515A",
          }}
          onClick={() => setStatus("debit")}
        >
          Debit
        </Button>
      </Box>
      <Box bgcolor={"white"} paddingTop={0}>
        <StyledTable
          columns={userColumns}
          pageNo={pageNo}
          setPageNo={setPageNo}
        />
      </Box>
    </Stack>
  );
};

export default WalletTable;
