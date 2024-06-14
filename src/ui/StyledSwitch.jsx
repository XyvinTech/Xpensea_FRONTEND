import React from 'react';
import styled from 'styled-components';

const SwitchContainer = styled.label`
  display: inline-block;
  position: relative;
  width: 45px;
  height: 15px;
  border-radius: 23px;
  background: ${(props) => (props.checked ? (props.variant === 'primary' ? '#14AE5C' : '#E00D00') : '#b3b3b3')};
  padding: 4px;
  transition: 300ms all;
  cursor: pointer;
`;

const SwitchHandle = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  top: 50%;
  left: ${(props) => {
    if (props.variant === 'primary') {
      return props.checked ? '4px' : '32px';
    } else {
      return props.checked ? '32px' : '4px';
    }
  }};
  background: white;
  transform: translateY(-50%);
  transition: 300ms all;
`;

const Input = styled.input`
  display: none;
`;

const StyledSwitch = ({ checked, onChange, variant }) => {
  return (
    <SwitchContainer variant={variant} checked={checked}>
      <Input type="checkbox" checked={checked} onChange={onChange} />
      <SwitchHandle checked={checked} variant={variant} />
    </SwitchContainer>
  );
};


export default StyledSwitch;
