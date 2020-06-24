import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import {AuthProvider} from '../utils/auth';

import Navbar from './Navbar';
import LoginPage from './LoginPage';

const theme = {
  title: '#4B7FE6!important;',
  title: '#aac7ff!important;',
}

const Router = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <AuthProvider>
        <div className="app" id="main-component">
          <Navbar />
          <Switch>
            <Route path="/" component={LoginPage} />
          </Switch>
        </div>
      </AuthProvider>
    </BrowserRouter>
  </ThemeProvider>
);

export default Router;
