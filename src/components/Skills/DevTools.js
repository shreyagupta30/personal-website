import React from "react";

const DevSkills = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <h4 className="brown-text light">Development Tools</h4>
          <div className="row text-center">

                <div className="col s3 m2">
                  <img alt="" src="https://shubhank.codes/media/images/icons8-travis-ci-144.png" className="responsive-img" />
                  <br />
                  TravisCI
                </div>

                <div className="col s3 m2">
                <img alt="" src="https://shubhank.codes/media/images/icons8-docker-144.png" className="responsive-img" />
                  <br />
                  Docker
                </div>

                <div className="col s3 m2">
                <img alt="" src="https://shubhank.codes/media/images/vscode.png" className="responsive-img" />
                  <br />
                  VSCode
                </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default DevSkills;
