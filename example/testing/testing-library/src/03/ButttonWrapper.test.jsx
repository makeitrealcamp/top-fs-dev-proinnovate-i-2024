import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import ButtonWrapper from './ButtonWrapper';

describe('ButtonWrapper Component', () => {
  it('Should handler click', () => {
    // Arrange
    const title = 'click me';
    const handleClick = vi.fn();
    render(<ButtonWrapper title={title} handleClick={handleClick} />);

    // Act
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    // Assert
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(buttonElement).toHaveTextContent(title);
  });
});
