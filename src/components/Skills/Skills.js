import React from "react";
import axios from "axios";

import LanguageSkills from "./LanguageSkills";
import FrameworkSkills from "./FrameworkSkills";
import DevSkills from "./DevSkills";
class Skills extends React.Component {
  state = {
    languageskills: [],
    frameworkskills: [],
    devskills: []
  };

  componentDidMount() {
    axios.get("https://shubhank.codes/api/languageskills").then(res => {
      this.setState({
        languageskills: res.data
      });
    });
    axios.get("https://shubhank.codes/api/frameworkskills").then(res => {
      this.setState({
        frameworkskills: res.data
      });
    });
    axios.get("https://shubhank.codes/api/devskills").then(res => {
      this.setState({
        devskills: res.data
      });
    });
  }

  render() {
    return (
      <>
        <section id="skills" className="section scrollspy">
          <h3 className="page-title white-text teal">Skills</h3>
          <div className="container">
            <LanguageSkills data={this.state.languageskills} />
            <FrameworkSkills data={this.state.frameworkskills} />
            <DevSkills data={this.state.devskills} />
          </div>
        </section>
      </>
    );
  }
}

export default Skills;
