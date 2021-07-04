import React from "react";

import Navbar from "./Navbar/Navbar";
import Homepage from "./Homepage/Homepage";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import Contact from "./Contact/Contact";
import OpenSource from "./OpenSource/OpenSource";
import Volunteering from "./Volunteering/Volunteering";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <main>
          <Homepage />
          <About />
          <Experience />
          <Projects />
          <OpenSource />
          <Volunteering />
          <Skills />
          <Education />
          <Contact />
        </main>
      </>
    );
  }
}

export default App;
