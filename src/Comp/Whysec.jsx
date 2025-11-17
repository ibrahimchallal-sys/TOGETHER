import React from 'react';
import './Whysec.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Whysec = () => {
    useScrollAnimation();
    // Reorganized the features array for better flow and logical grouping
    const features = [
        {
            id: 3,
            title: "Easy Setup",
            icon: "fas fa-bolt",
            description: "Start selling in minutes with our simple and intuitive platform setup"
        },
        {
            id: 5,
            title: "Analytics Dashboard",
            icon: "fas fa-chart-bar",
            description: "Track your sales, performance, and customer insights with detailed analytics"
        },
        {
            id: 1,
            title: "Global Reach",
            icon: "fas fa-globe",
            description: "Access millions of customers worldwide and expand your business beyond borders"
        },
        {
            id: 2,
            title: "Secure Payments",
            icon: "fas fa-shield-alt",
            description: "Get paid safely and securely with our advanced payment protection system"
        },
        {
            id: 6,
            title: "Marketing Tools",
            icon: "fas fa-bullhorn",
            description: "Promote your products with built-in marketing tools and promotional features"
        },
    ];

    // Function to determine the card class based on title
    const getCardClass = (index, title) => {
        const baseClass = `feature-card fade-in stagger-${index + 1}`;
        
        // Make "Analytics Dashboard" and "Marketing Tools" centered
        if (title === "Analytics Dashboard" || title === "Marketing Tools") {
            return `${baseClass} centered-card`;
        }
        
        // All other cards use the base class for uniform styling
        return baseClass;
    };

    return(
        <div className="WHYSEC">
            <h1 className="fade-in">Why Choose Our Platform?</h1>
            <p className="section-subtitle fade-in">Everything you need to succeed in the digital marketplace</p>
            <div className="features-container">
                {features.map((feature, index) => (
                    <div 
                        className={getCardClass(index, feature.title)} 
                        key={feature.id}
                    >
                        <div className="card-icon">
                            <i className={feature.icon}></i>
                        </div>
                        <h3 className="card-title">{feature.title}</h3>
                        <p className="card-description">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};
export default Whysec;