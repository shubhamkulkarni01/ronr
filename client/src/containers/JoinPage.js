import React from 'react';

import Auth from '../utils/auth'
 
import { PrimaryButton } from '../components/Button.js';
import { H1 } from '../components/Text.js';

import { Link } from 'react-router-dom';

function JoinPage() {

  const {handleSignOn} = React.useContext(Auth);
  
  return (
    <>
        <div style={{marginTop: '20vh', marginBottom: '7vh', textAlign: 'center'}}>
          <H1>
            enter meeting code: 
          </H1>
          <input type="text" pattern="[0-9]{6}" size="6"/> 
        </div>
        <div style={{textAlign: 'center'}}>
          <PrimaryButton style={{minWidth: '16vw', fontSize: '6vh'}}>
            join 
          </PrimaryButton>
        </div>
    </>
  );
}

export default JoinPage;
