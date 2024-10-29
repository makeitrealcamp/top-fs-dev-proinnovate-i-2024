import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  test('renders headline', () => {
    // Arrange
    render(<App title="React" />);

    // Act
    const headline = screen.getByRole('heading', { name: 'Vite + React' });

    // Assert
    expect(headline).toBeInTheDocument();
  });
});
