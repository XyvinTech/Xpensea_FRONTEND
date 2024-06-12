import React, { useState } from "react";
import styled from "styled-components";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import StyledCheckbox from "./StyledCheckbox";
import {
  Box,
  Button,
  Divider,
  Stack,
  TablePagination,
  TableSortLabel,
  Typography,
} from "@mui/material";
import StyledButton from "./StyledButton";

const StyledTableCell = styled(TableCell)`
  &.${tableCellClasses.head} {
    background-color: #ffffff;
    color: #000000;
    text-transform: uppercase;
  }
  &.${tableCellClasses.body} {
    font-size: 14px;
    font-family: inter;
  }
`;

const StyledTableRow = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: #f8fafc;
  }
  &:last-child td,
  &:last-child th {
    border: 0;
  }
`;

const StyledTable = ({ columns, data, onSelectionChange }) => {
  const [selectedIds, setSelectedIds] = useState([]);

  const handleSelectAllClick = (event) => {
    const isChecked = event.target.checked;
    const newSelectedIds = isChecked ? data.map((row) => row.id) : [];
    setSelectedIds(newSelectedIds);
    onSelectionChange(newSelectedIds);
  };

  const handleRowCheckboxChange = (event, id) => {
    const isChecked = event.target.checked;
    const newSelectedIds = isChecked
      ? [...selectedIds, id]
      : selectedIds.filter((selectedId) => selectedId !== id);
    setSelectedIds(newSelectedIds);
    onSelectionChange(newSelectedIds);
  };

  const isSelected = (id) => selectedIds.includes(id);

  return (
    <Box padding={6} >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <StyledCheckbox
                  checked={
                    data.length > 0 && selectedIds.length === data.length
                  }
                  onChange={handleSelectAllClick}
                />
              </TableCell>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.field}
                  padding={column.padding || "normal"}
                >
                  <TableSortLabel>{column.title}</TableSortLabel>
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <StyledTableRow
                role="checkbox"
                key={row.id}
                selected={isSelected(row.id)}
              >
                <TableCell padding="checkbox">
                  <StyledCheckbox
                    checked={isSelected(row.id)}
                    onChange={(event) => handleRowCheckboxChange(event, row.id)}
                  />
                </TableCell>
                {columns.map((column) => (
                  <StyledTableCell
                    key={column.field}
                    padding={column.padding || "normal"}
                  >
                    {row[column.field]}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <Divider />
        <Stack
          padding={2}
          component="div"
          direction={"row"}
          justifyContent={selectedIds.length > 0 ? "space-between" : "flex-end"}
          alignItems="center"
        >
          {selectedIds.length > 0 && (
            <Stack direction="row" alignItems="center">
              <Typography paddingRight={3}>
                {`${selectedIds.length} item${selectedIds.length > 1 ? "s" : ""} selected`}
              </Typography>
              <StyledButton variant="action" color="red" name="Delete" />
            </Stack>
          )}
          <Stack direction="row" alignItems="center">
            <Typography variant="body2" sx={{ paddingRight: 1 }}>
              Rows per page:
            </Typography>
            <TablePagination
              component="div"
              labelDisplayedRows={({ from, to, count }) => `${from}-${to} of ${count}`}
              rowsPerPageOptions={[]}
              ActionsComponent={() => (
                <Stack direction="row" spacing={1} height={"52px"} paddingLeft={2}>
                  <StyledButton variant="action" name="Previous" />
                  <StyledButton variant="action" name="Next" />
                </Stack>
              )}
            />
          </Stack>
        </Stack>
      </TableContainer>
    </Box>
  );
};

export default StyledTable;
