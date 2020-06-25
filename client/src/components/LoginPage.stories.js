import React from 'react';
import { action } from '@storybook/addon-actions';

import { LoginButton } from './LoginPage.js';

export default {
  title: 'Login Page',
  component: LoginButton
};

export const Button = () => <LoginButton onClick={action('clicked')}>login</LoginButton>;
