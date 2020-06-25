import React from 'react';
import { action } from '@storybook/addon-actions';

import { Navbar, Link, Title, Icon } from './Navbar.js';

export default {
  title: 'Navbar',
  component: Navbar 
};

export const Empty = () => <Navbar onClick={action('navbar clicked')}/>

export const WithTitle = () => ( 
<Navbar onClick={action('navbar clicked')}> 
  <Title> Hello World </Title> 
</Navbar>
);

export const WithTitleAndLink = () => (
<Navbar onClick={action('navbar clicked')}> 
  <Link>
    <Title onClick={action('go home')}> Hello World </Title> 
  </Link>
</Navbar>
)

export const WithTitleAndFace = () => (
<Navbar> 
  <Title onClick={action('go home')}> Hello World </Title> 
  <Icon onClick={action('account info')}>face</Icon>
</Navbar>
);

export const WithTitleLinkAndFace= () => (
<Navbar> 
  <Link>
    <Title onClick={action('go home')}> Hello World </Title> 
  </Link>
  <Icon onClick={action('account info')}>face</Icon>
</Navbar>
);
