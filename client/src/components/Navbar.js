import styled from 'styled-components';

import nav from 'react-bootstrap/Navbar';

import { Title, Icon } from './Text.js';
import { Link } from './Link';

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
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${props => props.theme.nav.highlight};
  }
`;

export const NavIcon = styled(Icon)`
  font-size: 6vh;
  height: 8vh;
  color: ${props => props.theme.nav.title};
  cursor: default;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${props => props.theme.nav.highlight};
    cursor: default;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: underline dotted ${props => props.theme.nav.title};
  transition: all 0.3s ease-in-out;
  
  &:hover {
    text-decoration-color: ${props => props.theme.nav.highlight};
  }
`;
