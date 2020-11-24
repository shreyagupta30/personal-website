import React from "react";
import axios from "axios";
import Navbar from "./Navbar/Navbar";
import Homepage from "./Homepage/Homepage";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Volunteering from "./Volunteering/Volunteering";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Awards from "./Awards/Awards";
import Education from "./Education/Education";
import Contact from "./Contact/Contact";
import OpenSource from "./OpenSource/OpenSource";

class App extends React.Component {
  state = {
    projects: [],
    opensource: [],
    experience: [],
    awards: [],
    education: []
  };

  componentDidMount() {
    axios.get("https://shubhank.codes/api/projects").then(res => {
      this.setState({
        projects: res.data
      });
    });
    axios.get("https://shubhank.codes/api/opensource").then(res => {
      this.setState({
        opensource: res.data
      });
    });
    axios.get("https://shubhank.codes/api/experience").then(res => {
      this.setState({
        experience: res.data
      });
    });
    axios.get("https://shubhank.codes/api/awards").then(res => {
      this.setState({
        awards: res.data
      });
    });
    axios.get("https://shubhank.codes/api/education").then(res => {
      this.setState({
        education: res.data
      });
    });
  }

  render() {
    return (
      <>
        <Navbar />
        <main>
          <Homepage />
          <About />
          <Experience />
          <Volunteering />
          <Projects data={this.state.projects} />
          <OpenSource data={this.state.opensource} />
          <Skills />
          <Awards data={this.state.awards} />
          <Education data={this.state.education} />
          <Contact />
        </main>
      </>
    );
  }
}

export default App;
