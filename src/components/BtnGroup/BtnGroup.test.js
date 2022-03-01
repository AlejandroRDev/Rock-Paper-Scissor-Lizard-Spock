import React from 'react';
import { render, screen } from '@testing-library/react';
import BtnGroup from './BtnGroup';

describe('Test for BtnGroup', () => {
  test('Rendering', () => {
     
    render(<BtnGroup />)
    expect(screen.getByTestId('BtnGroup')).toBeInTheDocument()
  })
})