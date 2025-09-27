import React, { useState } from 'react';
const DesignShowcase = ({setShowModal}) => {
    return <section className="diagonal-section" style={{background: "var(--medium-gray)"}}>
    <div className="diagonal-content">
        <div className="container mx-auto px-6 ">
            <h2 className="section-title text-center">DESIGN SHOWCASE</h2>
            <div onClick={() => {
                setShowModal([
                    { type: "image", src: "/assets/imagesVideos/elevationDesigns/1.png" },
                    { type: "image", src: "/assets/imagesVideos/elevationDesigns/2.png" },
                    { type: "image", src: "/assets/imagesVideos/elevationDesigns/3.png" },
                    { type: "image", src: "/assets/imagesVideos/elevationDesigns/4.png" },
                    { type: "image", src: "/assets/imagesVideos/elevationDesigns/5.png" },
                    { type: "image", src: "/assets/imagesVideos/elevationDesigns/6.png" },
                    { type: "image", src: "/assets/imagesVideos/elevationDesigns/7.png" },
                ])
            }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="cursor-pointer floating-card h-64 bg-gradient-to-br from-gray-800 to-gray-900">
                    <div className="h-full flex items-center justify-center">
                        <div className="text-center">
                            <i className="fas fa-pencil-ruler text-5xl text-blue-400 mb-4"></i>
                            <h3 className="text-lg font-bold">Elevation Designs</h3>
                            <p className="text-gray-400">Modern architectural elevations</p>
                        </div>
                    </div>
                </div>
                
                <div className="floating-card h-64 bg-gradient-to-br from-gray-800 to-gray-900">
                    <div className="h-full flex items-center justify-center">
                        <div className="text-center">
                            <i className="fas fa-cube text-5xl text-blue-400 mb-4"></i>
                            <h3 className="text-lg font-bold">3D Renderings</h3>
                            <p className="text-gray-400">Photorealistic visualizations</p>
                        </div>
                    </div>
                </div>
                
                <div className="floating-card h-64 bg-gradient-to-br from-gray-800 to-gray-900">
                    <div className="h-full flex items-center justify-center">
                        <div className="text-center">
                            <i className="fas fa-map text-5xl text-blue-400 mb-4"></i>
                            <h3 className="text-lg font-bold">Blueprint Designs</h3>
                            <p className="text-gray-400">Detailed technical drawings</p>
                        </div>
                    </div>
                </div>
                
                <div className="floating-card h-64 bg-gradient-to-br from-gray-800 to-gray-900">
                    <div className="h-full flex items-center justify-center">
                        <div className="text-center">
                            <i className="fas fa-palette text-5xl text-blue-400 mb-4"></i>
                            <h3 className="text-lg font-bold">Interior Concepts</h3>
                            <p className="text-gray-400">Creative space planning</p>
                        </div>
                    </div>
                </div>
                
                <div className="floating-card h-64 bg-gradient-to-br from-gray-800 to-gray-900">
                    <div className="h-full flex items-center justify-center">
                        <div className="text-center">
                            <i className="fas fa-seedling text-5xl text-blue-400 mb-4"></i>
                            <h3 className="text-lg font-bold">Landscape Design</h3>
                            <p className="text-gray-400">Sustainable outdoor spaces</p>
                        </div>
                    </div>
                </div>
                
                <div className="floating-card h-64 bg-gradient-to-br from-gray-800 to-gray-900">
                    <div className="h-full flex items-center justify-center">
                        <div className="text-center">
                            <i className="fas fa-lightbulb text-5xl text-blue-400 mb-4"></i>
                            <h3 className="text-lg font-bold">Concept Sketches</h3>
                            <p className="text-gray-400">Initial design explorations</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
</section>
}
export default DesignShowcase