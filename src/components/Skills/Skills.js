import React from "react";

import LanguageSkills from "./Languages";
import FrameworkSkills from "./Frameworks";
import DevSkills from "./DevTools";

const Skills = (props) => {
    return (
      <>
        <section id="skills" className="section scrollspy">
          <h3 className="page-title white-text teal">Skills</h3>
          <div className="container">
            <LanguageSkills />
            <FrameworkSkills />
            <DevSkills />
          </div>
        </section>
      </>
    );
}

export default Skills;
