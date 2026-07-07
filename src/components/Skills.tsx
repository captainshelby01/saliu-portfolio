import { Layout, Server, Database, Settings } from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolio';
import './Skills.css';

export default function Skills() {
  const getCategoryIcon = (key: string) => {
    switch (key) {
      case 'frontend':
        return <Layout className="cat-icon text-indigo" size={24} />;
      case 'backend':
        return <Server className="cat-icon text-cyan" size={24} />;
      case 'database':
        return <Database className="cat-icon text-pink" size={24} />;
      case 'devops':
        return <Settings className="cat-icon text-emerald" size={24} />;
      default:
        return <Settings className="cat-icon" size={24} />;
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <span className="section-subtitle">What I Do</span>
        <h2 className="section-title text-gradient">Technical Skills</h2>
        <p className="section-desc">
          A representation of technologies I use to build scalable, high-performance, and secure applications.
        </p>

        <div className="skills-grid grid-2">
          {PORTFOLIO_DATA.skills.map((category, idx) => (
            <div key={idx} className="category-card glass-card">
              <div className="category-header">
                {getCategoryIcon(category.categoryKey)}
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-progress-bg">
                      <div
                        className="skill-progress-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
