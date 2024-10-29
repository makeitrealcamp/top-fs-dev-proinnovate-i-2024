import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import Person from './Person';

describe('Person Component', () => {
  it('should render a name', () => {
    // Arrange
    const expectedName = 'Cristian Moreno';
    render(<Person fullName={expectedName} />);

    // Act
    const divElement = screen.getByRole('contentinfo');
    // getBy -> Seguro de existe
    // queryBy -> Tal vez exite
    // findBy -> Aperce en algun momento -> asincrono

    // Assert
    // expect(divElement).toBeInTheDocument()
    expect(divElement).toHaveTextContent(`Name is ${expectedName}`);
    expect(divElement).toHaveAttribute('role', 'contentinfo');
  });
});
