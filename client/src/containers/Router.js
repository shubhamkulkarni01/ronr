import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../styles/App.css';

import LoginPage from './LoginPage';

const Router = () => (
  <BrowserRouter>
    <div className="app" id="main-component" >
      <Switch>
        <Route path="/" component={LoginPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
/*
import NotPage from './NotPage';
import { AuthProvider } from '../utils/auth';
*/

/*
const Router = () => (
  <BrowserRouter>
    <AuthProvider>
      <Navbar />
      <Switch>
        <Route path="/" component={NotPage} />
      </Switch>
    </AuthProvider>
  </BrowserRouter>
);
*/

export default Router;
