'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Background Elements */}
      <div className="hero-bg-element bg-blue"></div>
      <div className="hero-bg-element bg-purple"></div>
      <div className="hero-bg-element bg-pink"></div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ 
            maxWidth: '64rem', 
            margin: '0 auto', 
            textAlign: 'center', 
            position: 'relative', 
            zIndex: 10 
          }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              marginBottom: '2rem',
              borderRadius: '9999px',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
            }}
          >
            <Sparkles style={{ width: '1rem', height: '1rem', color: '#eab308' }} />
            <span style={{ fontSize: '0.875rem', fontWeight: 500, color: '#374151' }}>
              Solusi Digital Terpercaya
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="heading-xl"
            style={{ marginBottom: '1.5rem' }}
          >
            <span className="gradient-text">Solusi Digital</span>
            <br />
            <span style={{ color: '#1f2937' }}>Terdepan</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              marginBottom: '2rem',
              maxWidth: '42rem',
              margin: '0 auto 2rem'
            }}
          >
            Kami menghadirkan inovasi teknologi terdepan untuk mengembangkan bisnis Anda 
            dengan solusi digital yang komprehensif dan modern.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}
          >
            <motion.button
              className="btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Mulai Sekarang
              <ArrowRight style={{ width: '1rem', height: '1rem' }} />
            </motion.button>
            
            <motion.button
              style={{
                padding: '0.75rem 1.5rem',
                border: '2px solid #2563eb',
                background: 'transparent',
                color: '#2563eb',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Pelajari Lebih Lanjut
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;