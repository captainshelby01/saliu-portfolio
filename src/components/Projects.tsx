import { useState } from 'react';
import { ExternalLink, Code, Layers } from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolio';
import type { Project } from '../config/portfolio';
import { GithubIcon } from './Icons';
import './Projects.css';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'fullstack' | 'frontend' | 'backend'>('all');

  const renderVisualMock = (type: string) => {
    switch (type) {
      case 'v3fixer':
        return (
          <div className="project-visual-mock v3fixer-mock" style={{ backgroundImage: "url('/v3-fixer.png?v=7')" }}>
          </div>
        );
      case 'tutors':
        return (
          <div className="project-visual-mock tutors-mock" style={{ backgroundImage: "url('/dr-j-tutors.png?v=7')" }}>
          </div>
        );
      case 'allura':
        return (
          <div className="project-visual-mock allura-mock" style={{ backgroundImage: "url('/allura-smiles.png?v=7')" }}>
          </div>
        );
      case 'kanban':
      default:
        return (
          <div className="project-visual-mock taskflow-mock">
            <div className="mock-kanban">
              <div className="kanban-column">
                <span className="column-title">To Do</span>
                <div className="kanban-card glass-card">Design API</div>
                <div className="kanban-card glass-card">PostgreSQL Setup</div>
              </div>
              <div className="kanban-column">
                <span className="column-title">In Progress</span>
                <div className="kanban-card glass-card card-progress">Build Client</div>
              </div>
              <div className="kanban-column">
                <span className="column-title">Done</span>
                <div className="kanban-card glass-card card-done">Setup CI/CD</div>
              </div>
            </div>
          </div>
        );
    }
  };

  const filteredProjects = activeFilter === 'all'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="projects-section">
      {/* Visual lighting background blobs */}
      <div className="background-blob blob-2"></div>
      <div className="background-blob blob-3"></div>

      <div className="container">
        <span className="section-subtitle">My Creative Work</span>
        <h2 className="section-title text-gradient">Featured Projects</h2>
        <p className="section-desc">
          Here is a selection of full-stack and frontend applications I have developed. 
          Use the filters below to browse different tech categories.
        </p>

        {/* Category Filters */}
        <div className="filter-wrapper">
          <button
            onClick={() => setActiveFilter('all')}
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          >
            <Layers size={16} /> All Work
          </button>
          <button
            onClick={() => setActiveFilter('fullstack')}
            className={`filter-btn ${activeFilter === 'fullstack' ? 'active' : ''}`}
          >
            <Code size={16} /> Full Stack
          </button>
          <button
            onClick={() => setActiveFilter('frontend')}
            className={`filter-btn ${activeFilter === 'frontend' ? 'active' : ''}`}
          >
            <Layers size={16} /> Frontend
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid-2">
          {filteredProjects.map((project: Project) => (
            <div key={project.id} className="project-card glass-card">
              {/* Project Card Visual Mockup / Area */}
              <div className="project-thumbnail">
                {renderVisualMock(project.visualType)}
                <div className="thumbnail-overlay">
                  <div className="overlay-links">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="overlay-btn" title="GitHub Code">
                      <GithubIcon size={20} />
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="overlay-btn" title="Live Website">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card Details */}
              <div className="project-details">
                <div className="project-header">
                  <span className={`project-tag-badge badge-${project.category}`}>
                    {project.category === 'fullstack' ? 'Full Stack' : project.category === 'frontend' ? 'Frontend' : 'Backend'}
                  </span>
                  <h3 className="project-card-title">{project.title}</h3>
                </div>
                
                <p className="project-card-desc">{project.description}</p>
                
                <div className="project-tech-badges">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="tech-badge">{t}</span>
                  ))}
                </div>

                <div className="project-actions-mobile">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="mobile-action-btn">
                    <GithubIcon size={16} /> Code
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="mobile-action-btn btn-accent">
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
