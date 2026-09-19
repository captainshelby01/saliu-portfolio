import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ProjectModal from '../ProjectModal';
import type { Project } from '../../config/portfolio';

const mockProject: Project = {
  id: 99,
  title: 'Test Showcase App',
  category: 'fullstack',
  description: 'An advanced test showcase application with comprehensive testing.',
  tech: ['React', 'TypeScript', 'TailwindCSS'],
  githubUrl: 'https://github.com/test/repo',
  liveUrl: 'https://test-live.com',
  visualType: 'v3fixer',
  status: 'Live in Production',
  features: [
    'Feature 1: Real-time data pipeline',
    'Feature 2: Automated order receipts'
  ],
  architecture: 'Decoupled microservice architecture with Edge deployment.'
};

describe('ProjectModal Component', () => {
  it('renders nothing when project is null', () => {
    const { container } = render(<ProjectModal project={null} onClose={vi.fn()} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders project title, category, status, and features when project is provided', () => {
    render(<ProjectModal project={mockProject} onClose={vi.fn()} />);

    expect(screen.getByText('Test Showcase App')).toBeInTheDocument();
    expect(screen.getByText('Full Stack')).toBeInTheDocument();
    expect(screen.getByText(/Live in Production/i)).toBeInTheDocument();
    expect(screen.getByText(/Feature 1: Real-time data pipeline/i)).toBeInTheDocument();
    expect(screen.getByText(/Decoupled microservice architecture/i)).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const handleClose = vi.fn();
    render(<ProjectModal project={mockProject} onClose={handleClose} />);

    const closeBtn = screen.getByLabelText(/close modal/i);
    fireEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when Escape key is pressed', () => {
    const handleClose = vi.fn();
    render(<ProjectModal project={mockProject} onClose={handleClose} />);

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
