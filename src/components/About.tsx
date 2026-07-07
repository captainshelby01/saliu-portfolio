import { Cpu, Award, GraduationCap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolio';
import './About.css';

export default function About() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="about" className="about-section">
      <div className="container">
        <span className="section-subtitle">Who I Am</span>
        <h2 className="section-title text-gradient">About Me</h2>
        
        <div className="about-grid grid-2">
          {/* Narrative Content */}
          <div className="about-text-content">
            <h3 className="about-heading">
              Building scalable digital solutions with clean architecture
            </h3>
            <p className="about-paragraph">
              Hello! I'm <strong>{personal.fullName}</strong>, a highly motivated Full Stack Developer. 
              My journey in software engineering stems from a deep curiosity about how things work under the hood. 
              I design and build applications that combine solid backend architecture with fluid, interactive user experiences.
            </p>
            <p className="about-paragraph">
              I focus on writing semantic, clean, and maintainable code. I enjoy brainstorming complex logic, 
              optimizing database queries, and setting up automated CI/CD pipelines to make deployments seamless. 
              I'm always eager to learn new technologies and apply best practices in my daily workflows.
            </p>

            <div className="stats-grid">
              <div className="stat-card glass-card">
                <span className="stat-number accent-gradient">{personal.experienceYears}</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-card glass-card">
                <span className="stat-number accent-gradient">15+</span>
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="stat-card glass-card">
                <span className="stat-number accent-gradient">95%</span>
                <span className="stat-label">Test Coverage</span>
              </div>
            </div>
          </div>

          {/* Cards Grid Showing Attributes */}
          <div className="about-attributes">
            <div className="attribute-card glass-card">
              <div className="attribute-icon-wrapper wrapper-indigo">
                <Cpu size={24} />
              </div>
              <div className="attribute-info">
                <h4>Full Stack Engineering</h4>
                <p>Developing seamless end-to-end applications using React, Node.js, and reliable databases.</p>
              </div>
            </div>

            <div className="attribute-card glass-card">
              <div className="attribute-icon-wrapper wrapper-cyan">
                <GraduationCap size={24} />
              </div>
              <div className="attribute-info">
                <h4>Continuous Learning</h4>
                <p>Bachelor of Science in Computer Science, keeping up-to-date with cloud certifications and dev trends.</p>
              </div>
            </div>

            <div className="attribute-card glass-card">
              <div className="attribute-icon-wrapper wrapper-pink">
                <Award size={24} />
              </div>
              <div className="attribute-info">
                <h4>Quality Assurance</h4>
                <p>Implementing extensive unit, integration, and performance testing for robust codebases.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
