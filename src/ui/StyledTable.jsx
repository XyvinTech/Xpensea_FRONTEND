import React, { useState } from "react";
import styled from "styled-components";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
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
import { EventIcon } from "../assets/icons/EventIcon";
import { Icon1 } from "../assets/icons/Icon1";
import { Icon2 } from "../assets/icons/Icon2";
import { EditIcon } from "../assets/icons/EditIcon";

const StyledTableCell = styled(TableCell)`
  &.${tableCellClasses.head} {
    background-color: #fff;
    color: #454545;
    text-transform: uppercase;
    font-size: 16px;
    padding: 16px;
    font-family: inter;
    text-align: center;
    font-weight: 600;
  }
  &.${tableCellClasses.body} {
    font-size: 16px;
    font-family: inter;
    padding: 16px;
    color: #4d515a;
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
  cursor: ${({ showEdit }) => (showEdit ? "pointer" : "default")};
  &:hover {
    background-color: ${({ showEdit }) => (showEdit ? "#f0f0f0" : "inherit")};
  }
`;

const StyledTable = ({
  columns,
  data,
  onSelectionChange,
  onView,
  onDelete,
  onEdit,
  onSort,
  onShare,
  showEdit,
  showShare,
  dashboard,
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

  const handleEdit = () => {
    onEdit(rowId);
    handleMenuClose();
  };
  const handleShare = () => {
    onShare(rowId);
    handleMenuClose();
  };
  const handleRowClick = (id) => {
    onView(id);
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
      case "rejected":
        return "rejected";
      default:
        return "default";
    }
  };
  const getEventIcon = (event) => {
    switch (event) {
      case "program":
        return <Icon1 />;
      case "trip":
        return <Icon2 />;
      default:
        return null;
    }
  };

  return (
    <Box>
      <TableContainer sx={{ border: "none" }}>
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
                          <Box marginRight={1}> {column.title}</Box> 
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
                {columns.map((column, index) => (
                  <StyledTableCell
                    key={column.field}
                    padding={column.padding || "normal"}
                    sx={{ cursor: "pointer" }}
                    onClick={() => handleRowClick(row.id)}
                  >
                    {index === 0 && (
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        {getEventIcon(row.event)}{" "}
                        {column.field === "status" ? (
                          <StyledSpan
                            variant={getStatusVariant(row[column.field])}
                            text={row[column.field]}
                          />
                        ) : (
                          row[column.field]
                        )}
                      </Box>
                    )}
                    {index !== 0 &&
                      (column.field === "status" ? (
                        <StyledSpan
                          variant={getStatusVariant(row[column.field])}
                          text={row[column.field]}
                        />
                      ) : (
                        row[column.field]
                      ))}
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
                    {showShare
                      ? [
                          <MenuItem key="view" onClick={handleShare}>
                            <StyledSpan
                              variant={"darkRed"}
                              text={
                                <>
                                  <ViewIcon /> share
                                </>
                              }
                            />
                          </MenuItem>,
                          <MenuItem key="delete" onClick={handleDelete}>
                            <StyledSpan
                              variant={"red"}
                              text={
                                <>
                                  <DeleteIcon /> Delete
                                </>
                              }
                            />
                          </MenuItem>,
                        ]
                      : showEdit
                      ? [
                          <MenuItem key="edit" onClick={handleEdit}>
                            <StyledSpan
                              variant={"blue"}
                              text={
                                <>
                                  <EditIcon /> Edit
                                </>
                              }
                            />
                          </MenuItem>,
                          <MenuItem key="delete" onClick={handleDelete}>
                            <StyledSpan
                              variant={"red"}
                              text={
                                <>
                                  <DeleteIcon /> Delete
                                </>
                              }
                            />
                          </MenuItem>,
                        ]
                      : [
                          <MenuItem key="view" onClick={handleView}>
                            <StyledSpan
                              variant={"darkRed"}
                              text={
                                <>
                                  <ViewIcon /> view
                                </>
                              }
                            />
                          </MenuItem>,
                          <MenuItem key="delete" onClick={handleDelete}>
                            <StyledSpan
                              variant={"red"}
                              text={
                                <>
                                  <DeleteIcon /> Delete
                                </>
                              }
                            />
                          </MenuItem>,
                        ]}
                  </Menu>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <Divider />
        {!dashboard && (
          <Stack
            padding={2}
            component="div"
            direction={"row"}
            justifyContent={
              selectedIds.length > 0 ? "space-between" : "flex-end"
            }
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
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center">
                <TablePagination
                  component="div"
                  labelDisplayedRows={({ from, to, count }) =>
                    `${from}-${to} of ${count}`
                  }
                  ActionsComponent={({ onPageChange }) => (
                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                      marginLeft={2}
                    >
                      <StyledButton
                        variant="action"
                        name="Previous"
                        onClick={() => onPageChange(null, "prev")}
                      />
                      <StyledButton
                        variant="action"
                        name="Next"
                        onClick={() => onPageChange(null, "next")}
                      />
                    </Stack>
                  )}
                />
              </Box>
            </Stack>
          </Stack>
        )}
      </TableContainer>
    </Box>
  );
};

export default StyledTable;
