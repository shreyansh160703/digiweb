import React from "react";
import '../pages/Partners.css';

const partners = {
  "Technical": [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", details: "Multinational technology company.", website: "https://www.google.com/search?q=Google", location: "https://www.google.com/maps/search/Google" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", details: "Leading software and hardware company.", website: "https://www.google.com/search?q=Microsoft", location: "https://www.google.com/maps/search/Microsoft" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg", details: "AI and cloud computing services.", website: "https://www.google.com/search?q=IBM", location: "https://www.google.com/maps/search/IBM" },
    { name: "Amazon AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", details: "Cloud computing platform.", website: "https://www.google.com/search?q=Amazon+AWS", location: "https://www.google.com/maps/search/Amazon+AWS" },
    { name: "AMD", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_Logo.svg", details: "Advanced semiconductor and computing company.", website: "https://www.google.com/search?q=AMD", location: "https://www.google.com/maps/search/AMD"       },
    { name: "NVIDIA", logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg", details: "Graphics processing and AI computing company.", website: "https://www.google.com/search?q=NVIDIA", location: "https://www.google.com/maps/search/NVIDIA" }
  ],
 "Automobile": [
    { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg", details: "Electric vehicle and clean energy company.", website: "https://www.google.com/search?q=Tesla", location: "https://www.google.com/maps/search/Tesla" },
    { name: "Ford", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg", details: "American multinational automaker.", website: "https://www.google.com/search?q=Ford", location: "https://www.google.com/maps/search/Ford" },
    { name: "BMW", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg", details: "German luxury vehicle company.", website: "https://www.google.com/search?q=BMW", location: "https://www.google.com/maps/search/BMW" },
    { name: "Mercedes-Benz", logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg", details: "Premium automobile manufacturer.", website: "https://www.google.com/search?q=Mercedes-Benz", location: "https://www.google.com/maps/search/Mercedes-Benz" },
    ],

  



};

const Partners = () => {
  return (
    <div className="partners-container">
        <div className="partners-container" style={{ paddingTop: '1600px', backgroundColor: '#fff', color: '#000' }}>
      <h1 className="title">Our Partners</h1>
      {Object.keys(partners).map((category, index) => (
        <div key={index} className="partners-section">
          <h2 className="partners-category">{category}</h2>
          <div className="partners-grid">
            {partners[category].map((partner, i) => (
              <div key={i} className="partner-card">
                {/* Logo with fallback */}
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="partner-logo"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/100";
                    e.target.alt = "Logo Not Available";
                  }}
                />
                <h3 className="partner-name">{partner.name}</h3>
                <p className="partner-details">{partner.details}</p>
                <div className="partner-buttons">
                  <a href={partner.website} target="_blank" rel="noopener noreferrer" className="partner-button">More Details</a>
                  <a href={partner.location} target="_blank" rel="noopener noreferrer" className="partner-button">Location</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    
    </div>

  );
};

export default Partners;
