import React from 'react';
import { render, screen } from '@testing-library/react';
import Score from './Score';

describe('Test for Score', () => {
  test('Rendering', () => {
    render(<Score />)
    expect(screen.getByTestId('Score')).toBeInTheDocument()
  })
})