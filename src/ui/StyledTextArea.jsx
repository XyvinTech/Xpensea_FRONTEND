import React from "react";
import styled from "styled-components";
const TextArea = styled.textarea`
   font-family: inter;
  width: 100%;
  height: 150px;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  background-color: #fff;
  color: #b0b0b0;
  font-size: 16px;
  resize: none;
  outline: none;

  &::placeholder {
    color: #79747E;
  }
`;
const StyledTextArea = ({ placeholder, onChange }) => {
    return <TextArea placeholder={placeholder} onChange={onChange} />;
  };
  
  export default StyledTextArea;
