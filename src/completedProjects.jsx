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
                            <h3 className="text-xl font-bold">DG Tower</h3>
                            <p className="text-gray-400">Mohali | 2023</p>
                        </div>
                    </div>
                    <div className="bg-blue-400 bg-opacity-10 p-4 rounded-b-lg">
                        <p className="text-sm text-gray-300">Complete project from concept to completion including handling planning, architectural design, material sourcing, and construction execution.</p>
                    </div>
                </div>
            </div>
            
            <div className="floating-card h-80 bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="h-full flex flex-col justify-between">
                    <div className="flex-1 flex items-center justify-center">
                        <div className="text-center">
                            <i className="fas fa-home text-5xl text-blue-400 mb-4"></i>
                            <h3 className="text-xl font-bold">AdiBadri Narayan Temple</h3>
                            <p className="text-gray-400">Yamunanagar | 2022</p>
                        </div>
                    </div>
                    <div className="bg-blue-400 bg-opacity-10 p-4 rounded-b-lg">
                        <p className="text-sm text-gray-300">Working Drawings for AdiBardi Narayan Temple in Yamunanagar</p>
                    </div>
                </div>
            </div>
            
            <div className="floating-card h-80 bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="h-full flex flex-col justify-between">
                    <div className="flex-1 flex items-center justify-center">
                        <div className="text-center">
                            <i className="fas fa-building text-5xl text-blue-400 mb-4"></i>
                            <h3 className="text-xl font-bold">EXOTICA HOMEZ</h3>
                            <p className="text-gray-400">Kharar | 2023</p>
                        </div>
                    </div>
                    <div className="bg-blue-400 bg-opacity-10 p-4 rounded-b-lg">
                        <p className="text-sm text-gray-300">Planning and Architecture Drawings</p>
                    </div>
                </div>
            </div>
            
            <div className="floating-card h-80 bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="h-full flex flex-col justify-between">
                    <div className="flex-1 flex items-center justify-center">
                        <div className="text-center">
                            <i className="fas fa-shopping-bag text-5xl text-blue-400 mb-4"></i>
                            <h3 className="text-xl font-bold">Mini Secretariat </h3>
                            <p className="text-gray-400"> Charki Dadri & Bhiwani | 2021</p>
                        </div>
                    </div>
                    <div className="bg-blue-400 bg-opacity-10 p-4 rounded-b-lg">
                        <p className="text-sm text-gray-300">Working Drawings for Mini Secretariat at charki dadri.</p>
                    </div>
                </div>
            </div>
            
            <div className="floating-card h-80 bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="h-full flex flex-col justify-between">
                    <div className="flex-1 flex items-center justify-center">
                        <div className="text-center">
                            <i className="fas fa-hospital text-5xl text-blue-400 mb-4"></i>
                            <h3 className="text-xl font-bold">Government Hospital</h3>
                            <p className="text-gray-400">Faridabad | 2022</p>
                        </div>
                    </div>
                    <div className="bg-blue-400 bg-opacity-10 p-4 rounded-b-lg">
                        <p className="text-sm text-gray-300">Preparation of working drawings for construction of  200 bedded mother and child hospital on the campus of BK civil hospital at faridabad
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="floating-card h-80 bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="h-full flex flex-col justify-between">
                    <div className="flex-1 flex items-center justify-center">
                        <div className="text-center">
                            <i className="fas fa-school text-5xl text-blue-400 mb-4"></i>
                            <h3 className="text-xl font-bold">School</h3>
                            <p className="text-gray-400">Pinjore | 2021</p>
                        </div>
                    </div>
                    <div className="bg-blue-400 bg-opacity-10 p-4 rounded-b-lg">
                        <p className="text-sm text-gray-300">School At Dlf Valley, Sector-3, Pinjore, Kalka Urban Complex.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
}
export default CompletedProjects;