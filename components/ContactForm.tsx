'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isValid, setIsValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    
    // Validate form
    const isFormValid = newFormData.name.trim() !== '' && 
                       newFormData.email.trim() !== '' && 
                       /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newFormData.email) &&
                       newFormData.message.trim() !== '';
    setIsValid(isFormValid);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      setIsValid(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail style={{ width: '1.5rem', height: '1.5rem' }} />,
      title: 'Email',
      value: 'info@astrods.id',
      link: 'mailto:hello@astrodigital.com'
    },
    {
      icon: <Phone style={{ width: '1.5rem', height: '1.5rem' }} />,
      title: 'Telepon',
      value: '+62 21-5873-6885',
      link: 'tel:+6282158736885'
    },
    {
      icon: <MapPin style={{ width: '1.5rem', height: '1.5rem' }} />,
      title: 'Alamat',
      value: 'Kalimantan Timur, Penajam Paser Utara, Babulu Darat 76285',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="section" style={{ background: 'white' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 className="heading-lg gradient-text" style={{ marginBottom: '1rem' }}>Hubungi Kami</h2>
          <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '32rem', margin: '0 auto' }}>
            Siap memulai proyek digital Anda? Mari diskusikan kebutuhan Anda dengan tim kami
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem', maxWidth: '72rem', margin: '0 auto' }}>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', color: '#1f2937' }}>Mari Berkolaborasi</h3>
              <p style={{ color: '#6b7280', lineHeight: 1.7, marginBottom: '2rem' }}>
                Kami siap membantu mewujudkan visi digital Anda. Hubungi kami untuk konsultasi gratis 
                dan diskusi tentang bagaimana kami dapat membantu mengembangkan bisnis Anda.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '1rem',
                    background: '#f9fafb',
                    borderRadius: '0.75rem',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{ color: '#2563eb', marginRight: '1rem', transition: 'transform 0.3s ease' }}>
                    {info.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: '#1f2937' }}>{info.title}</div>
                    <div style={{ color: '#6b7280' }}>{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form 
              onSubmit={handleSubmit}
              aria-label="Contact Form"
              style={{
                background: '#f9fafb',
                borderRadius: '1rem',
                padding: '2rem',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
              }}
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', padding: '3rem 0' }}
                >
                  <CheckCircle style={{ width: '4rem', height: '4rem', color: '#10b981', margin: '0 auto 1rem' }} />
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1f2937', marginBottom: '0.5rem' }}>Pesan Terkirim!</h3>
                  <p style={{ color: '#6b7280' }}>Terima kasih atas pesan Anda. Kami akan segera menghubungi Anda.</p>
                </motion.div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <label htmlFor="name" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '0.5rem' }}>
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '0.75rem',
                        background: 'white',
                        transition: 'all 0.2s ease',
                        fontSize: '1rem'
                      }}
                      placeholder="Masukkan nama lengkap Anda"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '0.5rem' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '0.75rem',
                        background: 'white',
                        transition: 'all 0.2s ease',
                        fontSize: '1rem'
                      }}
                      placeholder="nama@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '0.5rem' }}>
                      Pesan *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '0.75rem',
                        background: 'white',
                        transition: 'all 0.2s ease',
                        fontSize: '1rem',
                        resize: 'none'
                      }}
                      placeholder="Ceritakan tentang proyek atau kebutuhan Anda..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={!isValid || isLoading}
                    whileHover={isValid ? { scale: 1.02 } : {}}
                    whileTap={isValid ? { scale: 0.98 } : {}}
                    style={{
                      width: '100%',
                      padding: '1rem 1.5rem',
                      borderRadius: '0.75rem',
                      fontWeight: 600,
                      fontSize: '1.125rem',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      border: 'none',
                      cursor: isValid ? 'pointer' : 'not-allowed',
                      background: isValid ? '#2563eb' : '#d1d5db',
                      color: isValid ? 'white' : '#6b7280'
                    }}
                  >
                    {isLoading ? (
                      <div className="spinner" style={{ width: '1.5rem', height: '1.5rem' }} />
                    ) : (
                      <>
                        Kirim Pesan
                        <Send style={{ width: '1.25rem', height: '1.25rem' }} />
                      </>
                    )}
                  </motion.button>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;