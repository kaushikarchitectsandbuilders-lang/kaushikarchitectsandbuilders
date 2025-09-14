import React from  'react'
export const Hero = () => {
  return (
    <section
      id="home"
      className="hidden lg:flex min-h-screen flex items-center geometric-bg hero-pattern pt-20"
    >
      <div className="container mx-auto px-6">
        <div className="asymmetric-layout">
          <div className="parallax-element">
            <h1 className="orbitron text-6xl font-black mb-6">
              <span className="glow-text">BUILDING</span>
              <br />
              <span className="text-white">TOMORROW'S</span>
              <br />
              <span className="text-blue-400">ARCHITECTURE</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Innovative designs that reshape skylines and redefine living
              spaces through cutting-edge architecture and premium construction
              excellence.
            </p>
            <button className="btn-primary pulse-animation">
              <i className="fas fa-rocket mr-2"></i>
              Explore Our Vision
            </button>
          </div>

          <div className="relative">
            <div className="floating-card h-96 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
              <div className="text-center">
                <i className="fas fa-drafting-compass text-6xl text-blue-400 mb-4"></i>
                <h3 className="text-2xl font-bold mb-2">
                  Architectural Excellence
                </h3>
                <p className="text-gray-400">
                  Where innovation meets precision
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
