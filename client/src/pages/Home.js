import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../pages/Home.css';
import h1 from '../assets/images/h1.jpg';
import h2 from '../assets/images/h2.jpg';
import h3 from '../assets/images/h3.jpg';
import h4 from '../assets/images/h4.jpg';
import h5 from '../assets/images/h5.jpg';
import h6 from '../assets/images/h6.jpg';
import h7 from '../assets/images/h7.jpg';
import h8 from '../assets/images/h8.jpg';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'; 



const socialLinks = [
  { icon: <FaFacebook />, url: 'https://www.facebook.com/login' },
  { icon: <FaTwitter />, url: 'https://twitter.com/login' },
  { icon: <FaLinkedin />, url: 'https://www.linkedin.com/login' },
  { icon: <FaInstagram />, url: 'https://www.instagram.com/accounts/login/' },
];

const sections = [
  { title: 'What is DIGIWEB?', content: 'DIGIWEB is an innovative IT company providing cutting-edge software solutions. We specialize in developing scalable, secure, and robust applications tailored to business needs. Our team consists of highly skilled professionals dedicated to delivering state-of-the-art digital solutions. With expertise in AI, cloud computing, and web development, we aim to set new industry standards. Our mission is to bridge the gap between technology and business, ensuring seamless digital transformation for enterprises of all sizes. We believe in long-term partnerships and delivering excellence in every project. Our commitment to quality and innovation drives us forward, helping businesses achieve their technological goals effortlessly.', image: h1, link: '' },
  { title: 'About DIGIWEB', content: 'We aim to revolutionize businesses with technology-driven solutions. Our approach involves deep market research, innovative problem-solving, and leveraging the latest technologies. Our team believes in continuous learning and improvement, ensuring our clients get the most effective solutions. We focus on customer-centric development, ensuring that every product and service we offer aligns with industry demands. With a strong commitment to quality and efficiency, we strive to make an impact globally. Our dedication to research and development helps us stay ahead of industry trends. We empower businesses by providing solutions that enhance productivity, streamline operations, and foster growth.', image: h2, link: '/about' },
  { title: 'Activities', content: 'We engage in various activities including Technical, Management, and Sports. Our team actively participates in hackathons, innovation challenges, and research projects. Beyond technology, we encourage leadership training, business development workshops, and recreational activities for employee well-being. Regular training sessions keep our workforce updated with emerging technologies. We foster a collaborative environment where creativity meets execution, ensuring high levels of productivity and innovation. Our focus is to develop well-rounded professionals equipped for the future. We strive to create an engaging workplace that balances work and personal growth.', image: h3, link: '/about' },
  { title: 'Our Services', content: 'We offer web development, cloud solutions, app development, cybersecurity, AI-driven solutions, and data analytics. Our services cater to startups, SMEs, and large enterprises, providing them with tailor-made digital strategies. We emphasize automation and efficiency, helping businesses streamline their operations. Our team ensures each service is optimized for scalability, security, and cost-effectiveness. From UI/UX design to backend architecture, we provide end-to-end development solutions. We continuously evolve our services to match the latest technological advancements. Every solution we deliver is designed to meet industry standards and exceed expectations.', image: h4, link: '/services' },
  { title: 'Our Products', content: 'Explore our range of innovative digital products designed to enhance efficiency and user experience. Our product line includes business management tools, AI-powered analytics software, and cloud-based applications. We constantly innovate to stay ahead of the competition, ensuring our products meet the evolving demands of various industries. Each product is developed with a focus on performance, security, and scalability. Our goal is to empower businesses with powerful digital tools that drive growth. We ensure that our products are user-friendly and adaptable to changing business needs. We prioritize intuitive design and seamless integration for an optimal user experience.', image: h5, link: '/product' },
  { title: 'Our Projects', content: 'Take a look at our successful projects that define excellence in software development and IT solutions. Our portfolio includes enterprise applications, AI-driven platforms, fintech solutions, and IoT-based systems. Each project reflects our commitment to quality, efficiency, and customer satisfaction. We believe in a user-first approach, ensuring our projects solve real-world problems effectively. Our work spans multiple industries, including healthcare, finance, e-commerce, and education. We aim to create impact-driven solutions that add value to businesses and communities. Our extensive experience enables us to tackle complex challenges with confidence.', image: h6, link: '/projects' },
  { title: 'Our Branches', content: 'DIGIWEB operates in multiple locations, providing seamless services worldwide. Our branches are strategically positioned in key tech hubs to ensure efficient service delivery. Each branch is equipped with state-of-the-art facilities and highly skilled professionals. We aim to expand our presence further, bringing our expertise closer to businesses in need of digital transformation. Our global reach enables us to collaborate with international clients and drive innovation across different markets. Expansion and collaboration remain integral to our long-term strategy. Our widespread presence ensures that we remain a trusted technology partner worldwide.', image: h7, link: '/branches' },
  { title: 'Our Partners', content: 'We collaborate with top companies to bring the best solutions in IT and software development. Our partnerships extend to global tech giants, startups, and research institutions, allowing us to stay ahead in innovation. Through these collaborations, we gain access to cutting-edge technologies, exclusive industry insights, and strategic growth opportunities. Our partners play a crucial role in enhancing our capabilities, ensuring that we continue to deliver top-notch solutions to our clients. Strong partnerships enable us to offer the most advanced solutions available. We believe in building long-lasting relationships that drive mutual success.', image: h8, link: '/partners' },
];

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-container" style={{ paddingTop: '7050px', backgroundColor: '#fff', color: '#000' }}>
    
      <header className="home-header">
        <h1 className="company-name">DIGIWEB SOFTWARE</h1>
      </header>
      
      {sections.map((section, index) => (
        <motion.div 
          key={index} 
          className={`section-box ${index % 2 === 0 ? 'reverse' : ''}`} 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          <img src={section.image} alt={section.title} className="section-image" />
          <div className="section-content" style={{ textAlign: 'justify' }}>
            <h2 className="section-heading">{section.title}</h2>
            <p className="section-text">{section.content}</p>
            {section.link && <Link to={section.link} className="btn">Learn More</Link>}
          </div>
        </motion.div>
      ))}

<motion.div 
  className="cta-box"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
  whileHover={{ y: -5 }} // Subtle floating effect on hover
>
  {/* AI-Generated Dynamic Message */}
  <motion.p 
    className="ai-message"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
  >
    🤖 "Your digital transformation begins now... Are you ready?"
  </motion.p>

  {/* Glitch Effect on Title */}
  <motion.h2 
    className="cta-title"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    whileHover={{ textShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)" }} // Glitch effect
  >
    🚀 Ready to Transform Your Business?
  </motion.h2>

  <p className="cta-text">
    At DIGIWEB, we empower businesses with next-gen solutions.  
    Leverage AI, cloud computing, and cutting-edge tech to stay ahead.  
  </p>

  {/* Countdown Timer Effect */}
  <motion.div 
    className="countdown-box"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.5 }}
  >
    <h3 className="countdown-text">⏳ Time left to claim your exclusive offer:</h3>
    <motion.span 
      className="countdown-timer"
      initial={{ scale: 1 }}
      animate={{ scale: [1.2, 1, 1.2] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      09:45
    </motion.span>
  </motion.div>

  {/* Success Story */}
  <motion.div 
    className="success-box"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.7 }}
  >
    <p>💡 "DIGIWEB transformed our sales by 250% in just 90 days!"</p>
    <span> CEO, Shreyansh Patel</span>
  </motion.div>

  {/* Call-to-Action Buttons (Same Colors, Better Animation) */}
  <div className="cta-buttons">
    <motion.button 
      className="btn cta-btn"
      whileHover={{ scale: 1.1 }} 
      whileTap={{ scale: 0.95 }}
    >
      <Link to="/login" className="cta-link">🚀 Get Started</Link>
    </motion.button>
    
    <motion.button 
      className="btn cta-btn"
      whileHover={{ scale: 1.1 }} 
      whileTap={{ scale: 0.95 }}
    >
      <Link to="/contact" className="cta-link">📞 Contact Us</Link>
    </motion.button>
  </div>
</motion.div>
<motion.div 
        className="social-media-icons"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.a 
          href="https://www.facebook.com/login" target="_blank" rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          className="social-icon facebook"
        >
          <FaFacebook />
        </motion.a>

        <motion.a 
          href="https://twitter.com/login" target="_blank" rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: -10 }}
          whileTap={{ scale: 0.9 }}
          className="social-icon twitter"
        >
          <FaTwitter />
        </motion.a>

        <motion.a 
          href="https://www.linkedin.com/login" target="_blank" rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          className="social-icon linkedin"
        >
          <FaLinkedin />
        </motion.a>

        <motion.a 
          href="https://www.instagram.com/accounts/login" target="_blank" rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: -10 }}
          whileTap={{ scale: 0.9 }}
          className="social-icon instagram"
        >
          <FaInstagram />
        </motion.a>
        <motion.a 
          href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          className="social-icon whatsapp"
        >
          <FaWhatsapp />
        </motion.a>
      
      </motion.div>

      <footer className="footer">
  <div className="footer-container">
    {/* Section 1: Company Info */}
    <div className="footer-section company-info">
      <h2>DIGIWEB IT Solutions</h2>
      <p><strong>Address:</strong> 123 TECH PARK, AHMEDABAD, GUJARAT,INDIA</p>
      <p><strong>Email:</strong> contact@digiweb.com</p>
      <p><strong>Phone:</strong> +91 123 456 789</p>
      <p><strong>Main Branch:</strong> AHMEDABAD,GUJARAT,INDIA</p>
      <p><strong>Business Hours:</strong> Mon - Fri: 9 AM - 6 PM</p>
    </div>

    {/* Section 2: Quick Links */}
    <div className="footer-section quick-links">
      <h2>Quick Links</h2>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/feedback">Feedback</a></li>
        <li><a href="/clients">Our Clients</a></li>
        <li><a href="/careers">Careers</a></li>
        <li><a href="/privacy-policy">Privacy Policy</a></li>
        <li><a href="/terms">Terms & Conditions</a></li>
      </ul>
    </div>

    {/* Section 3: Creative Content */}
    <div className="footer-section creative-content">
      <h2>Innovation & Excellence</h2>
      <p>"Transforming Ideas into Reality. Your Vision, Our Code."</p>
      <p>🚀 Crafting Digital Experiences with Passion & Precision! 🔥</p>
      <p>We believe in pushing technological boundaries, creating impactful solutions, and delivering excellence.</p>
      <p>💡 Let's innovate, inspire, and lead the digital revolution together! 💻</p>
    </div>
  </div>

  <div className="footer-bottom">
    <p>&copy;  DIGIWEB Softwares. All Rights Reserved.</p>
  </div>
</footer>

    
    </div>
    </div>
  );
};

export default Home;