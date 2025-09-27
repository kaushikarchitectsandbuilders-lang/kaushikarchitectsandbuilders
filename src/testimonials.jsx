import React from 'react';

const Testimonials = () => {
    return <section id="testimonials" className="py-20">
    <div className="container mx-auto px-6">
        <h2 className="section-title text-center">CLIENT TESTIMONIALS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="testimonial-card">
                <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-4">
                        <i className="fas fa-user text-white text-xl"></i>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Rajesh Gupta</h4>
                        <p className="text-gray-400">CEO, Tech Innovations</p>
                        <div className="flex text-yellow-400 mt-1">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>
                </div>
                <p className="text-gray-300 italic">
                    "Kaushik Architects transformed our vision into reality. Their attention to detail and innovative approach exceeded our expectations. The project was completed on time with exceptional quality."
                </p>
            </div>
            
            <div className="testimonial-card">
                <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-4">
                        <i className="fas fa-user text-white text-xl"></i>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Priya Sharma</h4>
                        <p className="text-gray-400">Director, Urban Developers</p>
                        <div className="flex text-yellow-400 mt-1">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>
                </div>
                <p className="text-gray-300 italic">
                    "Outstanding professionalism and creative solutions. They delivered a world-className project that perfectly balanced aesthetics with functionality. Highly recommended for premium projects."
                </p>
            </div>
            
            <div className="testimonial-card">
                <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-4">
                        <i className="fas fa-user text-white text-xl"></i>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Dr. Amit Patel</h4>
                        <p className="text-gray-400">Hospital Administrator</p>
                        <div className="flex text-yellow-400 mt-1">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>
                </div>
                <p className="text-gray-300 italic">
                    "Their expertise in healthcare architecture is remarkable. They created a space that is both patient-friendly and operationally efficient. Truly exceptional work."
                </p>
            </div>
            
            <div className="testimonial-card">
                <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-4">
                        <i className="fas fa-user text-white text-xl"></i>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Sarah Johnson</h4>
                        <p className="text-gray-400">Resort Owner</p>
                        <div className="flex text-yellow-400 mt-1">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>
                </div>
                <p className="text-gray-300 italic">
                    "The luxury resort design exceeded all expectations. Their ability to blend modern architecture with natural surroundings is extraordinary. A truly premium experience."
                </p>
            </div>
        </div>
    </div>
</section>
}
export default Testimonials