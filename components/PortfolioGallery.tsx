'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const PortfolioGallery = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const portfolioItems = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image: '/api/placeholder/400/300',
      description: 'Platform e-commerce modern dengan fitur lengkap dan performa tinggi',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      image: '/api/placeholder/400/300',
      description: 'Aplikasi mobile banking dengan keamanan tinggi dan UX yang intuitif',
      tech: ['React Native', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Corporate Website',
      category: 'Web Design',
      image: '/api/placeholder/400/300',
      description: 'Website korporat dengan desain modern dan optimasi SEO',
      tech: ['React', 'Gatsby', 'GraphQL'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Learning Management System',
      category: 'Web Application',
      image: '/api/placeholder/400/300',
      description: 'Platform pembelajaran online dengan fitur interaktif',
      tech: ['Vue.js', 'Laravel', 'MySQL'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'IoT Dashboard',
      category: 'Data Visualization',
      image: '/api/placeholder/400/300',
      description: 'Dashboard monitoring IoT dengan visualisasi data real-time',
      tech: ['React', 'D3.js', 'WebSocket'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Social Media App',
      category: 'Mobile Development',
      image: '/api/placeholder/400/300',
      description: 'Aplikasi media sosial dengan fitur sharing dan komunikasi',
      tech: ['Flutter', 'Firebase', 'Dart'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleItems(prev => [...new Set([...prev, id])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('[data-id]');
    elements.forEach(el => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      elements.forEach(el => {
        if (observerRef.current) {
          observerRef.current.unobserve(el);
        }
      });
    };
  }, []);

  return (
    <section id="portfolio" className="section" style={{ background: 'white' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 className="heading-lg gradient-text" style={{ marginBottom: '1rem' }}>Portofolio Kami</h2>
          <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '32rem', margin: '0 auto' }}>
            Lihat berbagai proyek yang telah kami kerjakan dengan teknologi terdepan
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {portfolioItems.map((item, index) => (
            <motion.figure
              key={item.id}
              data-id={item.id}
              tabIndex={0}
              initial={{ opacity: 0, y: 50 }}
              animate={visibleItems.includes(item.id) ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{
                position: 'relative',
                background: 'white',
                borderRadius: '1rem',
                overflow: 'hidden',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.5s ease',
                border: '1px solid #f3f4f6'
              }}
            >
              {/* Image Container */}
              <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/3' }}>
                
                {/* Action Buttons */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  display: 'flex',
                  gap: '0.5rem',
                  opacity: 0,
                  transition: 'all 0.3s ease',
                  transform: 'translateY(0.5rem)'
                }}>
                  <motion.a
                    href={item.liveUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(4px)',
                      padding: '0.5rem',
                      borderRadius: '50%',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      transition: 'background 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    aria-label="View Live Demo"
                  >
                    <ExternalLink style={{ width: '1rem', height: '1rem', color: '#374151' }} />
                  </motion.a>
                  <motion.a
                    href={item.githubUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(4px)',
                      padding: '0.5rem',
                      borderRadius: '50%',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      transition: 'background 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    aria-label="View Source Code"
                  >
                    <Github style={{ width: '1rem', height: '1rem', color: '#374151' }} />
                  </motion.a>
                </div>
              </div>

              {/* Content */}
              <figcaption style={{ padding: '1.5rem' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <span style={{
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: '#2563eb',
                    background: 'rgba(37, 99, 235, 0.1)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px'
                  }}>
                    {item.category}
                  </span>
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                  color: '#1f2937',
                  transition: 'color 0.3s ease'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  color: '#6b7280',
                  marginBottom: '1rem',
                  lineHeight: 1.7
                }}>
                  {item.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {item.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        color: '#6b7280',
                        background: '#f3f4f6',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '0.375rem'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;