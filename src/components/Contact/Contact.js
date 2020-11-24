import React from "react";

const Contact = () => {
  return (
    <>
      <section id="contact" className="section scrollspy full-height">
        <h3 className="page-title white-text teal">Contact</h3>
        <div className="container">
          <p>
            <a
              aria-label="Email Shubhank"
              href="mailto:saxena.shubhank.19@gmail.com"
              data-position="top"
              data-tooltip="Email Shubhank"
              className="btn-floating btn-large waves-effect waves-light brown tooltipped"
            >
              <i className="fa fa-envelope"></i>
              <a
                aria-label="Email Shubhank Saxena"
                href="mailto:saxena.shubank.19@gmail.com"
                className="hoverline"
              >
                saxena.shubhank.19@gmail.com
              </a>
            </a>
          </p>
          <p>
            <a
              aria-label="View Shubhank on GitHub"
              href="https://github.com/shubhank-saxena"
              data-position="top"
              data-tooltip="View Shubhank on GitHub"
              className="btn-floating btn-large waves-effect waves-light brown tooltipped"
            >
              <i className="fa fa-github"></i>
              <a
                aria-label="Shubhank on Github"
                href="https://github.com/shubhank-saxena"
                className="hoverline"
              >
                shubhank-saxena
              </a>
            </a>
          </p>
          <p>
            <a
              aria-label="View Shubhank on LinkedIn"
              href="https://www.linkedin.com/in/shubhank-saxena/"
              data-position="top"
              data-tooltip="View Shubhank on LinkedIn"
              className="btn-floating btn-large waves-effect waves-light brown tooltipped"
            >
              <i className="fa fa-linkedin"></i>
              <a
                aria-label="Shubhank on LinkedIn"
                href="https://www.linkedin.com/in/shubhank-saxena/"
                className="hoverline"
              >
                linkedin.com/in/shubhank-saxena/
              </a>
            </a>
          </p>
          <p>
            <a
              aria-label="View Shubhank on Medium"
              href="https://medium.com/@saxena.shubhank.19"
              data-position="top"
              data-tooltip="View Shubhank on Medium"
              className="btn-floating btn-large waves-effect waves-light brown tooltipped"
            >
              <i className="fa fa-medium"></i>
              <a
                aria-label="Shubhank on Medium"
                href="https://medium.com/@saxena.shubhank.19"
                className="hoverline"
              >
                @saxena.shubhank.19/
              </a>
            </a>
          </p>
          <p>
            <a
              aria-label="View Shubhank on Twitter"
              href="https://twitter.com/19_saxena"
              data-position="top"
              data-tooltip="View Shubhank on Twitter"
              className="btn-floating btn-large waves-effect waves-light brown tooltipped"
            >
              <i className="fa fa-twitter"></i>
              <a
                aria-label="Shubhank on Medium"
                href="https://twitter.com/19_saxena"
                className="hoverline"
              >
                @19_saxena
              </a>
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
