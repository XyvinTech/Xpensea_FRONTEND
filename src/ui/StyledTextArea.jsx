import React from "react";
import styled from "styled-components";
const TextArea = styled.textarea`
   font-family: inter;
  width: 100%;
  height: 200px;
  padding: 20px;
  border: 1px solid #79747E;
  border-radius: 8px;
  background-color: #fff;
  color: #b0b0b0;
  font-size: 16px;
  resize: none;
  outline: none;

  &::placeholder {
    color: #bdbdbd;
  }
`;
const StyledTextArea = ({ placeholder, onChange }) => {
    return <TextArea placeholder={placeholder} onChange={onChange} />;
  };
  
  export default StyledTextArea;