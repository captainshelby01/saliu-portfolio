import { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, ShieldCheck } from 'lucide-react';
import type { Project } from '../config/portfolio';
import { GithubIcon } from './Icons';
import './ProjectModal.css';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="modal-container glass-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="modal-badge-row">
              <span className={`project-tag-badge badge-${project.category}`}>
                {project.category === 'fullstack' ? 'Full Stack' : project.category === 'frontend' ? 'Frontend' : 'Backend'}
              </span>
              {project.status && (
                <span className="modal-status-badge">
                  <ShieldCheck size={12} /> {project.status}
                </span>
              )}
            </div>
            <h2 id="project-modal-title" className="modal-title">
              {project.title}
            </h2>
          </div>

          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="modal-body">
          {/* Overview */}
          <div className="modal-section">
            <h3 className="modal-section-title">
              <Layers size={16} className="section-icon" /> Project Overview
            </h3>
            <p className="modal-desc">{project.description}</p>
          </div>

          {/* Architecture Highlights */}
          {project.architecture && (
            <div className="modal-section">
              <h3 className="modal-section-title">
                <Cpu size={16} className="section-icon" /> Architecture & Implementation
              </h3>
              <p className="modal-desc modal-architecture">{project.architecture}</p>
            </div>
          )}

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="modal-section">
              <h3 className="modal-section-title">
                <CheckCircle2 size={16} className="section-icon" /> Key Features & Capabilities
              </h3>
              <ul className="modal-features-list">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="modal-feature-item">
                    <CheckCircle2 size={16} className="feature-check-icon" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Used */}
          <div className="modal-section">
            <h3 className="modal-section-title">Technologies & Tools</h3>
            <div className="modal-tech-pills">
              {project.tech.map((t, idx) => (
                <span key={idx} className="modal-tech-pill">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions Footer */}
        <div className="modal-footer">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary modal-btn"
          >
            <GithubIcon size={18} /> View Source
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary modal-btn"
          >
            Live Application <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
