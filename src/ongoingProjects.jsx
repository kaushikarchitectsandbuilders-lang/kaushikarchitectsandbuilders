import React from 'react';
const Ongoing=() => {
    return <section id="ongoing" className="diagonal-section" style={{background: "var(--medium-gray)"}}>
    <div className="diagonal-content">
        <div className="container mx-auto px-6">
            <h2 className="section-title text-center">ONGOING PROJECTS</h2>
            <div className="project-grid">
                <div className="project-card bg-gradient-to-br from-gray-700 to-gray-900">
                    <div className="h-full flex items-center justify-center">
                        <div className="text-center">
                            <i className="fas fa-hammer text-4xl text-blue-400 mb-4"></i>
                            <h3 className="text-xl font-bold">Skyline Towers</h3>
                            <p className="text-gray-400">Mumbai</p>
                        </div>
                    </div>
                    <div className="project-info">
                        <h3 className="text-xl font-bold mb-2">Skyline Towers</h3>
                        <p className="text-gray-300 mb-3">Luxury residential complex with 40 floors, featuring modern amenities and sustainable design.</p>
                        <div className="flex items-center justify-between">
                            <span className="text-blue-400 font-semibold">Mumbai</span>
                            <span className="text-green-400">65% Complete</span>
                        </div>
                    </div>
                </div>
                
                <div className="project-card bg-gradient-to-br from-gray-700 to-gray-900">
                    <div className="h-full flex items-center justify-center">
                        <div className="text-center">
                            <i className="fas fa-city text-4xl text-blue-400 mb-4"></i>
                            <h3 className="text-xl font-bold">Metro Plaza</h3>
                            <p className="text-gray-400">Delhi</p>
                        </div>
                    </div>
                    <div className="project-info">
                        <h3 className="text-xl font-bold mb-2">Metro Plaza</h3>
                        <p className="text-gray-300 mb-3">Commercial complex with integrated shopping and office spaces in the heart of Delhi.</p>
                        <div className="flex items-center justify-between">
                            <span className="text-blue-400 font-semibold">Delhi</span>
                            <span className="text-yellow-400">45% Complete</span>
                        </div>
                    </div>
                </div>
                
                <div className="project-card bg-gradient-to-br from-gray-700 to-gray-900">
                    <div className="h-full flex items-center justify-center">
                        <div className="text-center">
                            <i className="fas fa-home text-4xl text-blue-400 mb-4"></i>
                            <h3 className="text-xl font-bold">Green Valley Homes</h3>
                            <p className="text-gray-400">Bangalore</p>
                        </div>
                    </div>
                    <div className="project-info">
                        <h3 className="text-xl font-bold mb-2">Green Valley Homes</h3>
                        <p className="text-gray-300 mb-3">Eco-friendly residential community with solar power and rainwater harvesting.</p>
                        <div className="flex items-center justify-between">
                            <span className="text-blue-400 font-semibold">Bangalore</span>
                            <span className="text-orange-400">30% Complete</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
}
export default Ongoing