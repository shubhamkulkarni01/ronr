import React from 'react';

import Auth from '../utils/auth'
 
import { LoginButton, LoginBackground } from '../components/LoginPage.js';

function LoginPage() {

  const {handleSignOn} = React.useContext(Auth)

  return (
    <LoginBackground>
      <LoginButton onClick={handleSignOn}>login</LoginButton>
    </LoginBackground>
  );
}

export default LoginPage;
