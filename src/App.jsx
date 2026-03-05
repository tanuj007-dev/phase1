import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import StatsSection from './components/sections/StatsSection';
import WellnessInitiativeOverview from './components/sections/WellnessInitiativeOverview';
import FeaturedVideoSection from './components/sections/FeaturedVideoSection';
import BlogSection from './components/sections/BlogSection';
import EventsSection from './components/sections/EventsSection';
import PromotionalBannerSection from './components/sections/PromotionalBannerSection';
import JourneyContactSection from './components/sections/JourneyContactSection';
import FAQSection from './components/sections/FAQSection';
import InitiativePage from './pages/InitiativePage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function Home() {
  return (
    <>
      <main className="main-content flex-1">
        <HeroSection />
        <StatsSection />
        <WellnessInitiativeOverview />
        <FeaturedVideoSection />
        <BlogSection />
        <EventsSection />
        <PromotionalBannerSection />
        <FAQSection />
        <JourneyContactSection />
      </main>
    </>
  );
}

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/initiative/:slug" element={<InitiativePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
