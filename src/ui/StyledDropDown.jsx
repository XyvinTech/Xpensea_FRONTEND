import React, { useState } from "react";
import styled from "styled-components";
import StyledCheckbox from "./StyledCheckbox";
import { ExpandMoreIcon } from "../assets/icons/ExpandMoreIcon";
import { SearchIcon } from "../assets/icons/SearchIcon";

const StyledSelect = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.div`
  padding: 10px 26px 10px 12px;
  font-size: 16px;
  background-color: white;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:focus {
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

const StyledMenu = styled.ul`
  position: relative;
  top: calc(100% + 4px);
  left: 0;
  width: 100%;
  max-height: 600px;
  overflow-x: hidden;
  background-color: white;
  z-index: 1;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledMenuItem = styled.li`
  padding: 8px 16px;
  cursor: pointer;
  display: flex;
  gap: 10px;
  align-items: center;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 8px;
`;

const StyledSearchInput = styled.input`
  width: 100%;
  padding: 8px 8px 8px 30px; // Adjust padding to make space for the icon
  margin: 0;
  border: none;
  color: black;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  &::placeholder {
    color: black;
  }

  &:focus {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    outline: none;
  }
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 10px; // Adjust based on icon size and padding
  transform: translateY(-50%);
  pointer-events: none;
`;

const StyledShowMore = styled.button`
  padding: 8px 16px;
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledDropDown = ({
  label,
  options,
  selectedItems,
  onSelectionChange,
}) => {
  const [open, setOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  const handleChange = (option) => {
    let newSelectedItems;
    if (selectedItems.includes(option)) {
      newSelectedItems = selectedItems.filter((item) => item !== option);
    } else {
      newSelectedItems = [...selectedItems, option];
    }
    onSelectionChange(newSelectedItems);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <StyledSelect>
      <StyledInput onClick={handleToggle}>
        {selectedItems?.join(", ") || label}
        <ExpandMoreIcon />
      </StyledInput>
      {open && (
        <StyledMenu>
          <SearchInputWrapper>
            <StyledSearchInput
              type="text"
              placeholder={`Search ${label}`}
             
            />
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          </SearchInputWrapper>
          {options.slice(0, visibleCount).map((option) => (
            <StyledMenuItem key={option} onClick={() => handleChange(option)}>
              <StyledCheckbox
                checked={selectedItems.includes(option)}
                onChange={() => handleChange(option)}
                variant="primary"
              />
              {option}
            </StyledMenuItem>
          ))}
          {visibleCount < options.length && (
            <StyledShowMore onClick={handleShowMore}>Show more</StyledShowMore>
          )}
        </StyledMenu>
      )}
    </StyledSelect>
  );
};

export default StyledDropDown;
