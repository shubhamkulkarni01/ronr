import styled from 'styled-components';

import nav from 'react-bootstrap/Navbar';
import { Link as router_Link } from 'react-router-dom';

import { Title, Icon } from './Text.js';

export const Navbar = styled(nav)`
  justify-content: space-between;
  height: 8vh;
  box-shadow: 0px 0vw 1.5vw 0.1vw ${props => props.theme.nav.shadow};
  background-color: ${props => props.theme.nav.bg};
`;

export const NavTitle = styled(Title)`
  font-size: 6vh;
  height: 8vh;
  color: ${props => props.theme.nav.title};

  &:hover {
    color: ${props => props.theme.nav.highlight};
  }
`;

export const NavIcon = styled(Icon)`
  font-size: 6vh;
  height: 8vh;
  color: ${props => props.theme.nav.title};

  &:hover {
    color: ${props => props.theme.nav.highlight};
  }
`;

export const NavLink = styled(router_Link)`
  text-decoration: underline ${props => props.theme.nav.title};
  
  &:hover {
    text-decoration: underline ${props => props.theme.nav.highlight};
  }
`;
