import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import './Contact.css';

const Contact = () => {
  const { t } = useLang();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert(t.contact.form.success);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">{t.contact.title}</h2>

        <div className="contact-content">
          <div className="contact-info glass animate-slide-up">
            <h3>{t.contact.heading}</h3>
            <p className="contact-desc">{t.contact.description}</p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon"><Mail size={24} /></div>
                <div>
                  <h4>{t.contact.email}</h4>
                  <p>contacto@gmcp.dev</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><MapPin size={24} /></div>
                <div>
                  <h4>{t.contact.location}</h4>
                  <p>{t.contact.locationValue}</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Phone size={24} /></div>
                <div>
                  <h4>{t.contact.phone}</h4>
                  <p>+34 000 000 000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container glass animate-slide-up delay-200">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">{t.contact.form.name}</label>
                <input
                  type="text" id="name" name="name"
                  value={formData.name} onChange={handleChange}
                  required placeholder={t.contact.form.namePlaceholder}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t.contact.form.email}</label>
                <input
                  type="email" id="email" name="email"
                  value={formData.email} onChange={handleChange}
                  required placeholder={t.contact.form.emailPlaceholder}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">{t.contact.form.message}</label>
                <textarea
                  id="message" name="message"
                  value={formData.message} onChange={handleChange}
                  required rows="5" placeholder={t.contact.form.messagePlaceholder}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? t.contact.form.sending : (
                  <>
                    <span>{t.contact.form.send}</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
