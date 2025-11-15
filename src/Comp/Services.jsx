import React from 'react';
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
      features: ["Responsive Design", "SEO Optimization", "Performance Tuning"]
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android devices.",
      iconClass: "fas fa-mobile-alt",
      features: ["iOS & Android", "Cross-Platform", "App Store Deployment"]
    },
    {
      id: 3,
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns that drive traffic, generate leads, and increase conversions for your business.",
      iconClass: "fas fa-chart-line",
      features: ["SEO & SEM", "Social Media", "Email Campaigns"]
    },
    {
      id: 4,
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance user satisfaction by improving usability, accessibility, and interaction with your product.",
      iconClass: "fas fa-paint-brush",
      features: ["Wireframing", "Prototyping", "User Testing"]
    },
    {
      id: 5,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services that optimize performance, security, and cost-efficiency for your business.",
      iconClass: "fas fa-cloud",
      features: ["Infrastructure", "Migration", "Security"]
    },
    {
      id: 6,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence and machine learning algorithms to automate processes and gain insights.",
      iconClass: "fas fa-robot",
      features: ["Predictive Analytics", "Automation", "NLP Processing"]
    },
    {
      id: 7,
      title: "Content Writing",
      description: "Professional content creation services including blog posts, articles, copywriting, and technical documentation.",
      iconClass: "fas fa-edit",
      features: ["Copywriting", "Technical Docs", "SEO Content"]
    },
    {
      id: 8,
      title: "Video Production",
      description: "High-quality video production services including animation, editing, and promotional videos for your brand.",
      iconClass: "fas fa-video",
      features: ["Animation", "Editing", "Promotional Videos"]
    },
    {
      id: 9,
      title: "Online Courses",
      description: "Expertly crafted online courses designed to elevate your skills and advance your career.",
      iconClass: "fas fa-graduation-cap",
      features: ["Course Creation", "Interactive Modules", "Assessment Tools"]
    }
  ];

  return (
    <div className="services-container">
      <div className="services-hero">
        <div className="hero-content">
          <h1 className="hero-title fade-in">Our Professional Services</h1>
          <p className="hero-subtitle fade-in">Comprehensive digital solutions tailored to your business needs</p>
        </div>
      </div>

      <div className="services-intro fade-in">
        <h2>Elevate Your Business with Expert Solutions</h2>
        <p>We combine innovation, expertise, and strategic thinking to deliver results that matter. Our team of specialists works closely with you to understand your unique challenges and craft customized solutions that drive growth.</p>
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
            <h3>{service.title}</h3>
            <p className="service-description">{service.description}</p>
            
            <div className="service-features">
              <ul>
                {service.features.map((feature, idx) => (
                  <li key={idx} className="feature-item">{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="service-buttons">
              <button className="btn btn-secondary">Learn More</button>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        ))}
      </div>

      <div className="services-cta fade-in">
        <div className="cta-content">
          <h2>Ready to Transform Your Business?</h2>
          <p>Contact us today to discuss how our services can help you achieve your goals and accelerate your growth.</p>
          <button className="btn btn-primary btn-large">Start Now</button>
        </div>
      </div>
    </div>
  );
};

export default Services;