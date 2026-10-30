import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProductDialog } from '@/components/menu/ProductDialog';
import { MenuItem } from '@/types/menu';

const mockItem: MenuItem = {
  id: 'pizzano-max-chicken-pizza',
  name: 'Pizzano Max Chicken Pizza',
  category: 'special-pizza',
  price: 750,
  isStartingPrice: true,
  currency: 'Rs.',
  description: 'Tikka, fajita, onion, green pepper, mushroom, black olives.',
  image: '/images/menu/pizzano-max-chicken-pizza.svg',
};

describe('ProductDialog Component', () => {
  test('does not render when item is null', () => {
    const { container } = render(<ProductDialog item={null} onClose={jest.fn()} />);
    expect(container.firstChild).toBeNull();
  });

  test('renders dialog with product name, price, description and disclaimers', () => {
    render(<ProductDialog item={mockItem} onClose={jest.fn()} />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Pizzano Max Chicken Pizza')).toBeInTheDocument();
    expect(screen.getByText('Starting at Rs. 750')).toBeInTheDocument();
    expect(screen.getByText(/Tikka, fajita, onion, green pepper/i)).toBeInTheDocument();
    expect(screen.getByText(/Price reflects provisional public directory listing/i)).toBeInTheDocument();
  });

  test('triggers onClose when close button is clicked', () => {
    const handleClose = jest.fn();
    render(<ProductDialog item={mockItem} onClose={handleClose} />);
    const closeBtn = screen.getByLabelText(/close product details/i);
    fireEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalled();
  });

  test('triggers onClose when Escape key is pressed', () => {
    const handleClose = jest.fn();
    render(<ProductDialog item={mockItem} onClose={handleClose} />);
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalled();
  });
});

