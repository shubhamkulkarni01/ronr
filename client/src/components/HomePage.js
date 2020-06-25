import styled from 'styled-components'
import { Button } from 'react-bootstrap'

export const LoginBackground = styled('div')`
  height: 92vh;
  background-color: ${props => props.theme.bg || '#FFFFFF'};
  text-align: center;
`;

export const LoginButton = styled(Button)`
  background-color: ${props => props.theme.button.bg};
  border-color: ${props => props.theme.button.text};
  color: ${props => props.theme.button.text};
  border-radius: 20px;
  font-family: ${props => props.className ? null : 'Poppins, sans-serif'};
  font-size: 8vh;
  text-align: center;
  margin: 25vh 0vh 0vh 0vh;
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
