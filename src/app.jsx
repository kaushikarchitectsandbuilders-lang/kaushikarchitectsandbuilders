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

// const mediaItems = [
//   { type: "image", src: "https://via.placeholder.com/400x200.png?text=Image+1" },
//   { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
//   { type: "image", src: "https://via.placeholder.com/400x200.png?text=Image+2" },
// ];
export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {" "}
      <Header />
      <Hero />
      <About />
      <Ongoing />
      <CompletedProjects />
      <Services />
      <Testimonials />
      <DesignShowcase setShowModal={setShowModal} />
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
        }}
        className="text-blue-400 mb-4 cursor-pointer"
      >
        <a  target="_blank" href="assets/Kaushik Architects & Builders.pdf">Download broucher</a>
      </div>
    </>
  );
}
