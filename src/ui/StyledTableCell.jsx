
import styled from "styled-components";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

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

export default StyledTableCell;
