import { Box, Button, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import StyledTable from "../../ui/StyledTable";
import { useListStore } from "../../store/listStore";

const CreditTable = ({ id }) => {
  const { fetchWallet } = useListStore();
  const [pageNo, setPageNo] = useState(1);
  useEffect(() => {
    let filter = {};
    filter.type = "credit";
    filter.staffId = id;
    filter.pageNo = pageNo;
    fetchWallet(filter);
  }, [fetchWallet, pageNo]);
  const userColumns = [
    { title: "tRANSACTION ID", field: "_id", sortable: true },
    { title: "AMOUNT", field: "amount", sortable: true },
    { title: "REQUESTED ON", field: "date", sortable: true },
    { title: "REQUESTED BY", field: "performedBy", sortable: true },
    { title: "Status", field: "status", sortable: true },
  ];
  return (
    <Stack paddingTop={4} paddingBottom={2}>
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

export default CreditTable;
