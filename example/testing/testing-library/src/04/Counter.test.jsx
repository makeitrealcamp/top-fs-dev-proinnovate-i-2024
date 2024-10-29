import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import Counter from './Counter';

describe('Counter Component', () => {
  it('Should handler click', () => {
    // Arrange
    render(<Counter />);

    // Act
    const buttonElement = screen.getByText(/add one/i);
    const parragraphElement = screen.getByRole('contentinfo');

    // Assert
    expect(parragraphElement).toHaveTextContent('You clicked 0 times');

    fireEvent.click(buttonElement);

    screen.debug();

    expect(parragraphElement).toHaveTextContent('You clicked 1 times');
  });
});
