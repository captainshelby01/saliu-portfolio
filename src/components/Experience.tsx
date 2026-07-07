import { Briefcase, Calendar, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolio';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      {/* Background blobs for premium lighting */}
      <div className="background-blob blob-1"></div>
      <div className="background-blob blob-3"></div>

      <div className="container">
        <span className="section-subtitle">My Career Path</span>
        <h2 className="section-title text-gradient">Work Experience</h2>
        <p className="section-desc">
          A summary of my professional background, key achievements, and roles.
        </p>

        {/* Timeline Layout */}
        <div className="timeline-wrapper">
          <div className="timeline-line"></div>
          
          <div className="timeline-items">
            {PORTFOLIO_DATA.experience.map((item, idx) => (
              <div key={item.id} className={`timeline-item ${idx % 2 === 0 ? 'left-item' : 'right-item'}`}>
                {/* Timeline center indicator dot */}
                <div className="timeline-dot-wrapper">
                  <div className="timeline-dot">
                    <Briefcase size={14} className="timeline-dot-icon" />
                  </div>
                </div>

                {/* Experience Detail Card */}
                <div className="timeline-card glass-card">
                  <div className="experience-header">
                    <div className="experience-role-group">
                      <div className="role-title-row">
                        <h3>{item.role}</h3>
                        {item.isCurrent && <span className="badge-current">Current</span>}
                        {item.isRemote && <span className="badge-remote">🌐 Remote</span>}
                      </div>
                      <span className="experience-company">{item.company}</span>
                    </div>
                    <div className="experience-date">
                      <Calendar size={14} />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <p className="experience-desc">{item.description}</p>
                  
                  <ul className="experience-points">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx}>
                        <CheckCircle size={14} className="point-icon" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
