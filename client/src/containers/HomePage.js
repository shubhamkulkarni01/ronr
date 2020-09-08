import React from 'react';
 
import { PrimaryButton } from '../components/Button.js';

import { Link } from 'react-router-dom';

const HomePage = props => {

  return (
    <>
      {props.location.state && 
        <PrimaryButton>
          Resume
        </PrimaryButton>
      }
      <div style={{margin: '20vh auto 0vh auto', display: 'block', textAlign: 'center'}}>
        <Link to="/join">
          <PrimaryButton> 
            join
          </PrimaryButton>
        </Link>
      </div>
      <div style={{margin: '5vh auto 0vh auto', display: 'block', textAlign: 'center'}}>
        <Link to="/create">
          <PrimaryButton>
            create
          </PrimaryButton>
        </Link>
      </div>
    </>
  );
}

export default HomePage;
