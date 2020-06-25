import React, { useContext } from 'react';

import Auth from '../utils/auth';

import { Navbar, Title, Link } from '../components/Navbar.js';

const NavigationBar = () => {

  const { user } = useContext(Auth)

  return (
    <Navbar bg="dark">
      <Link to="/">
        <Title>
         ronr 
        </Title>
      </Link>
      {
        user && 
          <Icon style={{align: 'right'}}>face</Icon>
      }
    </Navbar>
  )
}

export default NavigationBar;
