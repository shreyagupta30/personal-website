import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="hide-on-small-only">
        <ul className="side-nav fixed section table-of-contents">
          <li className="logo">
            <a
              id="logo-container"
              aria-label="Navigate to the beginning of the page"
              href="#intro"
              className="brand-logo teal-text"
            >
              <h1>
                Shreya Gupta
                <span className="brown-text light">Junior Developer</span>
              </h1>
            </a>
          </li>
          <li className="bold">
            <a
              aria-label="Navigate to the About section"
              href="#about"
              className="waves-effect waves-dark teal-text"
            >
              <i className="mdi-social-person small"></i>
              <span>About</span>
            </a>
          </li>
          <li className="bold">
            <a
              aria-label="Navigate to the Experience section"
              href="#experience"
              className="waves-effect waves-dark cyan-text"
            >
              <i className="mdi-action-trending-up small"></i>
              <span>Experience</span>
            </a>
          </li>
          <li className="bold">
            <a
              aria-label="Navigate to the Projects section"
              href="#projects"
              className="waves-effect waves-dark indigo-text"
            >
              <i className="mdi-av-web small"></i>
              <span>Projects</span>
            </a>
          </li>
          <li className="bold">
            <a
              aria-label="Navigate to the Projects section"
              href="#open-source"
              className="waves-effect waves-dark indigo-text"
            >
              <i className="mdi-social-group small"></i>
              <span>Open Source</span>
            </a>
          </li>
          <li className="bold">
            <a
              aria-label="Navigate to the Volunteering section"
              href="#volunteering"
              className="waves-effect waves-dark cyan-text"
            >
              <i className="mdi-action-favorite small"></i>
              <span>Volunteering</span>
            </a>
          </li>
          <li className="bold">
            <a
              aria-label="Navigate to the Skills section"
              href="#skills"
              className="waves-effect waves-dark purple-text"
            >
              <i className="mdi-av-equalizer small"></i>
              <span>Skills</span>
            </a>
          </li>
          <li className="bold">
            <a
              aria-label="Navigate to the Education section"
              href="#education"
              className="waves-effect waves-dark orange-text"
            >
              <i className="mdi-social-school small"></i>
              <span>Education</span>
            </a>
          </li>
          <li className="bold">
            <a
              aria-label="Navigate to the Contact section"
              href="#contact"
              className="waves-effect waves-dark brown-text"
            >
              <i className="mdi-content-mail small"></i>
              <span>Contact</span>
            </a>
          </li>
          <hr/>
          <li className="bold">
            <a
              aria-label="Navigate to the Blog section"
              target="blank"
              href="https://blog.shreya.codes"
              className="waves-effect waves-dark yellow-text text-darken-2"
            >
              <i className="mdi-content-create small"></i>
              <span>Blog</span>
            </a>
          </li>
          <li className="bold">
            <a
              aria-label="Open Shreya's resume in a new tab"
              target="blank"
              href="https://drive.google.com/file/d/1BZSJIQBC90af8KU69rznWYhwNaT7gheV/view?usp=sharing"
              className="waves-effect waves-dark grey-text text-darken-3"
            >
              <i className="mdi-action-description small"></i>
              <span>Resume</span>
            </a>
          </li>
        </ul>
      </nav>
      <nav className="hide-on-large only trigger z-depth-1">
        <a
          aria-label="Toggle visibility of the mobile navbar"
          href=" "
          data-activates="slide-out"
          className="button-collapse"
        >
          <i className="mdi-navigation-menu"></i>
        </a>
        <div className="name-title">
          <a
            id="name"
            aria-label="Navigate to the beginning of the page"
            href="#main"
            className="teal-text"
          >
            Shreya Gupta 
          </a>
          <span className="brown-text light">Full Stack Developer</span>
        </div>
      </nav>
      <nav className="hide-on-large only">
        <ul id="slide-out" className="side-nav">
          <li className="bold">
            <a
              aria-label="Navigate to the About section"
              href="#about"
              className="waves-effect waves-dark teal-text"
            >
              <i className="mdi-social-person small"></i>
              <span>About</span>
            </a>
          </li>
          <li className="bold">
            <a
              aria-label="Navigate to the Experience section"
              href="#experience"
              className="waves-effect waves-dark cyan-text"
            >
              <i className="mdi-action-trending-up small"></i>
              <span>Experience</span>
            </a>
          </li>
          <li className="bold">
            <a
              aria-label="Navigate to the Projects section"
              href="#projects"
              className="waves-effect waves-dark indigo-text"
            >
              <i className="mdi-av-web small"></i>
              <span>Projects</span>
            </a>
          </li>
          <li className="bold">
            <a
              aria-label="Navigate to the Projects section"
              href="#open-source"
              className="waves-effect waves-dark indigo-text"
            >
              <i className="mdi-social-group small"></i>
              <span>Open Source</span>
            </a>
          </li>
          <li className="bold">
            <a
              aria-label="Navigate to the Experience section"
              href="#volunteering"
              className="waves-effect waves-dark cyan-text"
            >
              <i className="mdi-action-favorite small"></i>
              <span>Volunteering</span>
            </a>
          </li>
          <li className="bold">
            <a
              aria-label="Navigate to the Skills section"
              href="#skills"
              className="waves-effect waves-dark purple-text"
            >
              <i className="mdi-av-equalizer small"></i>
              <span>Skills</span>
            </a>
          </li>
          <li className="bold">
            <a
              aria-label="Navigate to the Education section"
              href="#education"
              className="waves-effect waves-dark orange-text"
            >
              <i className="mdi-social-school small"></i>
              <span>Education</span>
            </a>
          </li>
          <li className="bold">
            <a
              aria-label="Navigate to the Contact section"
              href="#contact"
              className="waves-effect waves-dark brown-text"
            >
              <i className="mdi-content-mail small"></i>
              <span>Contact</span>
            </a>
          </li>
          <hr/>
          <li className="bold">
            <a
              aria-label="Navigate to the Blog section"
              href="https://blog.shreya.codes"
              target="blank"
              className="waves-effect waves-dark yellow-text text-darken-2"
            >
              <i className="mdi-content-create small"></i>
              <span>Blog</span>
            </a>
          </li>
          <li className="bold">
            <a
              aria-label="Open Shreya's Resume in a new tab"
              target="blank"
              href="https://drive.google.com/file/d/1323nSxVqnOKojnsr4pCzh4bzSQ0-RpcC/view?usp=sharing"
              className="waves-effect waves-dark grey-text text-darken-3"
            >
              <i className="mdi-action-description small"></i>
              <span>Resume</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
