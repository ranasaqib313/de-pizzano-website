import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MenuSearch } from '@/components/menu/MenuSearch';

describe('MenuSearch Component', () => {
  test('renders search input with placeholder', () => {
    render(
      <MenuSearch
        searchTerm=""
        onSearchChange={jest.fn()}
        onClear={jest.fn()}
      />
    );
    expect(screen.getByPlaceholderText(/search menu/i)).toBeInTheDocument();
  });

  test('calls onSearchChange when user types in the input', () => {
    const handleChange = jest.fn();
    render(
      <MenuSearch
        searchTerm=""
        onSearchChange={handleChange}
        onClear={jest.fn()}
      />
    );

    const input = screen.getByPlaceholderText(/search menu/i);
    fireEvent.change(input, { target: { value: 'lasagne' } });
    expect(handleChange).toHaveBeenCalledWith('lasagne');
  });

  test('shows clear button and triggers onClear when searchTerm is present', () => {
    const handleClear = jest.fn();
    render(
      <MenuSearch
        searchTerm="lasagne"
        onSearchChange={jest.fn()}
        onClear={handleClear}
      />
    );

    const clearBtn = screen.getByLabelText(/clear search/i);
    expect(clearBtn).toBeInTheDocument();
    fireEvent.click(clearBtn);
    expect(handleClear).toHaveBeenCalled();
  });
});

