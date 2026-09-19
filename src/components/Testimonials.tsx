import { Star, Quote, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolio';
import type { Testimonial } from '../config/portfolio';
import './Testimonials.css';

export default function Testimonials() {
  const testimonials = PORTFOLIO_DATA.testimonials || [];

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="testimonials-section">
      {/* Background blobs */}
      <div className="background-blob blob-1"></div>
      <div className="background-blob blob-2"></div>

      <div className="container">
        <span className="section-subtitle">Client Feedback</span>
        <h2 className="section-title text-gradient">Recommendations & Trust</h2>
        <p className="section-desc">
          What founders, educators, and creative directors say about collaborating on mission-critical applications.
        </p>

        <div className="testimonials-grid grid-3">
          {testimonials.map((item: Testimonial) => (
            <div key={item.id} className="testimonial-card glass-card">
              <div className="testimonial-header">
                <div className="quote-badge">
                  <Quote size={20} className="quote-icon" />
                </div>
                <div className="star-rating" aria-label={`${item.rating} out of 5 stars`}>
                  {Array.from({ length: item.rating }).map((_, sIdx) => (
                    <Star key={sIdx} size={16} className="star-icon filled" />
                  ))}
                </div>
              </div>

              <blockquote className="testimonial-feedback">
                "{item.feedback}"
              </blockquote>

              <div className="testimonial-footer">
                <div className="client-avatar">
                  {item.name.charAt(0)}
                </div>

                <div className="client-info">
                  <div className="client-name-row">
                    <h4 className="client-name">{item.name}</h4>
                    <span className="verified-pill" title="Verified Client">
                      <CheckCircle size={12} /> Verified
                    </span>
                  </div>
                  <p className="client-role">{item.role}</p>
                  <p className="client-company">{item.company}</p>
                </div>
              </div>

              {item.projectRelation && (
                <div className="project-relation-badge">
                  <span>Project: <strong>{item.projectRelation}</strong></span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
