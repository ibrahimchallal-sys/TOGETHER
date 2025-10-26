import React, { useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Services.css';

const Services = () => {
  useScrollAnimation();

  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom websites built with cutting-edge technologies. We create responsive, fast-loading sites optimized for all devices and search engines.",
      iconClass: "fas fa-laptop-code",
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android devices.",
      iconClass: "fas fa-mobile-alt",
    },
    {
      id: 3,
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns that drive traffic, generate leads, and increase conversions for your business.",
      iconClass: "fas fa-chart-line",
    },
    {
      id: 4,
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance user satisfaction by improving usability, accessibility, and interaction with your product.",
      iconClass: "fas fa-paint-brush",
    },
    {
      id: 5,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services that optimize performance, security, and cost-efficiency for your business.",
      iconClass: "fas fa-cloud",
    },
    {
      id: 6,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence and machine learning algorithms to automate processes and gain insights.",
      iconClass: "fas fa-robot",
    },
    {
      id: 7,
      title: "Content Writing",
      description: "Professional content creation services including blog posts, articles, copywriting, and technical documentation.",
      iconClass: "fas fa-edit",
    },
    {
      id: 8,
      title: "Video Production",
      description: "High-quality video production services including animation, editing, and promotional videos for your brand.",
      iconClass: "fas fa-video",
    },
      {
      id: 8,
      title: "Online Courses",
      description: "Expertly crafted online courses designed to elevate your skills and advance your career.",
      iconClass: "fas fa-graduation-cap",
    }
  ];

  return (
    <div className="services-container">
      <div className="services-header fade-in">
        <h1>Our Digital Services</h1>
        <p>Transforming businesses through innovative digital solutions</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div 
            key={service.id} 
            className={`service-card ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
          >
            <div className="service-icon">
              <i className={service.iconClass}></i>
            </div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <div className="service-features">

            </div>
            <div className="service-buttons">
              <button className="learn-more-btn">Learn More</button>
              <button className="view-sellers-btn">View Sellers</button>
            </div>
          </div>
        ))}
      </div>

      <div className="services-cta">
        <h2>Ready to transform your business?</h2>
        <p>Contact us today to discuss how our services can help you achieve your goals.</p>
        <button className="contact-btn">Start Your first Buisness</button>
      </div>
    </div>
  );
};

export default Services;