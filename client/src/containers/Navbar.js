import React, { useContext } from 'react';

import Auth from '../utils/auth';

import { Navbar, NavTitle, NavIcon, NavLink } from '../components/Navbar.js';

const NavigationBar = () => {

  const { user, handleSignOut } = useContext(Auth)

  return (
    <Navbar bg="dark">
      <NavLink style={{textDecorationStyle: 'dotted!important'}} to="/">
        <NavTitle style={{textDecorationStyle: 'dotted!important'}}>
         ronr 
        </NavTitle>
      </NavLink>
      {
        user && 
          <div style={{display: 'inline-flex'}}>
            <NavIcon style={{padding:'20px'}}>face</NavIcon>
            <NavTitle style={{cursor: 'pointer'}} onClick={handleSignOut}>
             sign out 
            </NavTitle>
          </div>
      }
    </Navbar>
  )
}

export default NavigationBar;
