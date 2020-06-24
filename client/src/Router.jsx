import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NotPage from './NotPage';
import { AuthProvider } from '../utils/auth';

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

export default Router;
