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
      <VerticalStackButton onClick={action('clicked')}>Join</VerticalStackButton>
      <VerticalStackButton onClick={action('clicked')}>Create</VerticalStackButton>
    </>
  );
}
