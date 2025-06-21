'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Award } from 'lucide-react';

const AboutTeam = () => {
  const teamMembers = [
    {
      name: 'Irawan',
      role: 'CEO & Founder',
      image: '/api/placeholder/300/300',
      bio: 'Visioner dengan pengalaman 10+ tahun dalam industri teknologi'
    },
    {
      name: 'R. Aditia P.W',
      role: 'CO-Founder',
      image: '/api/placeholder/300/300',
      bio: 'Expert dalam arsitektur sistem dan pengembangan aplikasi skala besar'
    },
    {
      name: 'Sadriansyah',
      role: 'Lead Developer',
      image: '/api/placeholder/300/300',
      bio: 'Desainer kreatif dengan fokus pada user experience dan interface design'
    },
    {
      name: 'Renaldi Pramana',
      role: 'Customer Service',
      image: '/api/placeholder/300/300',
      bio: 'Ahli dalam manajemen proyek dengan track record pengiriman tepat waktu'
    }
  ];

  const stats = [
    { icon: <Users style={{ width: '2rem', height: '2rem' }} />, number: '50+', label: 'Klien Puas' },
    { icon: <Award style={{ width: '2rem', height: '2rem' }} />, number: '100+', label: 'Proyek Selesai' },
    { icon: <Target style={{ width: '2rem', height: '2rem' }} />, number: '5+', label: 'Tahun Pengalaman' },
    { icon: <Eye style={{ width: '2rem', height: '2rem' }} />, number: '24/7', label: 'Support' }
  ];

  return (
    <section id="about" className="section" style={{ background: 'linear-gradient(135deg, #f9fafb 0%, #eff6ff 100%)' }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 className="heading-lg gradient-text" style={{ marginBottom: '1rem' }}>Tentang Kami</h2>
          <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '32rem', margin: '0 auto' }}>
            Tim profesional yang berdedikasi untuk memberikan solusi digital terbaik
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '5rem' }}>
          <motion.article
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              background: 'white',
              borderRadius: '1rem',
              padding: '2rem',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <Eye style={{ width: '2rem', height: '2rem', color: '#2563eb', marginRight: '0.75rem' }} />
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1f2937' }}>Visi Kami</h3>
            </div>
            <p style={{ color: '#6b7280', lineHeight: 1.7, fontSize: '1.125rem' }}>
              Menjadi perusahaan teknologi terdepan yang menghadirkan inovasi digital untuk 
              memajukan bisnis dan kehidupan masyarakat Indonesia.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              background: 'white',
              borderRadius: '1rem',
              padding: '2rem',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <Target style={{ width: '2rem', height: '2rem', color: '#2563eb', marginRight: '0.75rem' }} />
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1f2937' }}>Misi Kami</h3>
            </div>
            <p style={{ color: '#6b7280', lineHeight: 1.7, fontSize: '1.125rem' }}>
              Memberikan solusi teknologi berkualitas tinggi dengan pendekatan yang personal, 
              inovatif, dan berkelanjutan untuk setiap klien.
            </p>
          </motion.article>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '2rem',
            marginBottom: '5rem'
          }}
        >
          {stats.map((stat, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{ color: '#2563eb', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                {stat.icon}
              </div>
              <div style={{ fontSize: '1.875rem', fontWeight: 700, color: '#1f2937', marginBottom: '0.5rem' }}>
                {stat.number}
              </div>
              <div style={{ color: '#6b7280' }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h3 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '1rem', color: '#1f2937' }}>Tim Kami</h3>
          <p style={{ color: '#6b7280', maxWidth: '32rem', margin: '0 auto' }}>
            Bertemu dengan para ahli yang akan membantu mewujudkan visi digital Anda
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              style={{
                background: 'white',
                borderRadius: '1rem',
                padding: '1.5rem',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
            >
              <h4 style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                marginBottom: '0.5rem',
                color: '#1f2937',
                transition: 'color 0.3s ease'
              }}>
                {member.name}
              </h4>
              <p style={{ color: '#2563eb', fontWeight: 500, marginBottom: '0.75rem' }}>{member.role}</p>
              <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: 1.6 }}>{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;