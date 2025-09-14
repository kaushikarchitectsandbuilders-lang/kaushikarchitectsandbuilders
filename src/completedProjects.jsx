import React from 'react';
const CompletedProjects = () => {
    return <section id="completed" className="py-20">
    <div className="container mx-auto px-6">
        <h2 className="section-title text-center">COMPLETED MASTERPIECES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="floating-card h-80 bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="h-full flex flex-col justify-between">
                    <div className="flex-1 flex items-center justify-center">
                        <div className="text-center">
                            <i className="fas fa-university text-5xl text-blue-400 mb-4"></i>
                            <h3 className="text-xl font-bold">Heritage Corporate Tower</h3>
                            <p className="text-gray-400">Pune | 2023</p>
                        </div>
                    </div>
                    <div className="bg-blue-400 bg-opacity-10 p-4 rounded-b-lg">
                        <p className="text-sm text-gray-300">42-story commercial landmark with LEED Gold certification</p>
                    </div>
                </div>
            </div>
            
            <div className="floating-card h-80 bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="h-full flex flex-col justify-between">
                    <div className="flex-1 flex items-center justify-center">
                        <div className="text-center">
                            <i className="fas fa-hospital text-5xl text-blue-400 mb-4"></i>
                            <h3 className="text-xl font-bold">Apollo Medical Center</h3>
                            <p className="text-gray-400">Chennai | 2022</p>
                        </div>
                    </div>
                    <div className="bg-blue-400 bg-opacity-10 p-4 rounded-b-lg">
                        <p className="text-sm text-gray-300">State-of-the-art healthcare facility with modern design</p>
                    </div>
                </div>
            </div>
            
            <div className="floating-card h-80 bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="h-full flex flex-col justify-between">
                    <div className="flex-1 flex items-center justify-center">
                        <div className="text-center">
                            <i className="fas fa-graduation-cap text-5xl text-blue-400 mb-4"></i>
                            <h3 className="text-xl font-bold">Tech University Campus</h3>
                            <p className="text-gray-400">Hyderabad | 2021</p>
                        </div>
                    </div>
                    <div className="bg-blue-400 bg-opacity-10 p-4 rounded-b-lg">
                        <p className="text-sm text-gray-300">Modern educational complex with smart classNameroom technology</p>
                    </div>
                </div>
            </div>
            
            <div className="floating-card h-80 bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="h-full flex flex-col justify-between">
                    <div className="flex-1 flex items-center justify-center">
                        <div className="text-center">
                            <i className="fas fa-shopping-bag text-5xl text-blue-400 mb-4"></i>
                            <h3 className="text-xl font-bold">Central Shopping Mall</h3>
                            <p className="text-gray-400">Gurgaon | 2022</p>
                        </div>
                    </div>
                    <div className="bg-blue-400 bg-opacity-10 p-4 rounded-b-lg">
                        <p className="text-sm text-gray-300">Premium retail destination with innovative architecture</p>
                    </div>
                </div>
            </div>
            
            <div className="floating-card h-80 bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="h-full flex flex-col justify-between">
                    <div className="flex-1 flex items-center justify-center">
                        <div className="text-center">
                            <i className="fas fa-tree text-5xl text-blue-400 mb-4"></i>
                            <h3 className="text-xl font-bold">Eco Residential Complex</h3>
                            <p className="text-gray-400">Kochi | 2023</p>
                        </div>
                    </div>
                    <div className="bg-blue-400 bg-opacity-10 p-4 rounded-b-lg">
                        <p className="text-sm text-gray-300">Sustainable living with 300+ apartments and green spaces</p>
                    </div>
                </div>
            </div>
            
            <div className="floating-card h-80 bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="h-full flex flex-col justify-between">
                    <div className="flex-1 flex items-center justify-center">
                        <div className="text-center">
                            <i className="fas fa-hotel text-5xl text-blue-400 mb-4"></i>
                            <h3 className="text-xl font-bold">Luxury Resort & Spa</h3>
                            <p className="text-gray-400">Goa | 2021</p>
                        </div>
                    </div>
                    <div className="bg-blue-400 bg-opacity-10 p-4 rounded-b-lg">
                        <p className="text-sm text-gray-300">5-star hospitality project with beachfront architecture</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
}
export default CompletedProjects;