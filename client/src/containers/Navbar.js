import React, { useContext } from 'react';

import Auth from '../utils/auth';

import { Navbar, NavTitle, NavIcon, NavLink } from '../components/Navbar.js';

const NavigationBar = () => {

  const { user } = useContext(Auth)

  return (
    <Navbar bg="dark">
      <NavLink to="/">
        <NavTitle>
         ronr 
        </NavTitle>
      </NavLink>
      {
        user && 
          <NavIcon style={{align: 'right'}}>face</NavIcon>
      }
    </Navbar>
  )
}

export default NavigationBar;
