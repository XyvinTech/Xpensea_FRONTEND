import { Box, Button, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import StyledTable from "../../ui/StyledTable";
import { useListStore } from "../../store/listStore";

const DebitTable = ({ id }) => {
  const { fetchWallet } = useListStore();
  const [pageNo, setPageNo] = useState(1);
  const [row, setRow] = useState(10);
  useEffect(() => {
    let filter = {};
    filter.type = "debit";
    filter.staffId = id;
    filter.pageNo = pageNo;
    filter.limit = row;
    fetchWallet(filter);
  }, [fetchWallet, pageNo, row]);
  const userColumns = [
    { title: "tRANSACTION ID", field: "_id", sortable: true },
    { title: "AMOUNT", field: "amount", sortable: true },
    { title: "DEDUCTED ON", field: "date", sortable: true },
    { title: "PERFORMED BY", field: "performedBy", sortable: true },
    { title: "Status", field: "status", sortable: true },
  ];
  return (
    <Stack paddingTop={4} paddingBottom={2}>
      <Box bgcolor={"white"} paddingTop={0}>
        <StyledTable
          columns={userColumns}
          pageNo={pageNo}
          setPageNo={setPageNo}
          rowPerSize={row}
          setRowPerSize={setRow}
        />
      </Box>
    </Stack>
  );
};

export default DebitTable;
