import React from 'react';
const Services = () => {
    return <section id="services" className="diagonal-section" style={{background: "var(--medium-gray)"}}>
    <div className="diagonal-content">
        <div className="container mx-auto px-6">
            <h2 className="section-title text-center">OUR SERVICES</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="floating-card text-center">
                    <i className="fas fa-drafting-compass text-4xl text-blue-400 mb-4"></i>
                    <h3 className="text-xl font-bold mb-3">Architectural Design</h3>
                    <p className="text-gray-300">Innovative conceptual design and detailed architectural planning</p>
                </div>
                
                <div className="floating-card text-center">
                    <i className="fas fa-hard-hat text-4xl text-blue-400 mb-4"></i>
                    <h3 className="text-xl font-bold mb-3">Construction Management</h3>
                    <p className="text-gray-300">End-to-end project management and quality construction services</p>
                </div>
                
                <div className="floating-card text-center">
                    <i className="fas fa-leaf text-4xl text-blue-400 mb-4"></i>
                    <h3 className="text-xl font-bold mb-3">MEP Drawings</h3>
                    <p className="text-gray-300">Comprehensive technical plans for Mechanical, Electrical, and Plumbing systems, ensuring accurate installation and coordination of building services.</p>
                </div>
                
                <div className="floating-card text-center">
                    <i className="fas fa-home text-4xl text-blue-400 mb-4"></i>
                    <h3 className="text-xl font-bold mb-3">Interior Design</h3>
                    <p className="text-gray-300">Complete interior solutions and space optimization</p>
                </div>
            </div>
        </div>
    </div>
</section>
}
export default Services