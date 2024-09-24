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
      background-color: #002B9B;
    `}
  ${(props) =>
    props.variant === "secondary" &&
    css`
      border: 1px solid #002B9B;
      font-size: 18px;
      font-weight: 700;
      color: #002B9B;
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
      border: 1px solid #002B9B;
      font-size: 19px;
      color: #002B9B;
      font-weight: 600;
      line-height: 24px;
      background-color: #ffffff;
    `}
  ${(props) =>
    props.variant === "action" &&
    css`
      border: 1px solid #bebebe;
      font-size: 16px;
      color: ${props.color || "#002B9B"};
      font-weight: 500;
      line-height: 20px;
      background-color: #ffffff;
    `}
`;
const disabledStyles = css`
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
    `}
`;
const ButtonContainer = styled.button`
  padding: 10px 20px;
  text-align: center;
  font-family: "Inter", "sans-serif";
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  ${buttonVariants}
  ${disabledStyles}
`;

const StyledButton = ({ name, variant, color, onClick, disabled }) => {
  return (
    <ButtonContainer
      variant={variant}
      color={color}
      disabled={disabled}
      onClick={onClick}
    >
      {name}
    </ButtonContainer>
  );
};

export default StyledButton;
