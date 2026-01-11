import React from 'react';
import Hero from '../components/Hero';
import TrustPillars from '../components/TrustPillars';
import ERDStrategy from '../components/ERDStrategy';
import ClientCarousel from '../components/ClientCarousel';
import { Quote } from 'lucide-react';

const Testimonials = () => (
    <section className="section bg-off-white">
        <div className="container">
            <div className="text-center" style={{ marginBottom: '4rem' }}>
                <h2 className="section-title">What Our Clients Say</h2>
                <p className="section-subtitle">Real feedback from our partners</p>
            </div>
            <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {[
                    {
                        quote: "As a hotel, guest experience is everything. IPCS has been our partner for 15 years, ensuring our kitchen and rooms are spotless. Their team is discreet, professional, and always compliant with food safety audits.",
                        name: "General Manager",
                        role: "Luxury Hotel, Banjara Hills"
                    },
                    {
                        quote: "We have thousands of employees working round the clock. IPCS manages our pest control without any disruption to our operations. Their odorless treatments and weekend schedules work perfectly for our IT campus.",
                        name: "Facilities Director",
                        role: "MNC Tech Park, Hitech City"
                    },
                    {
                        quote: "I was worried about chemicals because of my kids and pets. The IPCS team was so patient, explained the safety measures, and solved our termite problem completely. It feels great to have a safe and pest-free home.",
                        name: "Mrs. Anjali Rao",
                        role: "Homeowner, Jubilee Hills"
                    }
                ].map((testimonial, i) => (
                    <div key={i} className="card" style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                        <Quote size={32} className="text-primary" style={{ marginBottom: '1rem', opacity: 0.5 }} />
                        <p style={{ marginBottom: '1.5rem', fontStyle: 'italic', color: '#4A5568', lineHeight: '1.6' }}>
                            "{testimonial.quote}"
                        </p>
                        <div className="author">
                            <strong style={{ display: 'block', color: '#002B5B', marginBottom: '0.2rem' }}>{testimonial.name}</strong>
                            <span style={{ fontSize: '0.9rem', color: '#718096' }}>{testimonial.role}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Home = () => {
    return (
        <>
            <Hero />
            <TrustPillars />
            <ERDStrategy />
            <ClientCarousel />
            <Testimonials />
        </>
    );
};

export default Home;
