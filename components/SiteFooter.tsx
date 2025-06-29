'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail } from 'lucide-react';

const SiteFooter = () => {
  const socialLinks = [
    { icon: <Facebook style={{ width: '1.25rem', height: '1.25rem' }} />, href: '#', label: 'Facebook' },
    { icon: <Twitter style={{ width: '1.25rem', height: '1.25rem' }} />, href: '#', label: 'Twitter' },
    { icon: <Instagram style={{ width: '1.25rem', height: '1.25rem' }} />, href: '#', label: 'Instagram' },
    { icon: <Linkedin style={{ width: '1.25rem', height: '1.25rem' }} />, href: '#', label: 'LinkedIn' },
    { icon: <Github style={{ width: '1.25rem', height: '1.25rem' }} />, href: '#', label: 'GitHub' },
    { icon: <Mail style={{ width: '1.25rem', height: '1.25rem' }} />, href: 'mailto:hello@astrodigital.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Layanan', href: '#services' },
    { name: 'Portofolio', href: '#portfolio' },
    { name: 'Tentang', href: '#about' },
    { name: 'Kontak', href: '#contact' }
  ];

  const services = [
    'Pengembangan Web',
    'Aplikasi Mobile',
    'Digital Marketing',
    'UI/UX Design',
    'Konsultasi IT'
  ];

  return (
    <footer style={{ background: '#111827', color: 'white' }}>
      <div className="container" style={{ padding: '4rem 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ gridColumn: 'span 2' }}
          >
            <h3 className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Astro Digital Solution</h3>
            <p style={{ color: '#d1d5db', marginBottom: '1.5rem', lineHeight: 1.7, maxWidth: '28rem' }}>
              Kami adalah partner terpercaya untuk transformasi digital bisnis Anda. 
              Dengan teknologi terdepan dan tim berpengalaman, kami siap mewujudkan visi digital Anda.
            </p>
            
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem' }}>Menu Cepat</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  style={{
                    color: '#d1d5db',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    display: 'block',
                    padding: '0.25rem 0'
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem' }}>Layanan</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {services.map((service, index) => (
                <span key={index} style={{ color: '#d1d5db', display: 'block', padding: '0.25rem 0' }}>{service}</span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          style={{
            borderTop: '1px solid #374151',
            marginTop: '3rem',
            paddingTop: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '1rem' }}>
            © 2025 Astro Digital Solution. Semua hak dilindungi.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.875rem' }}>
            <a href="/privacy" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.3s ease' }}>Kebijakan Privasi</a>
            <a href="#" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.3s ease' }}>Syarat & Ketentuan</a>
            <a href="#" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.3s ease' }}>Sitemap</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default SiteFooter;