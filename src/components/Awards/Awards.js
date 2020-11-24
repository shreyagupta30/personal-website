import React from "react";

const Awards = props => {
  return (
    <>
      <section id="awards" className="section scrollspy">
        <h3 className="page-title white-text teal">Awards</h3>
        <div className="container">
          <div className="row">
            {props.data.map(data => {
              return (
                <div className="col s12 m6">
                  <div className="card">
                    <div className="card-content">
                      <p>
                        <span className="card-title">
                          <a href=" " className="teal-text hoverline">
                            {data.title}
                          </a>
                        </span>
                      </p>
                      <p className="brown-text">{data.subTitle}</p>
                      <ul>
                        <li>{data.description}</li>
                      </ul>
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

export default Awards;
