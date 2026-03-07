import React from "react";
import ServicesSection from "../components/sections/ServicesSection";
import WhyChooseUs from "../components/sections/whychooseus";
import EnrichmentSection from "../components/sections/EnrichmentSection";

const Services = () => {
  return (
    <>
      <div style={{ marginTop: "120px" }}>
        <ServicesSection />
      </div>

      <div>
        <WhyChooseUs />
      </div>
      <div>
        <EnrichmentSection />
      </div>
      
    </>
  );
};

export default Services;