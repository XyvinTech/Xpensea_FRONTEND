import React from "react";
import styled from "styled-components";

const CheckboxContainer = styled.label`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
`;

const CheckboxInput = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
`;

const CheckboxIcon = styled.span`
  display: inline-block;
  width: 21px;
  height: 21px;
  border-radius: 6px;
  border:${(props) => (props.checked ? "none" : "1px solid #E0E7FF")};
  background-color: ${(props) => (props.checked ? props.variant === "primary" ? "#002B9B" : "#5D5FEF" : "white")};
  transition: background-color 0.3s, box-shadow 0.3s;
  &::before {
    display: ${(props) => (props.checked ? "block" : "none")};
    width: 21px;
    height: 21px;
    content: "";
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E");
  }
`;
const StyledCheckbox = ({ checked, disabled, onChange,variant }) => {
  return (
    <CheckboxContainer>
      <CheckboxInput
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <CheckboxIcon checked={checked} variant={variant} />
    </CheckboxContainer>
  );
};

export default StyledCheckbox;

