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
  Divider,
  Stack,
  TablePagination,
  TableSortLabel,
  Typography,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import StyledButton from "./StyledButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import StyledSpan from "./StyledSpan";
import { ViewIcon } from "../assets/icons/ViewIcon";
import { DeleteIcon } from "../assets/icons/DeleteIcon";
import { SortIcon } from "../assets/icons/SortIcon"; 

const StyledTableCell = styled(TableCell)`
  &.${tableCellClasses.head} {
    background-color: #ffffff;
    color: #4D515A;
    text-transform: uppercase;
     font-size: 14px;
    padding: 16px;
     font-family: inter;
    text-align: center;
    
  }
  &.${tableCellClasses.body} {
    font-size: 14px;
    font-family: inter;
    padding: 16px;
      color: #4D515A;
    text-align: center;
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

const StyledTable = ({
  columns,
  data,
  onSelectionChange,
  onView,
  onDelete,onSort
}) => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [rowId, setRowId] = useState(null);

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

  const handleMenuOpen = (event, id) => {
    setAnchorEl(event.currentTarget);
    setRowId(id);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setRowId(null);
  };

  const handleView = () => {
    onView(rowId);
    handleMenuClose();
  };

  const handleDelete = () => {
    onDelete(rowId);
    handleMenuClose();
  };

  const isSelected = (id) => selectedIds.includes(id);
  const getStatusVariant = (status) => {
    switch (status) {
      case "pending":
        return "yellow";
      case "completed":
        return "green";
      case "in-progress":
        return "blue";
      case "cancelled":
        return "red";
      default:
        return "default";
    }
  };

  return (
    <Box padding={6}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell padding="checkbox">
                <StyledCheckbox
                  checked={
                    data.length > 0 && selectedIds.length === data.length
                  }
                  onChange={handleSelectAllClick}
                />
              </StyledTableCell>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.field}
                  padding={column.padding || "normal"}
                >
                  {column.sortable ? (
                    <TableSortLabel
                      IconComponent={SortIcon}
                      onClick={() => onSort(column.field)}
                    >
                      {column.title}
                    </TableSortLabel>
                  ) : (
                    column.title
                  )}
                </StyledTableCell>
              ))}
              <StyledTableCell padding="normal"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <StyledTableRow
                role="checkbox"
                key={row.id}
                selected={isSelected(row.id)}
              >
                <StyledTableCell padding="checkbox">
                  <StyledCheckbox
                    checked={isSelected(row.id)}
                    onChange={(event) => handleRowCheckboxChange(event, row.id)}
                  />
                </StyledTableCell>
                {columns.map((column) => (
                  <StyledTableCell
                    key={column.field}
                    padding={column.padding || "normal"}
                  >
                    {column.field === "status" ? (
                      <StyledSpan
                        variant={getStatusVariant(row[column.field])}
                        text={row[column.field]}
                      />
                    ) : (
                      row[column.field]
                    )}
                  </StyledTableCell>
                ))}
                <StyledTableCell padding="normal">
                  <IconButton
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={(event) => handleMenuOpen(event, row.id)}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl) && rowId === row.id}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={handleView}>
                      <StyledSpan
                        variant={"darkRed"}
                        text={
                          <>
                            <ViewIcon /> View
                          </>
                        }
                      />
                    </MenuItem>
                    <MenuItem onClick={handleDelete}>
                      <StyledSpan
                        variant={"red"}
                        text={
                          <>
                            <DeleteIcon />
                            Delete
                          </>
                        }
                      />
                    </MenuItem>
                  </Menu>
                </StyledTableCell>
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
                {`${selectedIds.length} item${
                  selectedIds.length > 1 ? "s" : ""
                } selected`}
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
              labelDisplayedRows={({ from, to, count }) =>
                `${from}-${to} of ${count}`
              }
              rowsPerPageOptions={[]}
              ActionsComponent={() => (
                <Stack
                  direction="row"
                  spacing={1}
                  height={"52px"}
                  paddingLeft={2}
                >
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
