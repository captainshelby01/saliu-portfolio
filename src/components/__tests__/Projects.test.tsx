import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Projects from '../Projects';
import { PORTFOLIO_DATA } from '../../config/portfolio';

describe('Projects Component', () => {
  it('renders section title and all project cards by default', () => {
    render(<Projects />);

    expect(screen.getByText(/Featured Projects/i)).toBeInTheDocument();
    PORTFOLIO_DATA.projects.forEach((proj) => {
      expect(screen.getByText(proj.title)).toBeInTheDocument();
    });
  });

  it('filters project cards by category tab', () => {
    render(<Projects />);

    const fullstackTab = screen.getByRole('button', { name: /Full Stack/i });
    fireEvent.click(fullstackTab);

    // Full stack projects should be present
    expect(screen.getByText('The V3 Fixer')).toBeInTheDocument();
    expect(screen.getByText('Nourish Ark Foods')).toBeInTheDocument();

    // Frontend only project should not be present
    expect(screen.queryByText('Dr. J Tutors')).not.toBeInTheDocument();
  });

  it('opens project modal on clicking Case Study button', () => {
    render(<Projects />);

    const caseStudyBtns = screen.getAllByRole('button', { name: /Case Study/i });
    expect(caseStudyBtns.length).toBeGreaterThan(0);

    fireEvent.click(caseStudyBtns[0]);

    // Modal dialog should appear
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(/Project Overview/i)).toBeInTheDocument();
  });
});
