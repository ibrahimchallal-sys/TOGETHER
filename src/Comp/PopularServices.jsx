import React, { useEffect, useState, useCallback } from 'react';
import './PopularServices.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const PopularServices = () => {
  useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  
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

  // Update items per slide based on screen size
  const updateItemsPerSlide = useCallback(() => {
    if (window.innerWidth < 768) {
      setItemsPerSlide(1);
    } else if (window.innerWidth < 1024) {
      setItemsPerSlide(2);
    } else {
      setItemsPerSlide(3);
    }
  }, []);

  useEffect(() => {
    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, [updateItemsPerSlide]);

  // Calculate total slides
  const totalSlides = Math.ceil(services.length / itemsPerSlide);

  // Function to go to next slide
  const nextSlide = () => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  // Function to go to previous slide
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

  // Function to go to a specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="popular-services">
      <div className="container">
        <div className="section-header fade-in">
          <h2>Popular Services</h2>
          <p>Discover the most in-demand digital services and products</p>
        </div>
        
        <div className="carousel-container">
          <div className="carousel-wrapper">
            <div 
              className="carousel-slide" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                const startIndex = slideIndex * itemsPerSlide;
                const endIndex = startIndex + itemsPerSlide;
                const slideServices = services.slice(startIndex, endIndex);
                
                return (
                  <div key={slideIndex} className="carousel-item">
                    <div className="services-grid">
                      {slideServices.map((service) => (
                        <div key={service.id} className="service-card scale-in stagger-1">
                          <div className="service-icon">
                            <i className={service.icon}></i>
                          </div>
                          <h3 className="service-title">{service.title}</h3>
                          <p className="service-description">{service.description}</p>
                          <div className="service-price">{service.price}</div>
                          <div className="service-stats">
                            <div className="rating">
                              <span className="stars"><i id='star' className="fa-solid fa-star"></i></span>
                              <span>{service.rating}</span>
                            </div>
                            <div className="orders">{service.orders}</div>
                          </div>
                          <button className="service-btn">View Services</button>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            className={`carousel-arrow carousel-arrow-prev ${currentIndex === 0 ? 'disabled' : ''}`} 
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            &#10094;
          </button>
          <button 
            className={`carousel-arrow carousel-arrow-next ${currentIndex === totalSlides - 1 ? 'disabled' : ''}`} 
            onClick={nextSlide}
            disabled={currentIndex === totalSlides - 1}
          >
            &#10095;
          </button>
          
          {/* Dots Indicator */}
          <div className="carousel-dots">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularServices;