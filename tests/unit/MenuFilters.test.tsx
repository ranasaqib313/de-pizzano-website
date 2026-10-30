import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MenuFilters } from '@/components/menu/MenuFilters';
import { MENU_CATEGORIES } from '@/data/menu';

describe('MenuFilters Component', () => {
  test('renders All Items and all 6 category filter buttons', () => {
    const handleSelect = jest.fn();
    render(
      <MenuFilters
        categories={MENU_CATEGORIES}
        activeCategory="all"
        onSelectCategory={handleSelect}
        totalCount={26}
      />
    );

    expect(screen.getByRole('button', { name: /all items/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /starters/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /regular pizza/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /special pizza/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sandwiches/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /pastas/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /fried items/i })).toBeInTheDocument();
  });

  test('clicking a category triggers onSelectCategory with appropriate ID', () => {
    const handleSelect = jest.fn();
    render(
      <MenuFilters
        categories={MENU_CATEGORIES}
        activeCategory="all"
        onSelectCategory={handleSelect}
        totalCount={26}
      />
    );

    const pizzaBtn = screen.getByRole('button', { name: /regular pizza/i });
    fireEvent.click(pizzaBtn);
    expect(handleSelect).toHaveBeenCalledWith('regular-pizza');
  });
});

