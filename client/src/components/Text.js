import styled from 'styled-components';

import bootstrap_Navbar from 'react-bootstrap/Navbar';

export const Title = styled(bootstrap_Navbar.Brand)`
  font-family: ${props => props.className ? null : 'Poppins, sans-serif'};
  display: inline-flex;
  align-items:center;
  margin: 0px;
  padding: 0px;
`;

export const Icon = styled(bootstrap_Navbar.Brand)`
  font-family: 'Material Icons';
  display: inline-flex;
  align-items:center;
  margin: 0px;
  padding: 0px;
`;

export const H1 = styled('h1')`
  border-color: ${props => props.theme.button.text};
  color: ${props => props.theme.button.text};

  font-family: Poppins;
  font-size: xx-large;
  text-align: center;
  margin: 3vh 3vw;
  display: inline-block;
`;
