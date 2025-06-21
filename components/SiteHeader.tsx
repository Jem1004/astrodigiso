'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#hero', label: 'Beranda' },
    { href: '#services', label: 'Layanan' },
    { href: '#portfolio', label: 'Portofolio' },
    { href: '#about', label: 'Tentang' },
    { href: '#contact', label: 'Kontak' },
  ];

  return (
    <header 
      style={{
        position: 'fixed',
        width: '100%',
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 10px 25px -5px rgba(0, 0, 0, 0.1)' : 'none'
      }}
    >
      <div className="container">
        <div className="flex-between" style={{ padding: '1rem 0' }}>
          {/* Logo */}
          <motion.a 
            href="#hero" 
            className="gradient-text"
            style={{ 
              fontSize: '1.5rem', 
              fontWeight: 700, 
              textDecoration: 'none' 
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            astro
          </motion.a>

          {/* Desktop Navigation */}
          <nav style={{ display: 'none' }} className="desktop-nav">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                style={{
                  color: '#374151',
                  textDecoration: 'none',
                  fontWeight: 500,
                  margin: '0 1rem',
                  transition: 'color 0.2s ease'
                }}
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            style={{
              display: 'block',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {menuOpen ? 
              <X style={{ width: '1.5rem', height: '1.5rem', color: '#374151' }} /> : 
              <Menu style={{ width: '1.5rem', height: '1.5rem', color: '#374151' }} />
            }
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(12px)',
              borderTop: '1px solid rgba(0, 0, 0, 0.1)'
            }}
          >
            <div className="container" style={{ padding: '1rem' }}>
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  style={{
                    display: 'block',
                    padding: '0.75rem 0',
                    color: '#374151',
                    textDecoration: 'none',
                    fontWeight: 500,
                    borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
                  }}
                  onClick={() => setMenuOpen(false)}
                  whileHover={{ x: 10 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default SiteHeader;