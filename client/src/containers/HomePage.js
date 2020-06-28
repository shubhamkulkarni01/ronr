import React from 'react';

import Auth from '../utils/auth'
 
import { VerticalStackButton } from '../components/Button.js';

import { Link } from 'react-router-dom';

function HomePage() {

  const {handleSignOn} = React.useContext(Auth);
  
  return (
    <>
      <Link to="/join">
        <VerticalStackButton style={{margin: '20vh 0vh 0vh 0vh'}}> 
          join
        </VerticalStackButton>
      </Link>
      <Link to="/create">
        <VerticalStackButton style={{margin: '5vh 0vh 0vh 0vh'}}>
          create
        </VerticalStackButton>
      </Link>
    </>
  );
}

export default HomePage;
