import React from 'react'
import { experienceLabel } from './helpers/indes'
const About = () => {
    return <section id="about" className="py-20">
    <div className="container mx-auto px-6">
        <div className="asymmetric-layout">
            <div>
                <h2 className="section-title">WHO WE ARE</h2>
                <div className="space-y-6">
                    <div className="floating-card">
                        <h3 className="text-2xl font-bold mb-3 text-blue-400">Our Story</h3>
                        <p className="text-gray-300">
                            Kaushik Architects & Builders was founded in May 2014, beginning its journey with map approvals, architectural planning, 3D front elevations, interior 3D designs and consultancy services and construction company
                        </p>
                    </div>
                    
                    <div className="floating-card">
                        <h3 className="text-2xl font-bold mb-3 text-blue-400">Vision</h3>
                        <p className="text-gray-300">
                            To revolutionize the architectural landscape by creating iconic structures that seamlessly blend aesthetic brilliance with functional excellence.
                        </p>
                    </div>
                    
                    {/* <div className="floating-card">
                        <h3 className="text-2xl font-bold mb-3 text-blue-400">Mission</h3>
                        <p className="text-gray-300">
                            Delivering world-className architectural solutions through innovative design, premium materials, and uncompromising attention to detail.
                        </p>
                    </div> */}
                </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                <div className="floating-card text-center">
                    <i className="fas fa-award text-4xl text-blue-400 mb-4"></i>
                    <h3 className="text-2xl font-bold">50+</h3>
                    <p className="text-gray-400">Awards Won</p>
                </div>
                <div className="floating-card text-center">
                    <i className="fas fa-building text-4xl text-blue-400 mb-4"></i>
                    <h3 className="text-2xl font-bold">200+</h3>
                    <p className="text-gray-400">Projects Completed</p>
                </div>
                <div className="floating-card text-center">
                    <i className="fas fa-users text-4xl text-blue-400 mb-4"></i>
                    <h3 className="text-2xl font-bold">2000+</h3>
                    <p className="text-gray-400">Happy Clients</p>
                </div>
                <div className="floating-card text-center">
                    <i className="fas fa-calendar text-4xl text-blue-400 mb-4"></i>
                    <h3 className="text-2xl font-bold">{experienceLabel(2014, 5)}</h3>
                    <p className="text-gray-400">Years Experience</p>
                </div>
            </div>
        </div>
    </div>
</section>
}
export default About