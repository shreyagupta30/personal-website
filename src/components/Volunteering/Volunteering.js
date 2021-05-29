import React from "react";

const Volunteering = () => {
  return (
    <section id="volunteering" className="section scrollspy">
      <h3 className="page-title white-text teal">Volunteering Experience</h3>
      <div className="container">
        <div className="card">
          <div className="card-content">
            <div className="row">
              <div className="col s12 m2">
                <a href="https://developers.google.com/community/dsc">
                  <img
                    alt="DSC"
                    src="data:image/png;base64,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"
                    className="responsive-img center-block"
                  />
                </a>
              </div>
              <div className="col s12 m10">
                <p>
                  <span className="card-title">
                    <a
                      href="https://dsctiet.tech"
                      className="teal-text hoverline"
                    >
                      DSC TIET (by Google Developers)
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className="role brown-text">Core Member</div>
            <p>
              <em className="grey-text">
Software Development Division Head
              </em>
            </p>
            <ul>
              <li>
                Conducted CS101, and intro to the various fields of CS for
                freshmen students.
              </li>
              <li>
                Conducted various Alexa and Google Assistant Development
                workshops
              </li>
              <li>
                Conducted informative sessions on various open source programs.
              </li>
              <li>
                Conducted full fledged programming bootcamps for senior and
                sophomore students.
              </li>
              <li>
                Started Podcast series with tech experts, named "RawTalent" to
                bridge down indsutry and academic world gap.
              </li>
            </ul>
          </div>
          <div className="card-action">
            <span>June 2019 - Aug 2020 | Patiala, IN</span>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="row">
              <div className="col s12 m2">
                <a href="https://www.girlscript.tech/home">
                  <img
                    alt="GirlScript"
                    src="https://pbs.twimg.com/profile_images/1257536509978107905/Px8so8Ny_400x400.jpg"
                    className="responsive-img center-block"
                  />
                </a>
              </div>
              <div className="col s12 m10">
                <p>
                  <span className="card-title">
                    <a
                      href="https://www.girlscript.tech/home"
                      className="teal-text hoverline"
                    >
                      GirlScript Foundation, Patiala
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className="role brown-text">Founder And Lead</div>
            <p>
              <em className="grey-text">
                Founder of GirlScript Patiala team.
              </em>
            </p>
            <ul>
              <li>
                Conducted girls-only hackathon to encourage their participation.
              </li>
              <li>Conducted expert talks by various industry experts.</li>
            </ul>
          </div>
          <div className="card-action">
            <span>June 2019 - May 2020 | Patiala, IN</span>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="row">
              <div className="col s12 m2">
                <a href="https://hacktiet.devfolio.co/">
                  <img
                    alt="HackTIET"
                    src="https://pbs.twimg.com/profile_images/1180402333127036928/wc3bpi-A.jpg"
                    className="responsive-img center-block"
                  />
                </a>
              </div>
              <div className="col s12 m10">
                <p>
                  <span className="card-title">
                    <a
                      href="https://hacktiet.devfolio.co/"
                      className="teal-text hoverline"
                    >
                      HackTIET
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className="role brown-text">Head Organizer</div>
            <p>
              <em className="grey-text">
                Conducted the biggest hackathon of North India.
              </em>
            </p>
            <ul>
              <li>
                50+ participants from 15+ cities participated in the hack.
              </li>
              <li>Major sponsors like Github, Wolfram Alpha, Zulip, etc.</li>
            </ul>
          </div>
          <div className="card-action">
            <span>Nov 2019 - Nov 2019 | Patiala, IN</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteering;
