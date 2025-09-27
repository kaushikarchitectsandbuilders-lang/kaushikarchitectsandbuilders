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
                            <i className="fas fa-home text-4xl text-blue-400 mb-4"></i>
                            <h3 className="text-xl font-bold">Bunglow/Kothi</h3>
                            <p className="text-gray-400">Jaggi Garden, Ambala City</p>
                        </div>
                    </div>
                    <div className="project-info">
                        <h3 className="text-xl font-bold mb-2">Bunglow/Kothi</h3>
                        <p className="text-gray-300 mb-3">A complete bunglow/kothi in Ambala City including Architecture and builder end to end delivery including material Jaggi Garden</p>
                        <div className="flex items-center justify-between">
                            <span className="text-blue-400 font-semibold">Ambala City</span>
                            <span className="text-green-400">65% Complete</span>
                        </div>
                    </div>
                </div>
                
                <div className="project-card bg-gradient-to-br from-gray-700 to-gray-900">
                    <div className="h-full flex items-center justify-center">
                        <div className="text-center">
                            <i className="fas fa-city text-4xl text-blue-400 mb-4"></i>
                            <h3 className="text-xl font-bold">Bunglow/Kothi</h3>
                            <p className="text-gray-400">Manali House, Ambala City</p>
                        </div>
                    </div>
                    <div className="project-info">
                        <h3 className="text-xl font-bold mb-2">Bunglow/Kothi</h3>
                        <p className="text-gray-300 mb-3">A complete bunglow/kothi in Ambala City including Architecture and builder end to end delivery including material Manali house</p>
                        <div className="flex items-center justify-between">
                            <span className="text-blue-400 font-semibold">Ambala city</span>
                            <span className="text-yellow-400">45% Complete</span>
                        </div>
                    </div>
                </div>
                
                <div className="project-card bg-gradient-to-br from-gray-700 to-gray-900">
                    <div className="h-full flex items-center justify-center">
                        <div className="text-center">
                            <i className="fas fa-home text-4xl text-blue-400 mb-4"></i>
                            <h3 className="text-xl font-bold">Bunglow/Kothi</h3>
                            <p className="text-gray-400">Dosarka</p>
                        </div>
                    </div>
                    <div className="project-info">
                        <h3 className="text-xl font-bold mb-2">Bunglow/Kothi</h3>
                        <p className="text-gray-300 mb-3">A complete bunglow/kothi in Dosarka including Architecture and builder end to end delivery including material</p>
                        <div className="flex items-center justify-between">
                            <span className="text-blue-400 font-semibold">Dosarka</span>
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