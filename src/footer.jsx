const Footer  = () => {
    return <footer className="bg-black py-12">
    <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
                <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                        <i className="fas fa-building text-white"></i>
                    </div>
                    <div>
                        <h3 className="orbitron font-bold text-lg">KAUSHIK</h3>
                        <p className="text-xs text-gray-400">ARCHITECTS & BUILDERS</p>
                    </div>
                </div>
                <p className="text-gray-400 text-sm">
                    Building tomorrow's architecture with innovative design and premium construction excellence.
                </p>
            </div>
            
            <div>
                <h4 className="font-bold mb-4 text-blue-400">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">Home</a></li>
                    <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</a></li>
                    <li><a href="#ongoing" className="text-gray-400 hover:text-blue-400 transition-colors">Ongoing Projects</a></li>
                    <li><a href="#completed" className="text-gray-400 hover:text-blue-400 transition-colors">Completed Projects</a></li>
                </ul>
            </div>
            
            <div>
                <h4 className="font-bold mb-4 text-blue-400">Services</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Architectural Design</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Construction Management</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Sustainable Design</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Interior Design</a></li>
                </ul>
            </div>
            
            <div>
                <h4 className="font-bold mb-4 text-blue-400">Follow Us</h4>
                <div className="flex space-x-4">
                    
                    <a href="https://www.instagram.com/kaushik_architects_builders" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100057380952304" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://www.youtube.com/@kaushikarchitectsBuilders43" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
                <div className="mt-4">
                    <p className="text-gray-400 text-sm">Call us:</p>
                    <p className="text-blue-400 font-semibold">+91-74044-21000 +91-89506-00043</p>
                </div>
            </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Kaushik Architects & Builders. All rights reserved.
            </p>
        </div>
    </div>
</footer>
}
export default Footer