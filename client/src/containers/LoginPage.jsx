import React from 'react';

import styled from 'styled-components'
import { Button } from 'react-bootstrap'

const Main = styled('div')`
  height: 90vh;
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
  margin: 40vh 0vh;
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
    background-color: #aac7ff!important;
    border-color: #aac7ff!important;
    box-shadow: none;
  }
`;

function LoginPage() {
  console.log('login page')

  return (
    <Main>
      <LoginButton variant="primary" onClick={() => console.log('clicked')}>LOGIN</LoginButton>
    </Main>
  );
}

export default LoginPage;
