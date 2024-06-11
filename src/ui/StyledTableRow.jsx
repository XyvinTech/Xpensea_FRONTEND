
import styled from "styled-components";
import TableRow from "@mui/material/TableRow";

const StyledTableRow = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color:#F8FAFC;
  }
  &:last-child td,
  &:last-child th {
    border: 0;
  }
`;

export default StyledTableRow;
