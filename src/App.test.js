import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Test for App', () => {
  test('Rendering', () => {
    render(<App />)
    expect(screen.getByTestId('App')).toBeInTheDocument()
  })
})