import { ArrowUp, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolio';
import { GithubIcon, LinkedinIcon } from './Icons';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { personal } = PORTFOLIO_DATA;

  return (
    <footer className="footer-wrapper">
      <div className="container footer-content">
        <div className="footer-brand">
          <span className="footer-logo">SOE<span className="dot">.</span></span>
          <p className="footer-tagline">Building clean, scalable full-stack applications.</p>
        </div>

        <div className="footer-links-socials">
          <div className="footer-socials">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
            <a href={`mailto:${personal.email}`} className="footer-social-link" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
          
          <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Scroll to top">
            <ArrowUp size={16} /> Back to Top
          </button>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} {personal.fullName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
