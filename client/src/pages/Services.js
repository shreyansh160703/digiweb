import React from 'react';
import "../pages/Services.css";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const services = [
  {
    title: 'Web Development',
    description: 'We build responsive, high-performance websites tailored to your business needs.',
    image: '/images/webdevelopment.jpg',
    details: 'Our web development services include front-end and back-end development, ensuring seamless user experiences and robust functionality. We specialize in creating websites using the latest technologies such as React, Node.js, and MongoDB. Our solutions are optimized for performance, SEO, and user-friendliness, making your business stand out in the digital world. We also offer maintenance and support services to ensure your website runs smoothly.'
  },
  {
    title: 'UI/UX Design',
    description: 'Crafting intuitive and visually appealing user interfaces with modern design tools.',
    image: '/images/design.jpg',
    details: 'Our UI/UX design services focus on creating user-friendly interfaces that enhance customer satisfaction and engagement. We conduct thorough research and wireframing to design visually stunning and easy-to-navigate user interfaces. Our team ensures that every design aligns with your brand identity and business goals, resulting in an optimized user experience that boosts customer retention.'
  },
  {
    title: 'SEO Optimization',
    description: "Boost your website's visibility on search engines with our expert SEO services.",
    image: '/images/seo.jpg',
    details: 'We use the latest SEO techniques to improve search engine rankings and increase organic traffic to your website. Our services include keyword research, on-page optimization, link building, and technical SEO audits. We also provide content strategy and performance tracking to ensure long-term SEO success and better visibility in search engines.'
  },
  {
    title: 'Mobile App Development',
    description: 'Developing cross-platform mobile apps with seamless performance.',
    image: '/images/mad.jpg',
    details: 'Our mobile app development services cater to both iOS and Android platforms, ensuring high performance and user satisfaction. We use modern frameworks like React Native and Flutter to build cross-platform applications. Our apps are designed with user experience in mind, featuring intuitive interfaces, secure payment integrations, and real-time data synchronization.'
  },
  {
    title: 'Cloud Solutions',
    description: 'Providing scalable and secure cloud services to optimize your business.',
    image: '/images/cloud.jpg',
    details: 'Our cloud solutions include cloud migration, storage, and infrastructure management tailored to your business needs. We offer secure cloud storage, automated backups, and server management services. Our team helps businesses leverage cloud technology to improve operational efficiency, scalability, and data security.'
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Creating powerful e-commerce platforms to elevate your online business.',
    image: '/images/ecom.jpg',
    details: 'We develop custom e-commerce solutions with secure payment gateways, product management, and seamless user experiences. Our e-commerce platforms support multi-vendor systems, product catalogs, shopping cart integration, and order tracking. We ensure that your e-commerce website is optimized for performance, security, and scalability.'
  },
  {
    title: 'Digital Marketing',
    description: 'Helping you reach your target audience with effective digital marketing strategies.',
    image: '/images/seo.jpg',
    details: 'Our digital marketing services include social media marketing, pay-per-click advertising, and email campaigns. We create tailored marketing strategies that align with your business goals, driving more traffic and conversions. Our services also include performance analysis and continuous optimization to maximize your return on investment.'
  },
  {
    title: 'Custom Software Development',
    description: 'Building tailor-made software solutions to meet your unique business requirements.',
    image: '/images/cyber.jpg',
    details: 'We create custom software applications that align with your business processes and enhance productivity. Our software solutions range from enterprise applications to small business tools. We follow agile methodologies to deliver scalable, secure, and efficient software that meets your specific requirements.'
  }
];

export default function Services() {
  return (
    <div className="services-container" style={{ paddingTop: '3750px', backgroundColor: '#fff', color: '#000' }}>
      <h1 className="title">Our Services</h1>
      <div className="flex flex-col gap-32">
        {services.map((service, index) => (
          <div className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} items-center gap-10`} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="w-1/2 overflow-hidden shadow-lg rounded-2xl cursor-pointer"
              onClick={() => window.open(`https://www.google.com/search?q=${service.title}`, '_blank')}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full object-cover h-64"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                <p className="text-lg text-justify">{service.description}</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="w-1/2 p-6"
            >
              <h2 className="text-2xl font-semibold mb-6">{service.title} Information</h2>
              <p className="text-lg text-justify">{service.details}</p>
            </motion.div>
          </div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <Link to="/contact">
          <button className="px-6 py-3 text-xl font-bold bg-white text-black border-2 border-black rounded-lg shadow-md hover:bg-black hover:text-white transition-all duration-300">
            Book Your Service
          </button>
        </Link>
      </motion.div>

    </div>
  );
}
