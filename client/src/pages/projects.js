import React from "react";
import "../pages/projects.css";

const projects = [
  {
    name: "AI Chatbot",
    details: "An AI-powered chatbot for customer service.",
    image: '/images/p1.jpg',
    youtube: "https://www.youtube.com/results?search_query=how+to+make+AI+chatbot",
    google: "https://www.google.com/search?q=AI+Chatbot",
  },
  {
    name: "E-Commerce Website",
    details: "A full-stack e-commerce website with payment integration.",
    image: '/images/p2.jpg',
    youtube: "https://www.youtube.com/results?search_query=how+to+build+ecommerce+website",
    google: "https://www.google.com/search?q=E-Commerce+Website",
  },
  {
    name: "Weather App",
    details: "A real-time weather app using API integration.",
    image: '/images/p3.jpg',
    youtube: "https://www.youtube.com/results?search_query=how+to+make+weather+app",
    google: "https://www.google.com/search?q=Weather+App",
  },
  {
    name: "Portfolio Website",
    details: "A personal portfolio website with modern UI/UX.",
    image: '/images/p4.jpg',
    youtube: "https://www.youtube.com/results?search_query=how+to+make+portfolio+website",
    google: "https://www.google.com/search?q=Portfolio+Website",
  },
  {
    name: "Home Automation System",
    details: "Control home appliances using IoT.",
    image: '/images/p5.jpg',
    youtube: "https://www.youtube.com/results?search_query=how+to+make+home+automation+system",
    google: "https://www.google.com/search?q=Home+Automation+System",
  },
  {
    name: "Expense Tracker",
    details: "An app to track and manage daily expenses.",
    image: '/images/p6.jpg',
    youtube: "https://www.youtube.com/results?search_query=how+to+make+expense+tracker",
    google: "https://www.google.com/search?q=Expense+Tracker",
  },
  {
    name: "Cybersecurity Tool",
    details: "A security tool for detecting vulnerabilities.",
    image: '/images/p7.jpg',
    youtube: "https://www.youtube.com/results?search_query=how+to+make+cybersecurity+tool",
    google: "https://www.google.com/search?q=Cybersecurity+Tool",
  },
  {
    name: "Blockchain Voting System",
    details: "A secure voting system using blockchain.",
    image: '/images/p8.jpg',
    youtube: "https://www.youtube.com/results?search_query=how+to+make+blockchain+voting+system",
    google: "https://www.google.com/search?q=Blockchain+Voting+System",
  },
  {
    name: "Data Science Dashboard",
    details: "An interactive dashboard for data analysis.",
    image: '/images/p9.jpg',
    youtube: "https://www.youtube.com/results?search_query=how+to+make+data+science+dashboard",
    google: "https://www.google.com/search?q=Data+Science+Dashboard",
  },
  {
    name: "Smart Traffic System",
    details: "An AI-powered traffic monitoring system.",
    image: '/images/p10.jpg',
    youtube: "https://www.youtube.com/results?search_query=how+to+make+smart+traffic+system",
    google: "https://www.google.com/search?q=Smart+Traffic+System",
  },
  {
    name: "Stock Market Prediction",
    details: "An AI-based stock market predictor.",
    image: '/images/p11.jpg',
    youtube: "https://www.youtube.com/results?search_query=how+to+make+stock+market+predictor",
    google: "https://www.google.com/search?q=Stock+Market+Prediction",
  },
  {
    name: "Augmented Reality App",
    details: "An AR-based mobile application.",
    image: '/images/p12.jpg',
    youtube: "https://www.youtube.com/results?search_query=how+to+make+augmented+reality+app",
    google: "https://www.google.com/search?q=Augmented+Reality+App",
  },
  {
    name: "Virtual Reality Game",
    details: "A VR-based immersive game.",
    image: '/images/p13.jpg',
    youtube: "https://www.youtube.com/results?search_query=how+to+make+VR+game",
    google: "https://www.google.com/search?q=Virtual+Reality+Game",
  },
  {
    name: "AI Face Recognition",
    details: "A deep learning-based face recognition system.",
    image: '/images/p14.jpg',
    youtube: "https://www.youtube.com/results?search_query=how+to+make+AI+face+recognition",
    google: "https://www.google.com/search?q=AI+Face+Recognition",
  },
  {
    name: "Smart Healthcare System",
    details: "An AI-driven healthcare assistant.",
    image: '/images/p15.jpg',
    youtube: "https://www.youtube.com/results?search_query=how+to+make+smart+healthcare+system",
    google: "https://www.google.com/search?q=Smart+Healthcare+System",
  },
  {
    name: "Self-Driving Car Simulation",
    details: "A machine learning-based self-driving car model.",
    image: '/images/p16.jpg',
    youtube: "https://www.youtube.com/results?search_query=how+to+make+self+driving+car",
    google: "https://www.google.com/search?q=Self-Driving+Car+Simulation",
  },
];


const Projects = () => {
  return (
    <div className="projects-container" style={{ paddingTop: '2320px', backgroundColor: '#fff', color: '#000' }}>
      <h1 className="title">Our Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.name} className="project-image" />
            <h2 className="project-title">{project.name}</h2>
            <p className="project-details">{project.details}</p>
            <div className="buttons">
              <a href={project.youtube} target="_blank" rel="noopener noreferrer" className="btn">🎥 Watch Tutorial</a>
              <a href={project.google} target="_blank" rel="noopener noreferrer" className="btn google">🔍 More Info</a>
            </div>
            <a href="/files/DigiWeb_Projectuse.docx" download="DigiWeb_Projectuse.docx" className="download-link">
  📄 Download Project Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
