import React from "react";
import './about.css';

const AboutUs = () => {
    return (
        <div className="about_1-container">
            <section className="about_1-intro">
                <div className="about_1-intro_content">
                    <h1>India's Beloved Ride Sharing Service</h1>
                    <p className="about_1-intro_tagline">We are not an option, we are a choice</p>
                    <p className="about_1-intro_description">
                        We're the #1 choice of millions of people because we're the solution to India's intra-city commuting problems. 
                        With assured safety, we also provide economically priced rides.
                    </p>
                </div>
                <div className="about_1-intro_image">
                    <img src="https://st4.depositphotos.com/13754004/20809/i/450/depositphotos_208094792-stock-photo-online-ride-sharing-carpool-mobile.jpg" alt="Ride Sharing" />
                </div>
            </section>

            <section className="about_1-impact">
                <h2>Our Impact</h2>
                <p>
                    Our presence in the country has changed the concept of intra-city travel and made last-mile connectivity affordable for all.
                </p>
                <div className="about_1-impact_stats">
                    <div className="about_1-stat_item">
                        <p><strong>100+</strong> Cities</p>
                    </div>
                    <div className="about_1-stat_item">
                        <p><strong>1M+</strong> RideSharers</p>
                    </div>
                    <div className="about_1-stat_item">
                        <p><strong>10M+</strong> Customers</p>
                    </div>
                </div>
            </section>

            <section className="about_1-services">
                <h3>ShareRide Services in India</h3>
                <p>
                    ShareRide is a full-service transportation company in India. ShareRide's licensed drivers provide reliable transportation services for both commercial and residential needs. 
                    Our on-call drivers are ready to handle any situation, offering the most current and efficient ride solutions for even the latest high-tech transportation requirements. 
                    ShareRide is a certified and bonded transportation provider in India. We not only bring a professional driver to your home or office but also a fully equipped vehicle, ensuring a smooth and timely ride. 
                    With ShareRide’s well-maintained fleet, we guarantee punctual and dependable transportation services throughout India.
                </p>
                <div className="about_1-service_items">
                    <div className="about_1-service_item">
                        <h4>Customer Guarantee</h4>
                        <p>Reliable transportation is what every passenger receives when they choose ShareRide for their travel needs.</p>
                    </div>
                    <div className="about_1-service_item">
                        <h4>24/7 Service</h4>
                        <p>Need a ride? Count on ShareRide for reliable and timely transportation services. Our drivers are punctual and committed to providing guaranteed, top-quality rides.</p>
                    </div>
                    <div className="about_1-service_item">
                        <h4>Insured, Bonded, Licensed</h4>
                        <p>Licensed drivers in fully-equipped vehicles to meet your residential, commercial, and industrial transportation needs.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;
