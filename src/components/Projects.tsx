import { useState } from 'react';
import { ExternalLink, Code, Layers, Info, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolio';
import type { Project } from '../config/portfolio';
import { GithubIcon } from './Icons';
import ProjectModal from './ProjectModal';
import './Projects.css';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'fullstack' | 'frontend' | 'backend'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
      case 'nourishark':
      default:
        return (
          <div className="project-visual-mock nourishark-mock" style={{ backgroundImage: "url('/nourish-ark.png')" }}>
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
          A selection of full-stack and frontend applications built for performance, scale, and intuitive UX. 
          Click on any project to view its architectural deep-dive.
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
            <div
              key={project.id}
              className="project-card glass-card"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Card Visual Mockup / Area */}
              <div className="project-thumbnail">
                {renderVisualMock(project.visualType)}
                
                {project.status && (
                  <span className="card-status-pill">
                    <ShieldCheck size={12} /> {project.status}
                  </span>
                )}

                <div className="thumbnail-overlay">
                  <div className="overlay-links" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="overlay-btn overlay-btn-details"
                      title="View Case Study"
                      aria-label={`View details for ${project.title}`}
                    >
                      <Info size={18} />
                    </button>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="overlay-btn"
                      title="GitHub Code"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <GithubIcon size={18} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="overlay-btn"
                      title="Live Website"
                      aria-label={`Visit live website for ${project.title}`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card Details */}
              <div className="project-details">
                <div className="project-header">
                  <div className="project-badge-row">
                    <span className={`project-tag-badge badge-${project.category}`}>
                      {project.category === 'fullstack' ? 'Full Stack' : project.category === 'frontend' ? 'Frontend' : 'Backend'}
                    </span>
                  </div>
                  <h3 className="project-card-title">{project.title}</h3>
                </div>
                
                <p className="project-card-desc">{project.description}</p>
                
                <div className="project-tech-badges">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="tech-badge">{t}</span>
                  ))}
                </div>

                {/* Footer Action Links for Desktop & Mobile */}
                <div className="project-card-footer" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="card-detail-btn"
                  >
                    <Info size={15} /> Case Study
                  </button>

                  <div className="card-external-links">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-icon-link"
                      title="Source Code"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon size={16} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-icon-link link-live"
                      title="Live Website"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
