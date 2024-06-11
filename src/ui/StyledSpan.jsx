import React from "react";
import styled from "styled-components";

const SpanContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content:center;
  padding: 6px 14px;
  font-family: "Inter", "sans-serif";
  font-weight: 500;
  font-size: 16px;
  border-radius: 20px;

  ${(props) =>
    props.variant === "green" &&
    `
      color:#059691;
      background-color:rgba(209, 250, 229, 0.5);

    `}

  ${(props) =>
    props.variant === "red" &&
    `
      color: #E11D48;
      background-color:rgba(255, 228, 230, 0.5);
    `}

  ${(props) =>
    props.variant === "yellow" &&
    `
    color: #E07706;
    background-color:rgba(254, 243, 199, 0.5);
    `}

  ${(props) =>
    props.variant === "darkRed" &&
    `
    background-color:rgba(255, 247, 243, 1);
      color: #79001D;
    `}

  ${(props) =>
    props.variant === "blue" &&
    `
    background-color:#EAF2FF;
    color:#5B93FF;
    `}
`;

const StyledSpan = ({ text, variant }) => {
  return <SpanContainer variant={variant}>{text}</SpanContainer>;
};

export default StyledSpan;
