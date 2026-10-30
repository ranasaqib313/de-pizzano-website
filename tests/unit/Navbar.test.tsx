import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar } from '@/components/layout/Navbar';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('Navbar Component', () => {
  test('renders brand title DE PIZZANO and tagline', () => {
    render(<Navbar />);
    expect(screen.getAllByText(/DE PIZZANO/i)[0]).toBeInTheDocument();
    expect(screen.getByText(/Tasty Delicious/i)).toBeInTheDocument();
  });

  test('renders demo preview badge announcement', () => {
    render(<Navbar />);
    expect(screen.getByText(/INDEPENDENT WEBSITE CONCEPT/i)).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(<Navbar />);
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Menu' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Locations' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument();
  });

  test('opens mobile drawer when menu toggle button is clicked', () => {
    render(<Navbar />);
    const menuBtn = screen.getByLabelText(/open navigation menu/i);
    fireEvent.click(menuBtn);
    expect(screen.getByRole('dialog', { name: /navigation menu/i })).toBeInTheDocument();
  });
});

