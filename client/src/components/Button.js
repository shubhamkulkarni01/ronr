import React from 'react';

import styled from 'styled-components'
import { Button as bootstrap_Button } from 'react-bootstrap'

export const Button = styled(bootstrap_Button)`
  background-color: ${props => props.theme.button.bg};
  border-color: ${props => props.theme.button.text};
  color: ${props => props.theme.button.text};
  font-family: Poppins, sans-serif;
  text-align: center;
  transition: color 0.3s ease-in-out,
              background-color 0.3s ease-in-out,
              border-color 0.3s ease-in-out;
  box-shadow: none;

  &:focus{
    background-color: ${props => props.theme.button.bg};
    color: ${props => props.theme.button.text};
    border-color: ${props => props.theme.button.text};
    box-shadow: none;
  }

  &:active:focus, &:active, &:hover{
    color: ${props => props.theme.button.bg};
    background-color: ${props => props.theme.button.text};
    border-color: ${props => props.theme.button.bg};
    box-shadow: none;
  }
`;

export const PrimaryButton = styled(Button)`
  border-radius: 20px;
  font-size: 8vh;
  margin: 3vh 3vw;
  min-width: 20vw;
  padding: 0px 40px;
`;
  
export const CancelButton = styled(Button)`
  background-color: ${props => props.theme.button.cancel.bg};
  border-color: ${props => props.theme.button.cancel.text};
  color: ${props => props.theme.button.cancel.text};
  min-width: 0px;
  padding: 0px;
  margin: 0px 2vw 2vh 2vw;
  font-size: 1.5vw;
  border-radius: 20px;

  &:focus{
    background-color: ${props => props.theme.button.cancel.bg};
    color: ${props => props.theme.button.cancel.text};
    border-color: ${props => props.theme.button.cancel.text};
  }

  &:active:focus, &:active, &:hover{
    color: ${props => props.theme.button.cancel.bg};
    background-color: ${props => props.theme.button.cancel.text};
    border-color: ${props => props.theme.button.cancel.bg};
  }
`;

export const VerticalStackButton = props => {
  return (
  <div style={{...props.style, display: 'block', margin: 'auto', textAlign: 'center'}}>
    <PrimaryButton onClick={props.onClick}>{props.children}</PrimaryButton>
  </div>
  )
}
