// App.jsx
import React from "react";
import Header from "./header.jsx";
import { Hero } from "./hero.jsx";
import About from "./about.jsx";
import Ongoing from "./ongoingProjects.jsx";
import CompletedProjects from "./completedProjects.jsx";

export default function App() {
  return (
    <>
      {" "}
      <Header />
      <Hero />
      <About />
      <Ongoing/>
      <CompletedProjects/>
    </>
  );
}
