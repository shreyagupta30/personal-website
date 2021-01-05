import React from "react";

const OpenSource = props => {
  return (
    <>
      <section id="open-source" className="section scrollspy">
        <h3 className="page-title white-text teal">Open Source</h3>
        <div className="container">
          <div className="row">
                <div className="col s12 m6 l4">
                  <div className="card medium">
                    <div className="card-image waves-effect waves-block waves-light">
                      <img
                        src= "https://raw.githubusercontent.com/docker-library/docs/520519ad7db3ea9fd5d3590e836c839a0ffd6f19/julia/logo.png"
                        className="activator"
                      />
                    </div>
                    <div className="card-content">
                      <span className="card-title activator teal-text hoverline">
                        Meshes.jl - JuliaGeometry
                        <i className="mdi-navigation-more-vert right"></i>
                      </span>
                      <p>Contributed by writing tests for different functions of Meshes.jl</p>
                    </div>
                    <div className="card-reveal">
                      <span className="card-title brown-text">
                        Learnings
                        <i className="mdi-navigation-close right"></i>
                      </span>
                      <ul>
                            <li>
                              <strong>unit testing</strong>
                            </li>
                            <li>
                              <strong>Julia Language</strong>
                            </li>
                            <li>
                              <strong>geometry</strong>
                            </li>
                      </ul>
                      <div className="card-action">
                        <a
                          aria-label="Github Repo"
                          href="https://github.com/JuliaGeometry/Meshes.jl/commits?author=shreyagupta30"
                          target="_blank"
                          data-position="top"
                          data-tooltip="View Source"
                          className="btn-floating btn-large waves-effect waves-light brown tooltipped"
                        >
                          <i className="fa fa-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col s12 m6 l4">
                  <div className="card medium">
                    <div className="card-image waves-effect waves-block waves-light">
                      <img
                        src= "https://raw.githubusercontent.com/docker-library/docs/520519ad7db3ea9fd5d3590e836c839a0ffd6f19/julia/logo.png"
                        className="activator"
                      />
                    </div>
                    <div className="card-content">
                      <span className="card-title activator teal-text hoverline">
                        Meshes.jl - JuliaGeometry
                        <i className="mdi-navigation-more-vert right"></i>
                      </span>
                      <p>Contributed by writing tests for different functions of Meshes.jl</p>
                    </div>
                    <div className="card-reveal">
                      <span className="card-title brown-text">
                        Learnings
                        <i className="mdi-navigation-close right"></i>
                      </span>
                      <ul>
                            <li>
                              <strong>unit testing</strong>
                            </li>
                            <li>
                              <strong>Julia Language</strong>
                            </li>
                            <li>
                              <strong>geometry</strong>
                            </li>
                      </ul>
                      <div className="card-action">
                        <a
                          aria-label="Github Repo"
                          href="https://github.com/JuliaGeometry/Meshes.jl/commits?author=shreyagupta30"
                          target="_blank"
                          data-position="top"
                          data-tooltip="View Source"
                          className="btn-floating btn-large waves-effect waves-light brown tooltipped"
                        >
                          <i className="fa fa-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OpenSource;
