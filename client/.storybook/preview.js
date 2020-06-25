import React from 'react';
import { addDecorator } from '@storybook/react';

import { BrowserRouter as Router } from 'react-router-dom';

import {ThemeProvider} from 'styled-components';
import material from '../src/themes/material';

addDecorator(storyFn => <ThemeProvider theme={material}>{storyFn()}</ThemeProvider>);
addDecorator(storyFn => <div style={{textAlign: 'center'}}>{storyFn()}</div>);
addDecorator(storyFn => <Router>{storyFn()}</Router>);
