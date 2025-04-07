import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/images/digiweb_logo.jpg';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const currentPath = location.pathname.substring(1).toLowerCase() || 'home';
    setActive(currentPath);
  }, [location.pathname]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const formattedQuery = searchTerm.toLowerCase().trim().replace(/\s+/g, "-");

    const availableRoutes = [
      "home", "about", "services", "projects", "branches",
      "product", "partners", "contact", "login"
    ];

    const foundRoute = availableRoutes.find(route => route.includes(formattedQuery));

    if (foundRoute) {
      navigate(`/${foundRoute}`);
      setSearchTerm(''); 
    } else {
      alert("Page not found! Try searching for Home, About, Services, Projects, Branches, Product, Contact, or Login.");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/about">
          <img
            src={logo}
            alt="DigiWeb Logo"
            className="navbar-logo"
            style={{ cursor: "pointer" }}
          />
        </Link>
      </div>

      <ul className="navbar-list">
        <li className={`nav-item ${active === 'home' ? 'active' : ''}`}>
          <Link to="/">Home</Link>
        </li>
        <li className={`nav-item ${active === 'about' ? 'active' : ''}`}>
          <Link to="/about">About</Link>
        </li>
        <li className={`nav-item ${active === 'services' ? 'active' : ''}`}>
          <Link to="/services">Services</Link>
        </li>
        <li className={`nav-item ${active === 'projects' ? 'active' : ''}`}>
          <Link to="/projects">Projects</Link>
        </li>
        <li className={`nav-item ${active === 'branches' ? 'active' : ''}`}>
          <Link to="/branches">Branches</Link>
        </li>
        <li className={`nav-item ${active === 'product' ? 'active' : ''}`}>
          <Link to="/product">Product</Link>
        </li>
        <li className={`nav-item ${active === 'partners' ? 'active' : ''}`}>
          <Link to="/partners">Partners</Link>
        </li>
        <li className={`nav-item ${active === 'contact' ? 'active' : ''}`}>
          <Link to="/contact">Contact</Link>
        </li>
        <li className={`nav-item ${active === 'login' ? 'active' : ''}`}>
          <Link to="/login">Login</Link>
        </li>
      </ul>

      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
