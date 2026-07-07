import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolio';
import './Contact.css';

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const { personal } = PORTFOLIO_DATA;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.from_name || !formData.from_email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.from_email)) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus('error');
      setErrorMessage('Contact form is not configured. Add VITE_WEB3FORMS_ACCESS_KEY to your .env file.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.from_name,
          email: formData.from_email,
          subject: formData.subject || 'Portfolio contact form',
          message: formData.message,
        }),
      });

      const result = (await response.json()) as { success: boolean; message?: string };

      if (!response.ok || !result.success) {
        setStatus('error');
        setErrorMessage(result.message ?? 'Something went wrong. Please try again or email me directly.');
        return;
      }

      setStatus('success');
      setFormData({ from_name: '', from_email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
      setErrorMessage('Oops! Something went wrong. Please try again or email me directly.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="background-blob blob-2"></div>

      <div className="container">
        <span className="section-subtitle">Get In Touch</span>
        <h2 className="section-title text-gradient">Let's Connect</h2>
        <p className="section-desc">
          Have an exciting project idea, a role open, or just want to chat?
          Drop me a message and I will respond as soon as possible.
        </p>

        <div className="contact-grid grid-2">
          {/* Contact Details */}
          <div className="contact-info">
            <h3 className="info-heading">Reach Out Directly</h3>
            <p className="info-desc">
              Whether you prefer email, scheduling a virtual call, or social networks,
              feel free to reach out. I am open to full-time opportunities, freelance projects, and tech collaborations.
            </p>

            <div className="info-cards">
              <a href={`mailto:${personal.email}`} className="info-card glass-card">
                <div className="info-icon-wrapper">
                  <Mail size={20} />
                </div>
                <div className="info-text">
                  <span className="info-lbl">Email Me</span>
                  <span className="info-val">{personal.email}</span>
                </div>
              </a>

              <div className="info-card glass-card">
                <div className="info-icon-wrapper">
                  <MapPin size={20} />
                </div>
                <div className="info-text">
                  <span className="info-lbl">Location</span>
                  <span className="info-val">{personal.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form / Success Card */}
          <div className="contact-form-container">
            {status === 'success' ? (
              <div className="success-card glass-card">
                <CheckCircle2 size={56} className="success-icon" />
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out! I'll get back to you at your email shortly.</p>
                <button onClick={() => setStatus('idle')} className="btn btn-primary btn-sm">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form glass-card">
                <h3 className="form-heading">Send a Message</h3>

                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="from_name">Name <span className="req">*</span></label>
                    <input
                      type="text"
                      id="from_name"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="form-input"
                      disabled={status === 'loading'}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="from_email">Email <span className="req">*</span></label>
                    <input
                      type="email"
                      id="from_email"
                      name="from_email"
                      value={formData.from_email}
                      onChange={handleChange}
                      placeholder="Your email"
                      className="form-input"
                      disabled={status === 'loading'}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Message subject"
                    className="form-input"
                    disabled={status === 'loading'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message <span className="req">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Femi, I would like to talk about..."
                    rows={5}
                    className="form-input"
                    disabled={status === 'loading'}
                    required
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="form-error-msg">
                    <AlertCircle size={16} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
