import React from "react";
import Navbar from "../components/layout/Navbar";
import HeroSectionAbout from "../components/sections/aboutus-hero";
import HeroSectionHealthcare from "../components/sections/modernsection";
import MissionSection from "../components/sections/mission";
import HealthcareTeam from "../components/sections/healthcareteam";
import GlobalReach from "../components/sections/global";
import FounderNote from "../components/sections/founder";



export default function AboutUs() {
  return (
   <>
    <Navbar />
    <HeroSectionAbout />
    <HeroSectionHealthcare />
    <MissionSection />
    <HealthcareTeam />
    <GlobalReach />
    <FounderNote />
    
   
   
   
   </>
  );
}