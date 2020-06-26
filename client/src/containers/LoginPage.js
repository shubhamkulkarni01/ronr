import React from 'react';

import Auth from '../utils/auth'
 
import { PrimaryButton } from '../components/Button.js';
import { LoginBackground } from '../components/LoginPage.js';

function LoginPage() {

  const {handleSignOn} = React.useContext(Auth)

  return (
    <LoginBackground>
      <PrimaryButton style={{margin: '25vh 0vh 0vh 0vh'}} onClick={handleSignOn}>login</PrimaryButton>
  
    </LoginBackground>
  );
}

export default LoginPage;
