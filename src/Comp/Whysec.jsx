import React from 'react';
import './Whysec.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Whysec = () => {
    useScrollAnimation();
    const features = [
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
            id: 3,
            title: "Easy Setup",
            icon: "fas fa-bolt",
            description: "Start selling in minutes with our simple and intuitive platform setup"
        },
        {
            id: 4,
            title: "24/7 Support",
            icon: "fas fa-headset",
            description: "Round-the-clock customer support to help you succeed in your business"
        },
        {
            id: 5,
            title: "Analytics Dashboard",
            icon: "fas fa-chart-bar",
            description: "Track your sales, performance, and customer insights with detailed analytics"
        },
        {
            id: 6,
            title: "Marketing Tools",
            icon: "fas fa-bullhorn",
            description: "Promote your products with built-in marketing tools and promotional features"
        }
    ];

    return(
        <div className="WHYSEC">
            <h1 className="fade-in">Why Choose Our Platform?</h1>
            <p className="section-subtitle fade-in">Everything you need to succeed in the digital marketplace</p>
            <div className="features-container">
                {features.map((feature, index) => (
                    <div className={`feature-card fade-in stagger-${index + 1}`} key={feature.id}>
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