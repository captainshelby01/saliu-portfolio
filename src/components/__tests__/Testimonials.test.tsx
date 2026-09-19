import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Testimonials from '../Testimonials';
import { PORTFOLIO_DATA } from '../../config/portfolio';

describe('Testimonials Component', () => {
  it('renders section title and client recommendations', () => {
    render(<Testimonials />);

    expect(screen.getByText(/Recommendations & Trust/i)).toBeInTheDocument();
    expect(screen.getByText(/What founders, educators, and creative directors say/i)).toBeInTheDocument();

    PORTFOLIO_DATA.testimonials.forEach((testimonial) => {
      expect(screen.getByText(testimonial.name)).toBeInTheDocument();
      expect(screen.getByText(testimonial.company)).toBeInTheDocument();
    });
  });

  it('renders verified badges for client feedback', () => {
    render(<Testimonials />);
    const verifiedBadges = screen.getAllByText(/Verified/i);
    expect(verifiedBadges.length).toBeGreaterThanOrEqual(PORTFOLIO_DATA.testimonials.length);
  });
});
