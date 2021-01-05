import React from "react";
import axios from "axios";
import Navbar from "./Navbar/Navbar";
import Homepage from "./Homepage/Homepage";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import Contact from "./Contact/Contact";
import OpenSource from "./OpenSource/OpenSource";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <main>
          <Homepage />
          <About />
          <Experience />
          <OpenSource />
          <Education />
          <Contact />
        </main>
      </>
    );
  }
}

export default App;
