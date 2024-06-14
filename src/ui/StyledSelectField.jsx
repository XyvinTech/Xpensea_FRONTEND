import React from "react";
import styled from "styled-components";
import Select from "react-select";

const SelectContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledSelectField = ({ placeholder, options, onChange, value }) => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: "100%",
      
       padding: "8px",
      border: "1px solid rgba(0, 0, 0, 0.2)",
      borderRadius: "4px",
      backgroundColor: "#ffffff",
      color: "#000000",
      boxShadow: state.isFocused ? "0 0 0 2px #fff" : "none",
      cursor: "pointer",
      "&:hover": {
        borderColor: "rgba(0, 0, 0, 0.2)",
      },
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    option: (provided, state) => ({
      ...provided,
    
      backgroundColor: state.isFocused ? "#79747E" : "transparent",
      color: state.isFocused ? "#ffffff" : "#000000",
      cursor: "pointer",
      ":active": {
        backgroundColor: "#79747E",
      },
    }),
    menu: (provided) => ({
      ...provided,
      position:"relative",
      backgroundColor: "#ffffff",
      color: "#B5B8C5",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "##F7F8FC",
    }),
    placeholder: (provided) => ({
        ...provided,
        color: "#79747E",
      }),
  };

  return (
    <SelectContainer>
      <Select
        placeholder={placeholder}
        options={options}
        onChange={onChange}
        styles={customStyles}
      />
    </SelectContainer>
  );
};
export default StyledSelectField;

