import React from 'react';

import styled from 'styled-components'
import { Button } from 'react-bootstrap'

export const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.button.bg};
  border-color: ${props => props.theme.button.text};
  color: ${props => props.theme.button.text};
  border-radius: 20px;
  font-family: ${props => props.className ? null : 'Poppins, sans-serif'};
  font-size: 8vh;
  text-align: center;
  margin: 3vh 3vw;
  transition: color 0.3s ease-in-out,
              background-color 0.3s ease-in-out,
              border-color 0.3s ease-in-out;
  box-shadow: none;
  min-width: 20vw;
  padding: 0px 40px;

  &:focus{
    background-color: ${props => props.theme.button.bg};
    color: ${props => props.theme.button.text};
    border-color: ${props => props.theme.button.text};
    border-radius: 20px;
    box-shadow: none;
  }

  &:active:focus, &:active, &:hover{
    color: ${props => props.theme.button.bg};
    background-color: ${props => props.theme.button.text};
    border-color: ${props => props.theme.button.bg};
    box-shadow: none;
  }
`;
  
export const VerticalStackButton = props => {
  return (
  <div style={{...props.style, display: 'block', textAlign: 'center'}}>
    <PrimaryButton onClick={props.onClick}>{props.children}</PrimaryButton>
  </div>
  )
}
