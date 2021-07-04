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
                        src= "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Fedora_logo.svg/1200px-Fedora_logo.svg.png"
                        className="activator"
                      />
                    </div>
                    <div className="card-content">
                      <span className="card-title activator teal-text hoverline">
                        Nmstate/Nmstate
                        <i className="mdi-navigation-more-vert right"></i>
                      </span>
                      <p>Contributed by adding Wireguard support</p>
                    </div>
                    <div className="card-reveal">
                      <span className="card-title brown-text">
                        Learnings
                        <i className="mdi-navigation-close right"></i>
                      </span>
                      <ul>
                            <li>
                              <strong>Python Development, Unit testing - Pytest</strong>
                            </li>
                            <li>
                              <strong>Free software workflow</strong>
                            </li>
                            <li>
                              <strong> Linux networking, working of declarative API </strong>
                            </li>
                      </ul>
                      <div className="card-action">
                        <a
                          aria-label="Github Repo"
                          href="https://github.com/nmstate/nmstate/pull/1450"
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
                        src= "https://www.jaegertracing.io/img/jaeger-icon-color.png"
                        className="activator"
                      />
                    </div>
                    <div className="card-content">
                      <span className="card-title activator teal-text hoverline">
                        jaegertracing/jaeger-analytics-java
                        <i className="mdi-navigation-more-vert right"></i>
                      </span>
                      <p>Contributed by adding Documentation for spinning up notebook</p>
                    </div>
                    <div className="card-reveal">
                      <span className="card-title brown-text">
                        Learnings
                        <i className="mdi-navigation-close right"></i>
                      </span>
                      <ul>
                            <li>
                              <strong>observability, with a focus on distributed tracing.</strong>
                            </li>
                            <li>
                              <strong>Jaeger analytics, Jaeger tracing data</strong>
                            </li>
                            <li>
                              <strong>Java,Python</strong>
                            </li>
                      </ul>
                      <div className="card-action">
                        <a
                          aria-label="Github Repo"
                          href="https://github.com/jaegertracing/jaeger-analytics-java/pull/53"
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
                        src= "https://avatars.githubusercontent.com/u/49998002?s=200&v=4"
                        className="activator"
                      />
                    </div>
                    <div className="card-content">
                      <span className="card-title activator teal-text hoverline">
                      open-telemetry/opentelemetry-python
                        <i className="mdi-navigation-more-vert right"></i>
                      </span>
                      <p></p>
                    </div>
                    <div className="card-reveal">
                      <span className="card-title brown-text">
                        Learnings
                        <i className="mdi-navigation-close right"></i>
                      </span>
                      <ul>
                            <li>
                              <strong>Python</strong>
                            </li>
                            <li>
                              <strong>Python opentelemetry implementation</strong>
                            </li>
                      </ul>
                      <div className="card-action">
                        <a
                          aria-label="Github Repo"
                          href="https://github.com/open-telemetry/opentelemetry-python/pull/1242"
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
                        src= "https://avatars.githubusercontent.com/u/28545596?s=200&v=4"
                        className="activator"
                      />
                    </div>
                    <div className="card-content">
                      <span className="card-title activator teal-text hoverline">
                      jaegertracing/documentation
                        <i className="mdi-navigation-more-vert right"></i>
                      </span>
                      <p></p>
                    </div>
                    <div className="card-reveal">
                      <span className="card-title brown-text">
                        Learnings
                        <i className="mdi-navigation-close right"></i>
                      </span>
                      <ul>
                            <li>
                              <strong>Hugo, Javascript, SCSS</strong>
                            </li>
                            <li>
                              <strong>Version Control Sytem</strong>
                            </li>
                      </ul>
                      <div className="card-action">
                        <a
                          aria-label="Github Repo"
                          href="https://github.com/jaegertracing/documentation/pull/449"
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
                              <strong>Julia Language</strong>
                            </li>
                            <li>
                              <strong>Unit testing in Julia lang</strong>
                            </li>
                            <li>
                              <strong>Computational Geometry</strong>
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
                        src= "https://avatars.githubusercontent.com/u/50071446?s=200&v=4"
                        className="activator"
                      />
                    </div>
                    <div className="card-content">
                      <span className="card-title activator teal-text hoverline">
                      scalability4all/voice-enabled-chatbot
                        <i className="mdi-navigation-more-vert right"></i>
                      </span>
                      <p></p>
                    </div>
                    <div className="card-reveal">
                      <span className="card-title brown-text">
                        Learnings
                        <i className="mdi-navigation-close right"></i>
                      </span>
                      <ul>
                            <li>
                              <strong>Python, FLask</strong>
                            </li>
                            <li>
                              <strong>Version Control Sytem</strong>
                            </li>
                      </ul>
                      <div className="card-action">
                        <a
                          aria-label="Github Repo"
                          href="https://github.com/OpenGenus/cosmos/commits?author=shreyagupta30"
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
                        src= "https://avatars.githubusercontent.com/u/18506046?s=200&v=4"
                        className="activator"
                      />
                    </div>
                    <div className="card-content">
                      <span className="card-title activator teal-text hoverline">
                        OpenGenus/Cosmos
                        <i className="mdi-navigation-more-vert right"></i>
                      </span>
                      <p>Contributed by adding techincal blogs and example codes for different topics in languages like C, C++ and Python for cosmos</p>
                    </div>
                    <div className="card-reveal">
                      <span className="card-title brown-text">
                        Learnings
                        <i className="mdi-navigation-close right"></i>
                      </span>
                      <ul>
                            <li>
                              <strong>Concepts of programming languages - C, C++, Python</strong>
                            </li>
                            <li>
                              <strong>Version Control Sytem</strong>
                            </li>
                            <li>
                              <strong>Documentation</strong>
                            </li>
                      </ul>
                      <div className="card-action">
                        <a
                          aria-label="Github Repo"
                          href="https://github.com/OpenGenus/cosmos/commits?author=shreyagupta30"
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
