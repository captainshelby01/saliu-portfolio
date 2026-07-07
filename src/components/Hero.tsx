import { useState, useEffect } from 'react';
import { Mail, ArrowRight, Play } from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolio';
import { GithubIcon, LinkedinIcon } from './Icons';
import './Hero.css';

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const { personal } = PORTFOLIO_DATA;

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const fullText = personal.titles[titleIndex];
    const typingSpeed = isDeleting ? 30 : 80;

    if (!isDeleting && currentText === fullText) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % personal.titles.length);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? fullText.substring(0, currentText.length - 1)
            : fullText.substring(0, currentText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex, personal.titles]);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      {/* Background blobs for premium lighting */}
      <div className="background-blob blob-1"></div>
      <div className="background-blob blob-2"></div>
      <div className="background-blob blob-3"></div>

      <div className="container hero-grid grid-2">
        <div className="hero-content">
          <div className="badge-wrapper">
            <span className="hero-badge">
              <span className="pulse-dot"></span> {personal.availability}
            </span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <br />
            <span className="text-gradient">{personal.fullName}</span>
          </h1>

          <div className="typing-container">
            <span className="typing-prefix">I am a </span>
            <span className="typing-text">{currentText}</span>
            <span className="typing-cursor">|</span>
          </div>

          <p className="hero-description">
            Passionate Full Stack Developer specializing in crafting high-performance, 
            visually stunning, and secure web solutions. I turn complex logic into 
            intuitive user experiences.
          </p>

          <div className="hero-actions">
            <button onClick={() => scrollToSection('#projects')} className="btn btn-primary">
              Explore Projects <ArrowRight size={18} />
            </button>
            <button onClick={() => scrollToSection('#contact')} className="btn btn-secondary">
              Let's Connect
            </button>
          </div>

          <div className="hero-socials">
            <span className="socials-label">Find me on:</span>
            <div className="socials-list">
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
                <GithubIcon size={20} />
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
              <a href={`mailto:${personal.email}`} className="social-icon-btn" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          {/* Developer Portrait with glowing premium frame */}
          <div className="portrait-wrapper">
            <div className="portrait-glow-ring"></div>
            <div className="portrait-frame glass-card">
              <img
                src="/saliu-portrait.png"
                alt="Saliu Oluwafemi Emmanuel — Full Stack Developer"
                className="portrait-img"
              />
            </div>
          </div>

          {/* Floating Performance Metric Card */}
          <div className="floating-card glass-card float-metric">
            <div className="metric-header">
              <span className="metric-title">Experience</span>
              <span className="metric-value">{personal.experienceYears}</span>
            </div>
            <div className="metric-bar-wrapper">
              <div className="metric-bar-fill"></div>
            </div>
            <div className="metric-footer">
              <Play size={12} className="metric-footer-icon" />
              <span>Full Stack Projects</span>
            </div>
          </div>

          {/* Floating Active Tech stack list */}
          <div className="floating-card glass-card float-stack">
            <span className="stack-badge badge-node">Laravel</span>
            <span className="stack-badge badge-react">React</span>
            <span className="stack-badge badge-ts">Node.js</span>
          </div>
        </div>
      </div>
    </section>
  );
}
