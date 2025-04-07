// Products.js
import React from 'react';
import '../pages/Product.css';

const products = [
  {
    name: "DigiCRM",
    description: "A comprehensive customer relationship management tool that helps businesses manage customer interactions, sales pipelines, and customer support."
  },
  {
    name: "DigiERP",
    description: "An enterprise resource planning system for managing business operations, including inventory, sales, human resources, and finance."
  },
  {
    name: "DigiStore",
    description: "A customizable e-commerce platform with seamless payment gateway integration and inventory management features."
  },
  {
    name: "DigiHRMS",
    description: "A human resource management system for employee data management, payroll processing, and performance tracking."
  },
  {
    name: "DigiTask",
    description: "A project management tool designed to help teams collaborate, assign tasks, and track project progress."
  },
  {
    name: "DigiInvoice",
    description: "An invoicing system that simplifies the creation, sending, and management of invoices for businesses."
  },
  {
    name: "DigiChat",
    description: "A real-time chat application to enhance communication and collaboration between teams."
  },
  {
    name: "DigiAnalytics",
    description: "A powerful data analytics tool that provides insights into business performance and customer behavior."
  },
  {
    name: "DigiSecurity",
    description: "A cybersecurity tool to protect your business from digital threats and unauthorized access."
  },
  {
    name: "DigiPOS",
    description: "A point of sale system that helps businesses manage sales, inventory, and customer transactions."
  },
  {
    name: "DigiBooking",
    description: "An online booking system for managing appointments, reservations, and event bookings."
  },
  {
    name: "DigiCMS",
    description: "A content management system for creating, managing, and publishing digital content."
  },
  {
    name: "DigiHelpDesk",
    description: "A customer support ticketing system to streamline customer queries and issue resolution."
  },
  {
    name: "DigiEmail",
    description: "An email marketing tool to create, send, and track email campaigns." 
  },
  {
    name: "DigiScheduler",
    description: "A scheduling tool that helps businesses manage appointments and meetings efficiently."
  }
];

function ProductCard({ product }) {
  const handleLearnMore = () => {
    window.open(`https://www.google.com/search?q=${product.name}`, '_blank');
  };

  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <button onClick={handleLearnMore}>Learn More</button>
    </div>
  );
}

export default function Products() {
  return (
    <div className="products-container">
      
    <div className="products-container" style={{ paddingTop: '1300px', backgroundColor: '#fff', color: '#000' }}>
      <h1 className="title">Our Products</h1>
      <div className="product-grid" style={{ gap: '2rem' }}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      </div>
    </div>
  );
}
