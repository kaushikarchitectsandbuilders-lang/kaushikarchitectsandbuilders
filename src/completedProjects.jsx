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
                            <h3 className="text-xl font-bold">Med Clap Pvt. Ltd. </h3>
                            <p className="text-gray-400">Mohali | 2023</p>
                        </div>
                    </div>
                    <div className="bg-blue-400 bg-opacity-10 p-4 rounded-b-lg">
                        <p className="text-sm text-gray-300">Text pending</p>
                    </div>
                </div>
            </div>
            
            <div className="floating-card h-80 bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="h-full flex flex-col justify-between">
                    <div className="flex-1 flex items-center justify-center">
                        <div className="text-center">
                            <i className="fas fa-hospital text-5xl text-blue-400 mb-4"></i>
                            <h3 className="text-xl font-bold">Offshore A-1 Technologies Pvt. Ltd.</h3>
                            <p className="text-gray-400">IT Park Panchkula | 2022</p>
                        </div>
                    </div>
                    <div className="bg-blue-400 bg-opacity-10 p-4 rounded-b-lg">
                        <p className="text-sm text-gray-300">Offshore A-1 Technologies Pvt. Ltd. IT Park Panchkula
                        With Ar. Munish Marya</p>
                    </div>
                </div>
            </div>
            
            <div className="floating-card h-80 bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="h-full flex flex-col justify-between">
                    <div className="flex-1 flex items-center justify-center">
                        <div className="text-center">
                            <i className="fas fa-building text-5xl text-blue-400 mb-4"></i>
                            <h3 className="text-xl font-bold">Sun Enclave Tower</h3>
                            <p className="text-gray-400">Rupnagar | 2021</p>
                        </div>
                    </div>
                    <div className="bg-blue-400 bg-opacity-10 p-4 rounded-b-lg">
                        <p className="text-sm text-gray-300">Sun Enclave Tower ,Rupnagar, Panjab</p>
                    </div>
                </div>
            </div>
            
            <div className="floating-card h-80 bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="h-full flex flex-col justify-between">
                    <div className="flex-1 flex items-center justify-center">
                        <div className="text-center">
                            <i className="fas fa-shopping-bag text-5xl text-blue-400 mb-4"></i>
                            <h3 className="text-xl font-bold">Rites Pvl. Ltd. Police Housing</h3>
                            <p className="text-gray-400"> Sector 16-c Dwarka Delhi | Janakpuri New Delhi. | Dabri New Delhi</p>
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
                            <i className="fas fa-hospital text-5xl text-blue-400 mb-4"></i>
                            <h3 className="text-xl font-bold">Government Hospital</h3>
                            <p className="text-gray-400">Ludhiana | 2023</p>
                        </div>
                    </div>
                    <div className="bg-blue-400 bg-opacity-10 p-4 rounded-b-lg">
                        <p className="text-sm text-gray-300">30 Bedded Hospital At Jalandhar Bye Pass Road, Ludhiana.
                        (Punjab Health System Corporation)</p>
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