import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Home.css'; 
import image1 from '../images/distance.jpeg';
import image2 from '../images/time.jpg';
import image3 from '../images/payment.jpg';

const Home = () => {
    const handleScroll = () => {
        const sections = document.querySelectorAll('.section');
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight - 100) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="home-container">
            <div className="hero-section text-center">
                <h1>There's a Ride for Everyone</h1>
                <h2>For Any Budget</h2>
                <p>
                    From Bikes and Autos to Prime Sedans and Prime SUVs, you will find a ride in your budget at your convenience any time.
                </p>
                <Button variant="outline-success" className="custom-button">
                    <Link to ="BookRide" className="">Book A Ride</Link>
                </Button>
            </div>
            <div className="section">
                <div className="text-container">
                    <h2>For Any Distance</h2>
                    <p>
                        Book rides within the city with Daily, or take a trip to your favourite destinations outside the city with Outstation.
                    </p>
                </div>
                <img src={image1} alt="Ride Distance" className="section-image" />
            </div>
            <div className="section">
                <img src={image2} alt="Ride Duration" className="section-image" />
                <div className="text-container">
                    <h2>For Any Duration</h2>
                    <p>
                        Easily plan a day out without having to worry about conveyance with an hour-based package from Rental.
                    </p>
                </div>
            </div>
            <div className="section section-reverse">
                <div className="text-container">
                    <h2>Experience the Smarter Way to Pay</h2>
                    <p>Trusted by 40 lakh+ users</p>
                    <p>Buy now, pay later for all spends once a month</p>
                    <ul>
                        <li>Credit limit up to ₹100,000</li>
                        <li>Buy now, pay after 30 days</li>
                        <li>Shop across 20,000 apps</li>
                    </ul>
                </div>
                <img src={image3} alt="Payment Experience" className="section-image" />
            </div>
            <div className="section">
                <div className="text-container">
                    <h2>Download Our Apps to Get the Best Experience</h2>
                    <Button claa variant="primary" className="me-2">sheRide</Button>
                    <Button variant="primary">sheRide Driver</Button>
                </div>
            </div>
        </div>
    );
};

export default Home;
