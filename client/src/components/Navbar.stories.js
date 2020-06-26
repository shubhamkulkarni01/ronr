import React from 'react';
import { action } from '@storybook/addon-actions';

import { Navbar, NavTitle, NavIcon, NavLink } from './Navbar.js';

export default {
  title: 'Navbar',
  component: Navbar 
};

export const Empty = () => <Navbar onClick={action('navbar clicked')}/>

export const WithNavTitle = () => ( 
<Navbar onClick={action('navbar clicked')}> 
  <NavTitle> Hello World </NavTitle> 
</Navbar>
);

export const WithNavTitleAndNavLink = () => (
<Navbar onClick={action('navbar clicked')}> 
  <NavLink>
    <NavTitle onClick={action('go home')}> Hello World </NavTitle> 
  </NavLink>
</Navbar>
)

export const WithNavTitleAndFace = () => (
<Navbar> 
  <NavTitle onClick={action('go home')}> Hello World </NavTitle> 
  <NavIcon onClick={action('account info')}>face</NavIcon>
</Navbar>
);

export const WithAll = () => (
<Navbar> 
  <NavLink>
    <NavTitle onClick={action('go home')}> Hello World </NavTitle> 
  </NavLink>
  <NavLink>
    <NavIcon onClick={action('account info')}>face</NavIcon>
  </NavLink>
</Navbar>
);
