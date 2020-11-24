import React from "react";

const OpenSource = props => {
  return (
    <>
      <section id="open-source" className="section scrollspy">
        <h3 className="page-title white-text teal">Open Source</h3>
        <div className="container">
          <div className="row">
            {props.data.map(data => {
              return (
                <div className="col s12 m6 l4">
                  <div className="card medium">
                    <div className="card-image waves-effect waves-block waves-light">
                      <img
                        alt={data.title}
                        src={data.image}
                        className="activator"
                      />
                    </div>
                    <div className="card-content">
                      <span className="card-title activator teal-text hoverline">
                        {data.title}
                        <i className="mdi-navigation-more-vert right"></i>
                      </span>
                      <p>{data.description}</p>
                    </div>
                    <div className="card-reveal">
                      <span className="card-title brown-text">
                        Learnings
                        <i className="mdi-navigation-close right"></i>
                      </span>
                      <ul>
                        {data.accomplishments.map(accomp => {
                          return (
                            <li>
                              <strong>{accomp.accomplishment}</strong>
                            </li>
                          );
                        })}
                      </ul>
                      <div className="card-action">
                        <a
                          aria-label="Github Repo"
                          href={data.githubLink}
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
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default OpenSource;
