import React from 'react';
import { render, screen } from '@testing-library/react';
import Result from './Result';

describe('Test for Result', () => {
  test('Rendering', () => {
      const game = {
          result : 'test result',
          winner: 'test winner'
      }
    render(<Result game={game}/>)
    expect(screen.getByTestId('Result')).toBeInTheDocument()
  })
})