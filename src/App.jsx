import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import WellnessInitiativeOverview from './components/sections/WellnessInitiativeOverview';
import FeaturedVideoSection from './components/sections/FeaturedVideoSection';
import BlogSection from './components/sections/BlogSection';
import EventsSection from './components/sections/EventsSection';
import InitiativePage from './pages/InitiativePage';
import BlogPage from './pages/BlogPage';
import './App.css';

function Home() {
  return (
    <>
      <div style={{ height: '100px' }} aria-hidden />
      <main className="main-content flex-1">
        <HeroSection />
        <WellnessInitiativeOverview />
        <FeaturedVideoSection />
        <BlogSection />
        <EventsSection />
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
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
