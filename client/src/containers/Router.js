import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import material from '../themes/material';

import {AuthProvider} from '../utils/auth';

import Navbar from './Navbar';
import LoginPage from './LoginPage';

const Router = () => (
  <ThemeProvider theme={material}>
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Switch>
          <Route path="/" component={LoginPage} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  </ThemeProvider>
);

export default Router;
