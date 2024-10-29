import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { faker } from '@faker-js/faker';

import SideBar from './SideBar';

describe('SideBar Component', () => {
  it('Should render some links', () => {
    // Arrange
    const links = [
      { href: faker.internet.url(), title: faker.internet.domainName() },
      { href: faker.internet.url(), title: faker.internet.domainName() },
      { href: faker.internet.url(), title: faker.internet.domainName() },
    ];
    render(<SideBar items={links} />);

    // Act
    const anchorElements = screen.getAllByRole('navigation');

    // Assert
    expect(anchorElements).toHaveLength(links.length);
    expect(anchorElements[0]).toHaveAttribute('href', links[0].href);
    expect(anchorElements[0]).toHaveTextContent(links[0].title);
  });
});
