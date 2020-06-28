import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import material from '../themes/material';

import {AuthProvider} from '../utils/auth';

import Navbar from './Navbar';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import JoinPage from './JoinPage';
import CreatePage from './CreatePage';

const Router = () => (
  <ThemeProvider theme={material}>
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/join" component={JoinPage} />
          <Route path="/create" component={CreatePage} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  </ThemeProvider>
);

export default Router;
