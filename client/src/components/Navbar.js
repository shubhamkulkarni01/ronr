import styled from 'styled-components';

import bootstrap_Navbar from 'react-bootstrap/Navbar';
import { Link as router_Link } from 'react-router-dom';

export const Navbar = styled(bootstrap_Navbar)`
  justify-content: space-between;
  height: 8vh;
  box-shadow: 0px 0vw 1.5vw 0.1vw ${props => props.theme.nav.shadow};
  background-color: ${props => props.theme.nav.bg};
`;

export const Title = styled(bootstrap_Navbar.Brand)`
  font-family: ${props => props.className ? null : 'Poppins, sans-serif'};
  font-size: 6vh;
  height: 8vh;
  display: inline-flex;
  align-items:center;
  margin: 0px;
  padding: 0px;
  color: ${props => props.theme.nav.title};

  &:hover {
    color: ${props => props.theme.nav.highlight};
  }
`;

export const Icon = styled(bootstrap_Navbar.Brand)`
  font-family: 'Material Icons';
  font-size: 6vh;
  height: 8vh;
  display: inline-flex;
  align-items:center;
  margin: 0px;
  padding: 0px;
  color: ${props => props.theme.nav.title};

  &:hover {
    color: ${props => props.theme.nav.highlight};
  }
`;

export const Link = styled(router_Link)`
  text-decoration: underline ${props => props.theme.nav.title};
  
  &:hover {
    text-decoration: underline ${props => props.theme.nav.highlight};
  }
`;
