import React from "react";
import styled, { css } from "styled-components";

const buttonVariants = css`
  ${(props) =>
    props.variant === "primary" &&
    css`
      border: none;
      font-size: 18px;
      font-weight: 600;
      color: #ffffff;
      line-height: 18px;
      background-color: #79001d;
    `}
  ${(props) =>
    props.variant === "secondary" &&
    css`
      border: 1px solid #a8a8a8;
      font-size: 18px;
      font-weight: 700;
      color: #919099;
      line-height: 18px;
      background-color: #ffffff;
    `}
  ${(props) =>
    props.variant === "green" &&
    css`
      border: none;
      font-size: 19px;
      font-weight: 600;
      line-height: 24px;
      background-color: #14ae5c;
    `}
  ${(props) =>
    props.variant === "danger" &&
    css`
      border: none;
      font-size: 19px;
      font-weight: 600;
      color: #ffffff;
      line-height: 24px;
      background-color: #e00d00;
    `}
  ${(props) =>
    props.variant === "gray" &&
    css`
      border: 1px solid #bebebe;
      font-size: 19px;
      color: #000000;
      font-weight: 400;
      line-height: 24px;
      background-color: #f1f1f1;
    `}
  ${(props) =>
    props.variant === "white" &&
    css`
      border: 1px solid #79001d;
      font-size: 19px;
      color: #79001d;
      font-weight: 600;
      line-height: 24px;
      background-color: #ffffff;
    `}
  ${(props) =>
    props.variant === "action" &&
    css`
      border: 1px solid #bebebe;
      font-size: 16px;
      color: ${props.color || "#79001d"};
      font-weight: 500;
      line-height: 20px;
      background-color: #ffffff;
    `}
`;

const ButtonContainer = styled.button`
  padding: 15px 20px;
  text-align: center;
  width: 100%;  // Ensure the button container is full width
  font-family: "Inter", "sans-serif";
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  ${buttonVariants}
`;

const StyledButton = ({ name, variant, color, onClick }) => {
  return (
    <ButtonContainer variant={variant} color={color} onClick={onClick}>
      {name}
    </ButtonContainer>
  );
};

export default StyledButton;
