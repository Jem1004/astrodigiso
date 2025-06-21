import React, { Suspense, lazy } from 'react';
import SiteHeader from '../components/SiteHeader';
import HeroSection from '../components/HeroSection';
import SiteFooter from '../components/SiteFooter';

// Lazy load komponen untuk performa
const ServicesGrid = lazy(() => import('../components/ServicesGrid'));
const PortfolioGallery = lazy(() => import('../components/PortfolioGallery'));
const AboutTeam = lazy(() => import('../components/AboutTeam'));
const ContactForm = lazy(() => import('../components/ContactForm'));

// Loading component
const LoadingSpinner = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
  </div>
);

export default function Home() {
  return (
    <main className="main-content">
      <SiteHeader />
      <HeroSection />
      
      <Suspense fallback={<LoadingSpinner />}>
        <ServicesGrid />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <PortfolioGallery />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <AboutTeam />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <ContactForm />
      </Suspense>
      
      <SiteFooter />
    </main>
  )
}