import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="section scrollspy">
      <h3 className="page-title white-text teal">Experience</h3>
      <div className="container">
        <div className="card">
          <div className="card-content">
            <div className="row">
              <div className="col s12 m2">
                <a href="https://www.iiita.ac.in/">
                  <img
                    alt="IIIT Allahabad"
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Indian_Institute_of_Information_Technology%2C_Allahabad_Logo.png/220px-Indian_Institute_of_Information_Technology%2C_Allahabad_Logo.png"
                    className="responsive-img center-block"
                  />
                </a>
              </div>
              <div className="col s12 m10">
                <p>
                  <span className="card-title">
                    <a
                      href="https://www.iiita.ac.in/"
                      className="teal-text hoverline"
                    >
                      IIIT Allahabad
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className="role brown-text">Research Intern</div>
            <p>
              <em className="grey-text">
                Research Intern in Center of Cognitive Computing under
                Dr. U.S. Tiwari
              </em>
            </p>
            <ul>
              <li>
                Development of fruit ripeness multi-class classification system,
                which included the collection of data as well as it's training.
                The data collection was non-invasive in nature.
              </li>
              <li>
                Collected and curated biological dataset showing relation
                between various chemical compounds and their percieced smell.
              </li>
            </ul>
          </div>
          <div className="card-action">
            <span>May 2019 - July 2019 | Allahabad, IN</span>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="row">
              <div className="col s12 m2">
                <a href="https://fellowship.mlh.io/">
                  <img
                    alt="MLH Logo"
                    src="https://mlh.io/assets/logos/mlh-facebook-ae6144c0a3605f15992ee2970616db8d.jpg"
                    className="responsive-img center-block"
                  />
                </a>
              </div>
              <div className="col s12 m10">
                <p>
                  <span className="card-title">
                    <a
                      href="https://fellowship.mlh.io/"
                      className="teal-text hoverline"
                    >
                      Major League Hacking
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className="role brown-text">Fellowship</div>
            <p>
              <em className="grey-text">
                OpenSource Contributor in MLH Fellowship
              </em>
            </p>
          </div>
          <div className="card-action">
            <span>Oct 2020 - Ongoing | Kota, IN (Remote)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
