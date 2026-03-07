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

import InitiativePage from './pages/InitiativePage';
import BlogPage from './pages/BlogPage';
import TermsConditions from "./pages/TermsConditions";
import ServiceDetails from "./pages/ServiceDetails";
import ContactPage from './pages/ContactPage';
import Services from "./pages/Services";
import AboutUs from './pages/about-us';
import PrivacyPolicy from './pages/Privacypolicy';

import WhyChooseUs from './components/sections/whychooseus';
import EnrichmentSection from './components/sections/EnrichmentSection';
import EventsPage from "./pages/EventsPage";
import EventDetails from "./pages/EventDetails";



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
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/services/:slug" element={<ServiceDetails />} />
          <Route path="/services" element={<Services />} />

          {/* FIXED */}
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/enrichment" element={<EnrichmentSection />} />
          <Route path="/events" element={<EventsPage />} />

<Route path="/events/:slug" element={<EventDetails />} />
          
          
         

        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;