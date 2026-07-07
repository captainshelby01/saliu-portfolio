import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Contact from '../Contact';

describe('Contact Component', () => {
  it('renders all form inputs and submit button', () => {
    render(<Contact />);
    
    expect(screen.getByPlaceholderText(/your name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/your email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/message subject/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/hi femi, i would like to talk about/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('checks that required fields have correct attributes', () => {
    render(<Contact />);
    
    const nameInput = screen.getByPlaceholderText(/your name/i);
    const emailInput = screen.getByPlaceholderText(/your email/i);
    const messageInput = screen.getByPlaceholderText(/hi femi, i would like to talk about/i);
    
    expect(nameInput).toHaveAttribute('required');
    expect(emailInput).toHaveAttribute('required');
    expect(messageInput).toHaveAttribute('required');
  });
});
