import React from 'react';

import styled from 'styled-components'
import { Button } from 'react-bootstrap'

const Title = styled.h1`

`;

const Subtitle = styled.h2`

`;

function LoginPage() {
  console.log('login page')

  const LoginButton = Button;

  return (
    <Button variant="primary" onClick={() => console.log('clicked')}>try again</Button>
  );
}

export default LoginPage;
