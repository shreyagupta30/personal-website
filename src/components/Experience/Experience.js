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
                <a href="https://www.outreachy.org/">
                  <img
                    alt="Outreachy"
                    src="https://pbs.twimg.com/profile_images/561419803202568194/Pjk5iqNn.png"
                    className="responsive-img center-block"
                  />
                </a>
              </div>
              <div className="col s12 m10">
                <p>
                  <span className="card-title">
                    <a
                      href="https://www.outreachy.org/"
                      className="teal-text hoverline"
                    >
                      Outreachy
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className="role brown-text">Intern</div>
            <p>
              <em className="grey-text">
                Outreachy Intern at Fedora Organisation - contributing to nmstate
              </em>
            </p>
            <ul>
              <li>
                Added wireguard support to nmstate and nispor.
              </li>
              <li>
                <strong> Technology stack : </strong>Python3, pytest, computer networking
              </li>
            </ul>
          </div>
          <div className="card-action">
            <span>Dec 2020 - March 2021 | Remote</span>
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
              OpenSource Fellow @MLH Fellowship(Batch 1)
              </em>
            </p>
            <ul>
              <li>
                Part of the Batch 1 of MLH Fellowship (powered by GitHub), 140 students selected out of 20,000
              </li>
              <li>
                Worked on Meshes.jl, a computational geometry and meshing algorithms in Julia. 
              </li>
              <li>
                <strong>Technology Stack : </strong> Julia, unittesting
              </li>
            </ul>
          </div>
          <div className="card-action">
            <span>Oct 2020 - Dec 2020 | Remote</span>
          </div>
        </div>


        <div className="card">
          <div className="card-content">
            <div className="row">
              <div className="col s12 m2">
                <a href="https://www.iitd.ac.in/">
                  <img
                    alt="IIT Delhi"                    
                    src="https://lh3.googleusercontent.com/proxy/LRXe4EeXiF5Iw3Og2p3Mww9tEC-p3mIusANeIw-aN_uHNPLM1ITlPhPKDPGz5wVn_hhTICcAy8Vb0W6Y1NvCBbs"
                    className="responsive-img center-block"
                  />
                </a>
              </div>
              <div className="col s12 m10">
                <p>
                  <span className="card-title">
                    <a
                      href="https://hydrosenselab.github.io/"
                      className="teal-text hoverline"
                    >
                    IIT Delhi
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className="role brown-text">Research Internship</div>
            <p>
              <em className="grey-text">
              Research Intern @HydroSense Lab under Dr. Manabendra Saharia
              </em>
            </p>
            <ul>
              <li>
              Worked on India Water Model project. 
              </li>
              <li>
              Worked with the multi- dimensional dataset to extract different features to create a visualisation library for any LIS datasets to create visualiza- tion globally.
              </li>
              <li>
                <strong>Technology Stack: </strong>Python3, libraries like Matplotlib, Car- topy, Xarray, GDAL, Pandas, Numpy
              </li>
            </ul>
          </div>
          <div className="card-action">
            <span>July 2020 - Jan 2021 | Remote</span>
          </div>
        </div>

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
            <div className="role brown-text">Research Internship</div>
            <p>
              <em className="grey-text">
              Research Intern in Center of Cognitive Computing under
              Dr. U.S. Tiwari
              </em>
            </p>
            <ul>
              <li>
                Worked on a project in the EEG analysis lab under the guid- ance of Prof. U.S. Tiwari (Head, CCC, IIIT-A), 
                mainly focused on building a tool- mental health diagnosis. 
                Implemented multi-label classification on open-source data on EEG sig- nals.
              </li>
              <li>
                <strong>Technology Stack: </strong>Python3, machine learning libraries like Scikit-learn, NumPy, pandas etc, Tensorflow, Keras, mne.
              </li>
            </ul>
          </div>
          <div className="card-action">
            <span>Dec 2019 - Jan 2020 | Allahabad, IN</span>
          </div>
        </div>
</div>
    </section>
  );
};

export default Experience;
