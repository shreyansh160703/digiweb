import React, { useEffect } from "react";
import "./about.css";

// Importing images
import missionImage from "../assets/images/mission.jpg";
import visionImage from "../assets/images/vision.jpg";
import cultureImage from "../assets/images/culture.jpg";
import historyImage from "../assets/images/history.jpg";
import sportsImage from "../assets/images/sports.jpg";
import projectsImage from "../assets/images/projects.jpg";

function About() {
  useEffect(() => {
    const sections = document.querySelectorAll(".about-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const aboutData = [
    { title: "Our History", text: "Founded with the vision of transforming the digital landscape, DigiWeb started as a small team of passionate developers. Over the years, we have grown into a full-fledged IT company, delivering cutting-edge solutions across industries.", img: historyImage },
    { title: "Our Mission", text: "Our mission is to empower businesses through innovative digital solutions that drive growth, enhance customer experiences, and create a lasting impact.", img: missionImage },
    { title: "Our Vision", text: "We strive to become a global leader in IT services, pioneering technological advancements and setting new industry standards with our innovative approach.", img: visionImage },
    { title: "Our Company Culture", text: "At DigiWeb, we foster a collaborative and inclusive work culture where creativity thrives. Our team consists of talented professionals who are passionate about technology and innovation.", img: cultureImage },
    { title: "Sports & Team Activities", text: "We believe in a work-life balance and encourage our employees to participate in various sports and recreational activities. From corporate cricket tournaments to friendly football matches, we create an environment that promotes health, teamwork, and fun.", img: sportsImage },
    { title: "Our Projects", text: "DigiWeb has successfully delivered numerous projects across multiple industries, including e-commerce platforms, ERP systems, CRM solutions, and AI-driven applications. Our innovative solutions drive efficiency and business growth.", img: projectsImage, button: true }
  ];

  return (
    <div className="about-container">
      
      <div className="about-container" style={{ paddingTop: '3300px', backgroundColor: '#fff', color: '#000' }}>
      <h1 className="title">About DigiWeb</h1>
      {aboutData.map((item, index) => (
        <div className={`about-section ${index % 2 === 0 ? "left" : "right"}`} key={index}>
          <img src={item.img} alt={item.title} className="about-image" />
          <div className="about-text">
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            {item.button && (
              <button className="projects-button" onClick={() => window.location.href = '/projects'}>
                Explore Our Projects
              </button>
            )}
          </div>
          
        </div>
      ))}
    </div>
    </div>
  );
}

export default About;
