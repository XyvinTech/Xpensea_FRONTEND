import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { SearchIcon } from "../assets/icons/SearchIcon";

const Search = styled("div")(({ theme }) => ({
  borderRadius: "24px",
  paddingTop: '4px',
  marginRight: '11px',
  position: "relative",
  height: '48px',
  alignItems: "center",
  backgroundColor: "g",
  marginLeft: 0,
  width: "100%",
  boxShadow: '0 -4px 8px rgba(150, 150, 150, 0.03)', 
  [theme.breakpoints.up("sm")]: {
    marginLeft: "35em",
    width: "320px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#828282",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#828282",
  alignItems: "center",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const StyledSearchbar = () => {
  return (
    <div>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search Event"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </div>
  );
};

export default StyledSearchbar;
