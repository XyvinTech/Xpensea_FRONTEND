import React from "react";
import styled from "styled-components";

const SpanContainer = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  font-family: "Inter", "sans-serif";
  font-weight: 500;
  font-size: 16px;
`;

const TextSpan = styled.span`
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 20px;

  ${(props) =>
    props.variant === "green" &&
    `
      color: #059691;
      background-color: rgba(209, 250, 229, 0.5);
    `}

  ${(props) =>
    props.variant === "red" &&
    `padding: 10px 30px;
     border-radius:8px;
      color: #E11D48;
      background-color: rgba(255, 228, 230, 0.5);
    `}
 ${(props) =>
    props.variant === "rejected" &&
    `padding: 6px 14px;
     border-radius:20px;
      color: #E11D48;
      background-color: rgba(255, 228, 230, 0.5);
    `}
  ${(props) =>
    props.variant === "pending" &&
    `
      color: #E07706;
      background-color: rgba(254, 243, 199, 0.5);
    `}

  ${(props) =>
    props.variant === "darkRed" &&
    `padding: 10px 30px;
    border-radius:8px;
      background-color: rgba(255, 247, 243, 1);
      color: #79001D;
    `}

  ${(props) =>
    props.variant === "edit" &&
    `padding: 10px 40px;
    border-radius:8px;
      background-color: #EAF2FF;
      color: #5B93FF;
      width:100%;
    `}
      ${(props) =>
    props.variant === "share" &&
    `padding: 10px 40px;
    border-radius:8px;
      background-color: #F6EFFE;
      color: #7B61FF;
      width:100%;
    `}
`;

const StyledSpan = ({ text, variant }) => {
  return (
    <SpanContainer>
      <TextSpan variant={variant}>{text}</TextSpan>
    </SpanContainer>
  );
};

export default StyledSpan;
