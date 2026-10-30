import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from '@/components/layout/Footer';
import { BUSINESS_CONFIG } from '@/data/business';

describe('Footer Component', () => {
  test('renders brand title, tagline, address and provisional phone', () => {
    render(<Footer />);
    expect(screen.getAllByText(/DE PIZZANO/i)[0]).toBeInTheDocument();
    expect(screen.getByText(BUSINESS_CONFIG.tagline)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(BUSINESS_CONFIG.primaryLocation.address, 'i'))).toBeInTheDocument();
    expect(screen.getByText(BUSINESS_CONFIG.contact.formattedPhone)).toBeInTheDocument();
  });

  test('displays demo concept transparency banner', () => {
    render(<Footer />);
    expect(screen.getByText(/Independent Website Concept for De Pizzano/i)).toBeInTheDocument();
  });

  test('provides link to Google Maps directions', () => {
    render(<Footer />);
    const mapLink = screen.getByRole('link', { name: /directions in google maps/i });
    expect(mapLink).toHaveAttribute('href');
    expect(mapLink.getAttribute('href')).toContain('google.com/maps');
  });
});

