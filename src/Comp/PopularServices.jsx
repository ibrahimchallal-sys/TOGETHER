import React, { useEffect } from 'react';
import './PopularServices.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const PopularServices = () => {
  useScrollAnimation();
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom websites, e-commerce solutions, and web applications",
      icon: "fas fa-code",
      price: "Starting at $500",
      rating: 4.9,
      orders: "2.5k+ orders"
    },
    {
      id: 2,
      title: "Digital Marketing",
      description: "SEO, social media management, and advertising campaigns",
      icon: "fas fa-chart-line",
      price: "Starting at $300",
      rating: 4.8,
      orders: "1.8k+ orders"
    },
    {
      id: 3,
      title: "Graphic Design",
      description: "Logos, branding, and visual identity packages",
      icon: "fas fa-palette",
      price: "Starting at $150",
      rating: 4.9,
      orders: "3.2k+ orders"
    },
    {
      id: 4,
      title: "Content Writing",
      description: "Blog posts, copywriting, and content strategy",
      icon: "fas fa-pen-fancy",
      price: "Starting at $50",
      rating: 4.7,
      orders: "4.1k+ orders"
    },
    {
      id: 5,
      title: "Video Editing",
      description: "Professional video production and post-production",
      icon: "fas fa-video",
      price: "Starting at $200",
      rating: 4.8,
      orders: "1.5k+ orders"
    },
    {
      id: 6,
      title: "Online Courses",
      description: "Educational content and training programs",
      icon: "fas fa-graduation-cap",
      price: "Starting at $100",
      rating: 4.9,
      orders: "2.8k+ orders"
    }
  ];

  return (
    <section className="popular-services">
      <div className="container">
        <div className="section-header fade-in">
          <h2>Popular Services</h2>
          <p>Discover the most in-demand digital services and products</p>
        </div>
        
        <div style={{ marginBottom: '50px' }} className="services-grid">
          {services.map((service, index) => (
            <div key={service.id} className={`service-card scale-in stagger-${index + 1}`}>
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-price">{service.price}</div>
              <div className="service-stats">
                <div className="rating">
                  <span className="stars"><i id='star' class="fa-solid fa-star"></i></span>
                  <span>{service.rating}</span>
                </div>
                <div className="orders">{service.orders}</div>
              </div>
              <button className="service-btn">View Services</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularServices;
