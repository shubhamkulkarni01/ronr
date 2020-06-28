import React from 'react';
import { action } from '@storybook/addon-actions';
import { PrimaryButton, VerticalStackButton } from './Button.js';

export default {
  title: 'Button',
  component: PrimaryButton 
};

export const SingleButton = () => <PrimaryButton onClick={action('clicked')}>login</PrimaryButton>;
 
export const VerticalStack= () => {
  return (
    <>
      <VerticalStackButton onClick={action('join')}>Join</VerticalStackButton>
      <VerticalStackButton onClick={action('create')}>Create</VerticalStackButton>
    </>
  );
}

export const VerticalStackCustomSpacing= () => {
  return (
    <>
      <VerticalStackButton style={{margin: '10vh'}} onClick={action('join')}>Join</VerticalStackButton>
      <VerticalStackButton style={{margin: '10vh'}} onClick={action('create')}>Create</VerticalStackButton>
    </>
  );
}
