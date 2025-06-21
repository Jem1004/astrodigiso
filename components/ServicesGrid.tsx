'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, Zap, Shield, Headphones } from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    {
      icon: <Code style={{ width: '2rem', height: '2rem' }} />,
      title: 'Pengembangan Web',
      description: 'Aplikasi web modern dan responsif dengan teknologi terdepan untuk kebutuhan bisnis Anda.'
    },
    {
      icon: <Smartphone style={{ width: '2rem', height: '2rem' }} />,
      title: 'Aplikasi Mobile',
      description: 'Aplikasi mobile native dan cross-platform yang user-friendly dan performa tinggi.'
    },
    {
      icon: <Globe style={{ width: '2rem', height: '2rem' }} />,
      title: 'Digital Marketing',
      description: 'Strategi pemasaran digital komprehensif untuk meningkatkan visibilitas online bisnis Anda.'
    },
    {
      icon: <Zap style={{ width: '2rem', height: '2rem' }} />,
      title: 'Optimasi Performa',
      description: 'Optimasi kecepatan dan performa website untuk pengalaman pengguna yang maksimal.'
    },
    {
      icon: <Shield style={{ width: '2rem', height: '2rem' }} />,
      title: 'Keamanan Cyber',
      description: 'Solusi keamanan digital terdepan untuk melindungi data dan sistem bisnis Anda.'
    },
    {
      icon: <Headphones style={{ width: '2rem', height: '2rem' }} />,
      title: 'Support 24/7',
      description: 'Dukungan teknis profesional yang siap membantu Anda kapan saja dibutuhkan.'
    }
  ];

  return (
    <section id="services" className="section" style={{ background: '#f9fafb' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 className="heading-lg gradient-text" style={{ marginBottom: '1rem' }}>Layanan Kami</h2>
          <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '32rem', margin: '0 auto' }}>
            Solusi digital komprehensif yang dirancang khusus untuk mengembangkan bisnis Anda
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              style={{
                background: 'white',
                borderRadius: '1rem',
                padding: '2rem',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                border: '1px solid #f3f4f6'
              }}
            >
              <div style={{ color: '#2563eb', marginBottom: '1rem', transition: 'transform 0.3s ease' }}>
                {service.icon}
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                marginBottom: '0.75rem',
                color: '#1f2937',
                transition: 'color 0.3s ease'
              }}>
                {service.title}
              </h3>
              <p style={{ color: '#6b7280', lineHeight: 1.7 }}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;