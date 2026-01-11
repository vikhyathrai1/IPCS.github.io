import React, { useState } from 'react';
import { Calendar, User, ArrowRight, ArrowLeft, Image as ImageIcon } from 'lucide-react';

import blog1 from '../assets/blog1_new.png';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3_new.png';
import blog4 from '../assets/blog4_new.png';
import blog5 from '../assets/blog5_new.png';
import blog6 from '../assets/blog6.jpg';

const blogData = [
    {
        id: 1,
        title: "Pre Construction Termite Control",
        category: "Termite Control",
        date: "Jan 15, 2026",
        author: "IPCS Expert",
        image: blog1,
        excerpt: "Termites are one of the most destructive pests. The most effective way to protect a building is to address the problem before construction begins.",
        content: `
            <p style="margin-bottom: 2.5rem">Termites are one of the most destructive pests, and the damage they cause often goes unnoticed for years. The most effective way to protect a building from termites is to address the problem before construction even begins. <strong>Pre construction termite control is a preventive treatment carried out at the soil level to stop termites from entering the structure in the future.</strong></p>
            
            <p style="margin-bottom: 2.5rem">This treatment is done before the foundation is laid. The soil in and around the foundation area is treated with approved anti termite chemicals. These chemicals create a continuous protective barrier between the ground and the building. When termites try to move from the soil into the structure, the barrier blocks them and eliminates the risk of infestation.</p>
            
            <p style="margin-bottom: 2.5rem"><strong>In cities like Hyderabad</strong>, termite activity is common due to favorable soil and weather conditions. Once a building is completed, termites can hide inside walls, wooden doors, cupboards, and flooring. By the time signs such as hollow wood or mud tubes appear, the damage is usually extensive and costly to repair.</p>
            
            <p style="margin-bottom: 2.5rem">Pre construction termite control is not only more reliable than post construction treatments, it is also more cost effective. Since the treatment is applied in an open site, it allows complete coverage without drilling or damage to finished surfaces. This ensures long term protection without disturbing daily life later.</p>
            
            <p style="margin-bottom: 2.5rem">At <strong>Industrial Pest Control Services</strong>, we begin with a detailed site inspection to understand the soil condition and construction plan. Our experienced technicians apply the treatment in stages, following industry standards and safety guidelines. The correct dosage and method are used to ensure durability and effectiveness. After completion, a service certificate is provided for assurance and future reference.</p>
            
            <p style="margin-bottom: 2.5rem">Whether you are building a home, apartment, office, or commercial property, pre construction termite control is a critical step. Investing in prevention at the right time protects your property, saves money, and gives lasting peace of mind.</p>
        `
    },
    {
        id: 2,
        title: "Hotel and Kitchen Pest Control",
        category: "Commercial Services",
        date: "Jan 12, 2026",
        author: "IPCS Expert",
        image: blog2,
        excerpt: "Hotels, restaurants, and commercial kitchens face a constant risk from pests. Regular and planned pest control is essential for hygiene and reputation.",
        content: `
            <p style="margin-bottom: 2.5rem">Hotels, restaurants, and commercial kitchens face a constant risk from pests. Cockroaches, rodents, flies, and mosquitoes are not just unpleasant, they are serious hygiene and health concerns. <strong>In Hyderabad, food establishments are expected to maintain strict cleanliness standards to comply with GHMC regulations and routine inspections.</strong></p>

            <p style="margin-bottom: 2.5rem">Pests are attracted to kitchens because of food, moisture, and warmth. Even a small lapse in cleaning or waste disposal can lead to infestations. Once pests settle in, they multiply quickly and become difficult to control with one time treatments. This is why regular and planned pest control is essential for hotels and kitchens.</p>

            <p style="margin-bottom: 2.5rem">Professional pest control focuses on prevention as much as treatment. Areas like drains, storage rooms, false ceilings, pantry corners, and waste disposal zones need special attention. Treatments must be effective but also safe for food handling areas and staff. Strong smelling or unsafe chemicals can disrupt operations and put customers at risk.</p>

            <p style="margin-bottom: 2.5rem"><strong>At Industrial Pest Control Services, we understand the daily realities of running hotels and kitchens in Hyderabad with decades of experiences servicing multiple groups of hotels.</strong> We follow a structured inspection process and identify high risk zones before starting treatment. Our trained technicians use approved chemicals that are safe for commercial environments when applied correctly. Treatments are scheduled at convenient times to avoid disruption to kitchen operations.</p>

            <p style="margin-bottom: 2.5rem">Regular service reports and guidance are provided to help maintain hygiene standards over time. We also educate staff on simple preventive measures that reduce pest activity between service visits.</p>

            <p style="margin-bottom: 2.5rem">For hotels, cloud kitchens, bakeries, and commercial food establishments, pest control is not optional. It is a responsibility. With the right service partner and consistent maintenance, you can stay compliant, protect your reputation, and provide a safe environment for your customers and staff.</p>
        `
    },
    {
        id: 3,
        title: "Office Pest Control Services",
        category: "Commercial Services",
        date: "Jan 08, 2026",
        author: "IPCS Expert",
        image: blog3,
        excerpt: "Modern offices may look clean, but they are not immune to pests. Pest control in offices needs a different approach focused on safety and non-disruption.",
        content: `
            <p style="margin-bottom: 2.5rem">Modern offices and software companies may look clean on the surface, but they are not immune to pest problems. <strong>In Hyderabad, large office spaces, IT parks, and corporate buildings often deal with issues like cockroaches, mosquitoes, rodents, and ants.</strong> Air conditioned environments, pantry areas, false ceilings, and server rooms can quietly become ideal hiding spots for pests.</p>

            <p style="margin-bottom: 2.5rem">Pest control in offices needs a different approach compared to homes or factories. Treatments must be effective without causing disruption to employees or daily work. Strong odors, visible residues, or noisy processes can affect productivity and comfort. Safety is also critical, especially in spaces where hundreds of people work every day.</p>

            <p style="margin-bottom: 2.5rem">Professional office pest control focuses on targeted treatment rather than heavy spraying. High risk areas such as pantries, washrooms, storage rooms, and entry points are treated carefully. Rodent control is especially important in offices, as damage to cables and equipment can lead to serious operational issues.</p>

            <p style="margin-bottom: 2.5rem"><strong>At Industrial Pest Control Services, we have extensive experience working with software companies and corporate offices across Hyderabad.</strong> We conduct a detailed site inspection to understand the layout, working hours, and sensitive areas. Treatments are planned during non working hours or weekends to ensure zero disturbance. Odorless and approved chemicals are used to maintain a safe and comfortable environment.</p>

            <p style="margin-bottom: 2.5rem">Regular service schedules help prevent recurring infestations and ensure long term protection. We also provide reports and basic preventive guidance to facility teams.</p>

            <p style="margin-bottom: 2.5rem">A pest free office is not just about cleanliness. It directly impacts employee comfort, safety, and business continuity. With the right pest control partner, offices can remain productive, hygienic, and stress free.</p>
        `
    },
    {
        id: 4,
        title: "Warehouse and Industrial Pest Control",
        category: "Industrial Services",
        date: "Jan 05, 2026",
        author: "IPCS Expert",
        image: blog4,
        excerpt: "Warehouses and industrial facilities face unique pest control challenges. Effective warehouse pest control requires a planned and systematic approach.",
        content: `
            <p style="margin-bottom: 2.5rem">Warehouses and industrial facilities face unique pest control challenges. Large open spaces, constant movement of goods, and long storage periods make these locations highly vulnerable to rodents, insects, and stored product pests. <strong>In Hyderabad, warehouses that handle food items, raw materials, packaging, or finished goods must be especially careful to prevent contamination and loss.</strong></p>

            <p style="margin-bottom: 2.5rem">Rodents are one of the biggest threats in warehouses. They damage cartons, chew through wiring, and contaminate stored goods. Insects such as beetles and moths can infest packaging and spread quickly across storage areas. Once pests establish themselves, the impact is not just financial but also operational and reputational.</p>

            <p style="margin-bottom: 2.5rem">Effective warehouse pest control requires a planned and systematic approach. One time treatments are rarely sufficient. Entry points, loading bays, perimeter areas, drains, and storage racks must be regularly monitored and treated. Preventive measures play a major role in keeping pest activity under control.</p>

            <p style="margin-bottom: 2.5rem"><strong>At Industrial Pest Control Services, we begin with a thorough inspection of the warehouse or industrial site.</strong> We study movement patterns, storage practices, and high risk zones before designing a treatment plan. Our trained technicians use approved methods that are suitable for large scale environments without affecting goods or daily operations. Special focus is given to rodent control, perimeter protection, and long term prevention.</p>

            <p style="margin-bottom: 2.5rem">We provide regular service schedules, monitoring, and clear reporting to ensure consistent results. <strong>Our experience across different industries in Hyderabad allows us to adapt our approach to each facility.</strong></p>

            <p style="margin-bottom: 2.5rem">For warehouses and industrial units, pest control is an essential part of asset protection. A well maintained pest management program helps safeguard inventory, maintain compliance, and ensure smooth operations.</p>
        `
    },
    {
        id: 5,
        title: "Domestic Household Pest Control",
        category: "Residential Services",
        date: "Dec 28, 2025",
        author: "IPCS Expert",
        image: blog5,
        excerpt: "Pest problems in homes are more common than most people realize. Home pest control needs a careful and balanced approach focused on safety.",
        content: `
            <p style="margin-bottom: 2.5rem">Pest problems in homes are more common than most people realize. Cockroaches in kitchens, mosquitoes in bedrooms, ants in storage areas, and rodents in false ceilings can quickly turn a comfortable home into a stressful space. <strong>In Hyderabad, changing weather conditions and dense residential areas make household pest issues a regular concern.</strong></p>

            <p style="margin-bottom: 2.5rem">Home pest control needs a careful and balanced approach. Treatments must be effective, but also safe for families, children, and pets. Many people try store bought sprays or quick fixes, but these usually provide only temporary relief. Without addressing the root cause, pests return again and again.</p>

            <p style="margin-bottom: 2.5rem">Professional household pest control focuses on identifying where pests enter, hide, and breed. Areas such as kitchens, bathrooms, drains, balconies, and storage spaces are carefully inspected. The right treatment method is selected based on the type of pest and level of infestation. This ensures better results with minimal chemical exposure.</p>

            <p style="margin-bottom: 2.5rem"><strong>At Industrial Pest Control Services, we understand that every home is different.</strong> Our technicians carry out a detailed inspection before starting treatment. We use approved chemicals in the correct dosage to ensure safety and effectiveness. Treatments are carried out with care, keeping daily routines and comfort in mind.</p>

            <p style="margin-bottom: 2.5rem"><strong>We also guide homeowners on simple preventive steps such as proper waste disposal, reducing moisture, and sealing small gaps. These small actions make a big difference in keeping pests away between service visits as this is a shared responsibility.</strong></p>

            <p style="margin-bottom: 2.5rem">A pest free home is essential for health and peace of mind. With the right treatment and ongoing prevention, households in Hyderabad can stay protected throughout the year.</p>
        `
    },
    {
        id: 6,
        title: "Pest Prevention Is a Shared Responsibility",
        category: "Partnership & Education",
        date: "Dec 15, 2025",
        author: "IPCS Expert",
        image: blog6,
        excerpt: "Pest control does not end with a single treatment. Long term pest prevention is a shared responsibility between the service provider and the customer.",
        content: `
            <p style="margin-bottom: 2.5rem">Pest control does not end with a single treatment. Long term pest prevention is a shared responsibility between the service provider and the customer. <strong>While professional treatments play a crucial role, daily habits and maintenance also determine how effective pest control will be over time.</strong></p>

            <p style="margin-bottom: 2.5rem">Pests are attracted to food, water, and shelter. Even after a thorough treatment, issues like uncovered food, leaking pipes, open drains, or cluttered storage areas can invite pests back. In homes and commercial spaces across Hyderabad, many recurring pest problems are caused by small gaps in cleanliness and maintenance rather than treatment failure.</p>

            <p style="margin-bottom: 2.5rem">Professional pest control focuses on eliminating existing infestations and creating protective barriers. However, prevention works best when customers follow basic hygiene and upkeep practices. Simple steps such as regular waste disposal, cleaning pantry areas, fixing water leakage, and sealing cracks around doors and windows significantly reduce pest activity.</p>

            <p style="margin-bottom: 2.5rem"><strong>At Industrial Pest Control Services, we believe in educating our customers along with providing treatment.</strong> During service visits, our technicians explain high risk areas and suggest practical preventive measures. This partnership approach helps maintain results and reduces the need for frequent chemical applications.</p>

            <p style="margin-bottom: 2.5rem">In commercial spaces like hotels, offices, and warehouses, staff cooperation is especially important. Proper storage, timely cleaning, and reporting early signs of pest activity make pest control programs more effective and sustainable.</p>

            <p style="margin-bottom: 2.5rem">Pest prevention is most successful when both sides work together. With professional treatment and responsible maintenance, properties remain cleaner, safer, and pest free for longer periods. This shared approach not only improves results but also creates healthier living and working environments across Hyderabad.</p>
        `
    }
];

const Blog = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    // Scroll to top when opening a post or going back
    const handleViewPost = (post) => {
        setSelectedPost(post);
        window.scrollTo(0, 0);
    };

    const handleBack = () => {
        setSelectedPost(null);
        window.scrollTo(0, 0);
    };

    if (selectedPost) {
        return (
            <div className="section" style={{ minHeight: '80vh', paddingTop: 'calc(var(--header-height) + 0.5rem)' }}>
                <div className="container">
                    <article className="blog-detail fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <button
                            onClick={handleBack}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                background: 'none',
                                border: 'none',
                                color: 'var(--color-primary)',
                                fontWeight: 600,
                                cursor: 'pointer',
                                marginBottom: '1.5rem',
                                fontSize: '0.9rem',
                                padding: 0
                            }}
                        >
                            <ArrowLeft size={18} /> Back to Articles
                        </button>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <span style={{
                                background: 'var(--color-bg-off-white)',
                                padding: '0.4rem 0.8rem',
                                borderRadius: '50px',
                                color: 'var(--color-primary)',
                                fontWeight: 700,
                                fontSize: '0.85rem'
                            }}>
                                {selectedPost.category}
                            </span>
                        </div>

                        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '1rem', lineHeight: 1.2 }}>
                            {selectedPost.title}
                        </h1>

                        <div style={{ display: 'flex', gap: '2rem', color: '#718096', marginBottom: '2rem', fontSize: '0.95rem' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={18} /> {selectedPost.date}</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><User size={18} /> {selectedPost.author}</span>
                        </div>

                        {/* Detail View Image */}
                        <div style={{
                            width: '100%',
                            height: 'auto',
                            maxHeight: '500px',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            marginBottom: '3rem',
                            boxShadow: '0 10px 15px rgba(0,0,0,0.1)'
                        }}>
                            <img
                                src={selectedPost.image}
                                alt={selectedPost.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    maxHeight: '500px',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>

                        <div
                            className="blog-content"
                            style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#2D3748' }}
                            dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                        />
                    </article>
                </div>
            </div>
        );
    }

    return (
        <div className="section" style={{ minHeight: '80vh', paddingTop: 'calc(var(--header-height) + 0.5rem)' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h1 className="text-primary" style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 800 }}>Knowledge Hub</h1>
                    <p className="text-secondary" style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
                        Expert insights, safety tips, and industry updates from Hyderabad's leading pest control specialists.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {blogData.map((post) => (
                        <div
                            key={post.id}
                            onClick={() => handleViewPost(post)}
                            style={{
                                background: 'white',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                                border: '1px solid var(--color-border)',
                                transition: 'all 0.2s',
                                display: 'flex',
                                flexDirection: 'column',
                                cursor: 'pointer'
                            }}
                            className="hover-card"
                        >
                            {/* Card Image */}
                            <div style={{
                                width: '100%',
                                height: '220px',
                                borderBottom: '1px solid #E2E8F0',
                                overflow: 'hidden'
                            }}>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.3s'
                                    }}
                                />
                            </div>

                            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.85rem', color: '#718096' }}>
                                    <span style={{
                                        background: 'var(--color-bg-off-white)',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '50px',
                                        color: 'var(--color-primary)',
                                        fontWeight: 600
                                    }}>
                                        {post.category}
                                    </span>
                                </div>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    marginBottom: '1rem',
                                    color: 'var(--color-primary)',
                                    fontWeight: 700,
                                    lineHeight: 1.4
                                }}>
                                    {post.title}
                                </h3>
                                <p style={{ color: '#4A5568', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>
                                    {post.excerpt}
                                </p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid #E2E8F0' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#4A5568' }}>
                                        <Calendar size={14} /> {post.date}
                                    </span>
                                    <span style={{
                                        color: 'var(--color-primary)',
                                        fontWeight: 600,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.25rem'
                                    }}>
                                        Read Full Article <ArrowRight size={16} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
