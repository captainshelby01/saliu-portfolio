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
              Engineering reliable, high-converting digital products from conception to deployment
            </h3>
            <p className="about-paragraph">
              I'm <strong>{personal.fullName}</strong>, a Full Stack Software Engineer and founder at <strong>Crestlabs</strong>. 
              I partner with founders, businesses, and distributed engineering teams to turn ideas into robust, production-grade applications that convert users and scale smoothly.
            </p>
            <p className="about-paragraph">
              Whether building an e-commerce platform with Laravel and Alpine.js or developing modern web applications with React and TypeScript, my focus is always on clear architectural decisions, performance optimization, and solving tangible business problems.
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
                <span className="stat-number accent-gradient">4+</span>
                <span className="stat-label">Live Client Systems</span>
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
                <p>Developing end-to-end web applications and robust APIs using Laravel, PHP, and React.</p>
              </div>
            </div>

            <div className="attribute-card glass-card">
              <div className="attribute-icon-wrapper wrapper-cyan">
                <GraduationCap size={24} />
              </div>
              <div className="attribute-info">
                <h4>Computer Science Foundation</h4>
                <p>B.Sc. in Computer Science with a strong background in data structures, algorithms, and system design.</p>
              </div>
            </div>

            <div className="attribute-card glass-card">
              <div className="attribute-icon-wrapper wrapper-pink">
                <Award size={24} />
              </div>
              <div className="attribute-info">
                <h4>Business Impact First</h4>
                <p>Architecting user funnels, payment/ordering workflows, and SEO schemas that drive measurable growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
