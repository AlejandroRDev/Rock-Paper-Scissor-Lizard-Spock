import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Test for Home', () => {
  test('Rendering', () => {
    render(<Home />)
    expect(screen.getByTestId('Home')).toBeInTheDocument()
  })
})