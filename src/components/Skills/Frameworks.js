import React from "react";

const FrameworkSkills = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <h4 className="brown-text light">Frameworks</h4>
          <div className="row text-center">

                <div className="col s3 m2">
                  <img alt="" src="https://shubhank.codes/media/images/icons8-django-144.png" className="responsive-img" />
                  <br />
                  Django
                </div>

                <div className="col s3 m2">
                  <img alt="" src="https://shubhank.codes/media/images/flask.png" className="responsive-img" />
                  <br />
                  Flask
                </div>

                <div className="col s3 m2">
                  <img alt="" src="https://shubhank.codes/media/images/icons8-react-native-144.png" className="responsive-img" />
                  <br />
                  React
                </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default FrameworkSkills;
