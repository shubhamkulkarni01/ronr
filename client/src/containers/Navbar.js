import React, { useContext } from 'react';

import styled from 'styled-components';

import Navbar from 'react-bootstrap/Navbar';
import {Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

import Auth from '../utils/auth';

const CustomNavbar = styled(Navbar)`
  justify-content: center;
  height: 8vh;
  box-shadow: 0px 3px 10px 2px black
`;

const Title = styled(Navbar.Brand)`
  font-family: ${props => props.className ? null : 'Londrina Solid, cursive'};
  font-size: 6vh;
  height: 8vh;
  display: inline-flex;
  align-items:center;
  margin: 0px;
  padding: 0px;
  color: ${props => props.theme.title}
`;

const NavigationBar = () => {

  const location = useLocation()

  const { user } = useContext(Auth)

  return (
    <CustomNavbar variant="primary" bg="dark">
    <Container>
      <Link to="/">
        <Title>
         ronr 
        </Title>
      </Link>
      </Container>
      {
        user && 
          <Title style={{align: 'right'}} className='material-icons'>face</Title>
      }
    </CustomNavbar>
  )
}

export default NavigationBar;
