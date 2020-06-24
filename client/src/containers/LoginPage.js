import React from 'react';

import styled from 'styled-components'
import { Button } from 'react-bootstrap'

import Auth from '../utils/auth'

const LoginBackground = styled('div')`
  height: 92vh;
  background-color: #FFFFFF;
  text-align: center;
`;

const LoginButton = styled(Button)`
  background-color: #fff!important;
  color: ${props => props.theme.title};
  border-color: ${props => props.theme.title};
  border-radius: 20px;
  font-size: 10vh;
  text-align: center;
  margin: 25vh 0vh 0vh 0vh;
  transition: color 0.3s ease-in-out,
              background-color 0.3s ease-in-out,
              border-color 0.3s ease-in-out;
  box-shadow: none;

  &:focus{
    background-color: #fff!important;
    color: ${props => props.theme.title};
    border-color: ${props => props.theme.title};
    border-radius: 20px;
    box-shadow: none;
  }

  &:active:focus, &:active, &:hover{
    color: #fff!important;
    background-color: ${props => props.theme.title};
    border-color: ${props => props.theme.title};
    box-shadow: none;
  }
`;

function LoginPage() {

  const {handleSignOn} = React.useContext(Auth)

  return (
    <LoginBackground>
      <LoginButton variant="primary" onClick={handleSignOn}>LOGIN</LoginButton>
    </LoginBackground>
  );
}

export default LoginPage;
