import React from "react";

const LanguageSkills = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <h4 className="brown-text light">Languages</h4>
          <div className="row text-center">

                <div className="col s3 m2">
                  <img alt="" src="https://shubhank.codes/media/images/icons8-c-programming-144.png" className="responsive-img" />
                  <br />
                  C
                </div>

                <div className="col s3 m2">
                  <img alt="" src="https://shubhank.codes/media/images/icons8-c-144.png" className="responsive-img" />
                  <br />
                  C++
                </div>

                <div className="col s3 m2">
                  <img alt="" src="https://shubhank.codes/media/images/icons8-python-144.png" className="responsive-img" />
                  <br />
                  Python
                </div>

                <div className="col s3 m2">
                  <img alt="" src="https://shubhank.codes/media/images/icons8-javascript-144.png" className="responsive-img" />
                  <br />
                  Javascript
                </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default LanguageSkills;
