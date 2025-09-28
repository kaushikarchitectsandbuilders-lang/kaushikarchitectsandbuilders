// App.jsx
import React, { useState } from "react";
import Header from "./header.jsx";
import { Hero } from "./hero.jsx";
import About from "./about.jsx";
import Ongoing from "./ongoingProjects.jsx";
import CompletedProjects from "./completedProjects.jsx";
import Services from "./services.jsx";
import Testimonials from "./testimonials.jsx";
import DesignShowcase from "./designShowcase.jsx";
import MediaCarousel from "./carousel.jsx";
import Footer from "./footer.jsx";
import ContactDetails from "./contactDetails.jsx";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div onClick={() => setShowModal(false)}>
      <Header />
      <Hero />
      <About />
      <Ongoing />
      <CompletedProjects />
      <Services />
      <Testimonials />
      <DesignShowcase setShowModal={setShowModal} />
      <ContactDetails/>
      <Footer/>
      {showModal ? (
        <MediaCarousel
          mediaItems={showModal}
          onClose={() => setShowModal(false)}
        />
      ) : null}
      <div
        style={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
          display:'flex',
          alignItems: 'center',
          background:'#000',
          gap:10,
          padding: '5px 10px',
          borderRadius:'5px'
        }}
        className="text-gray-400 mb-4 cursor-pointer"
      >
        <i className="fa fa-download"></i>
        <a  target="_blank" href="/assets/Kaushik Architects & Builders.pdf"> Broucher</a>
      </div>
    </div>
  );
}
