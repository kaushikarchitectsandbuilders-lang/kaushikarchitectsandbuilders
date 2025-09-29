import React from  'react'
export default function Header() {
    return <header className="fixed w-full top-0 z-50 bg-opacity-95 backdrop-blur-md" style={{backgroundColor: "rgba(26, 26, 26, 0.95)"}}>
    <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
                <div className="w-20 h-20  rounded-lg flex items-center justify-center">
                    {/* <i className="fas fa-building text-white text-xl"></i> */}
                    <img src="/assets/imagesVideos/kaushik-logo.png" alt='logo'/>
                </div>
                <div>
                    <h1 className="orbitron text-xl font-bold text-white">KAUSHIK</h1>
                    <p className="text-xs text-gray-400">ARCHITECTS & BUILDERS</p>
                </div>
            </div>
            
            <div className="hidden md:flex space-x-8">
                <a href="#home" className="nav-item  text-gray-300 hover:text-white transition-colors">Home</a>
                <a href="#about" className="nav-item  text-gray-300 hover:text-white transition-colors">About</a>
                <a href="#ongoing" className="nav-item text-gray-300 hover:text-white transition-colors">Ongoing</a>
                <a href="#completed" className="nav-item text-gray-300 hover:text-white transition-colors">Completed</a>
                <a href="#services" className="nav-item text-gray-300 hover:text-white transition-colors">Services</a>
                <a href="#testimonials" className="nav-item hidden xl:flex text-gray-300 hover:text-white transition-colors">Testimonials</a>
                <a href="#contact" className="nav-item hidden xl:flex text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
            
            <div className="flex items-center space-x-4">
                <a href="tel:+91-7404421000" className="hidden lg:flex align-items-center text-blue-400 hover:text-blue-300">
                    <i className="fas fa-phone"></i> +91-74044-21000
                </a>
                <a href="tel:+91-7404421000" className=" md:hidden align-items-center text-blue-400 hover:text-blue-300">
                    <i className="fas fa-phone"></i> 7404421000
                </a>
                <div className="hidden md:flex space-x-3">
                    {/* <a  className="text-gray-400 hover:text-blue-400 transition-colors"><i className="fab fa-linkedin"></i></a> */}
                    <a target='_blank' alt='instagram' href="https://www.instagram.com/kaushik_architects_builders" className="text-gray-400 hover:text-blue-400 transition-colors"><i className="fab fa-instagram"></i></a>
                    <a target='_blank' href="https://www.facebook.com/profile.php?id=100057380952304" alt='facebook' className="text-gray-400 hover:text-blue-400 transition-colors"><i className="fab fa-facebook"></i></a>
                </div>
            </div>
        </div>
    </nav>
</header>
}