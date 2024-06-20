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
    props.variant === "yellow" &&
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
    props.variant === "blue" &&
    `
      background-color: #EAF2FF;
      color: #5B93FF;
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
