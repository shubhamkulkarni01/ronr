import React from 'react';

import Auth from '../utils/auth'
 
import { PrimaryButton } from '../components/Button.js';
import { H1 } from '../components/Text.js';

import { Link } from 'react-router-dom';

function CreatePage() {

  const {handleSignOn} = React.useContext(Auth);
  
  return (
    <>
        <div style={{marginTop: '20vh', marginBottom: '7vh', textAlign: 'center'}}>
          <H1>
            meeting name: 
          </H1>
          <label>name</label>
          <input style={{borderStyle: 'solid', borderWidth: '0px 0px 3px 0px', borderColor: 'grey', outline: '0'}} placeholder="name" type="text"/> 
        </div>
        <div style={{textAlign: 'center'}}>
          <PrimaryButton style={{minWidth: '16vw', fontSize: '6vh'}}>
            create 
          </PrimaryButton>
        </div>
    </>
  );
}

export default CreatePage;
