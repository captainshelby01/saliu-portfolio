import { Layout, Server, Database, Settings, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolio';
import './Skills.css';

export default function Skills() {
  const getCategoryIcon = (key: string) => {
    switch (key) {
      case 'frontend':
        return <Layout className="cat-icon text-indigo" size={18} />;
      case 'backend':
        return <Server className="cat-icon text-cyan" size={18} />;
      case 'database':
        return <Database className="cat-icon text-pink" size={18} />;
      case 'devops':
        return <Settings className="cat-icon text-emerald" size={18} />;
      default:
        return <Settings className="cat-icon" size={18} />;
    }
  };

  const [coreCategory, ...secondaryCategories] = PORTFOLIO_DATA.skills;

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <span className="section-subtitle">Technical Stack</span>
        <h2 className="section-title text-gradient">Technologies &amp; Tools</h2>
        <p className="section-desc">
          Technologies and tools I use to build and maintain client applications.
        </p>

        <div className="skills-layout-grid">
          {/* Featured Core Stack with Project References */}
          <div className="category-card glass-card core-card">
            <div className="category-header">
              <div className="category-header-title">
                {getCategoryIcon(coreCategory.categoryKey)}
                <h3>{coreCategory.title}</h3>
              </div>
              {coreCategory.description && (
                <p className="category-subtext">{coreCategory.description}</p>
              )}
            </div>

            <div className="skills-chips-wrapper">
              {coreCategory.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-chip">
                  <div className="skill-chip-main">
                    <span className="skill-chip-name">{skill.name}</span>
                    {skill.badge && (
                      <span className="skill-chip-badge">{skill.badge}</span>
                    )}
                  </div>
                  {skill.projectRef && (
                    <span className="skill-chip-project">
                      <ArrowUpRight size={11} /> {skill.projectRef}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Compact Grouped Secondary Tooling */}
          <div className="secondary-skills-stack">
            {secondaryCategories.map((category, idx) => (
              <div key={idx} className="category-card glass-card compact-card">
                <div className="compact-category-header">
                  {getCategoryIcon(category.categoryKey)}
                  <h4>{category.title}</h4>
                </div>
                <div className="compact-tags-row">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="compact-pill-tag">
                      <span className="tag-name">{skill.name}</span>
                      {skill.badge && <span className="tag-sub">{skill.badge}</span>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
