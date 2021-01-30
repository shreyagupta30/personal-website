import React from "react";

const Contact = () => {
  return (
    <>
      <section id="contact" className="section scrollspy full-height">
        <h3 className="page-title white-text teal">Contact</h3>
        <div className="container">
          <p>
            <a
              aria-label="Email Shreya"
              href="mailto:shreyagupta3011@gmail.com"
              data-position="top"
              data-tooltip="Email Shreya"
              className="btn-floating btn-large waves-effect waves-light brown tooltipped"
            >
              <i className="fa fa-envelope"></i>
              <a
                aria-label="Email Shreya Gupta"
                href="mailto:shreyagupta3011@gmail.com"
                className="hoverline"
              >
                shreyagupta3011@gmail.com
              </a>
            </a>
          </p>
          <p>
            <a
              aria-label="Visit Shreya on GitHub"
              href="https://github.com/shreyagupta30"
              data-position="top"
              data-tooltip="Visit Shreya on GitHub"
              className="btn-floating btn-large waves-effect waves-light brown tooltipped"
            >
              <i className="fa fa-github"></i>
              <a
                aria-label="Shreya on Github"
                href="https://github.com/shreyagupta30"
                className="hoverline"
              >
                shreyagupta30
              </a>
            </a>
          </p>
//           <p>
//             <a
//               aria-label="View Shubha on LinkedIn"
//               href="https://www.linkedin.com/in/shubhank-saxena/"
//               data-position="top"
//               data-tooltip="View Shubhank on LinkedIn"
//               className="btn-floating btn-large waves-effect waves-light brown tooltipped"
//             >
//               <i className="fa fa-linkedin"></i>
//               <a
//                 aria-label="Shubhank on LinkedIn"
//                 href="https://www.linkedin.com/in/shubhank-saxena/"
//                 className="hoverline"
//               >
//                 linkedin.com/in/shubhank-saxena/
//               </a>
//             </a>
//           </p>
//           <p>
//             <a
//               aria-label="View Shreya on Medium"
//               href="https://medium.com/@saxena.shubhank.19"
//               data-position="top"
//               data-tooltip="View Shubhank on Medium"
//               className="btn-floating btn-large waves-effect waves-light brown tooltipped"
//             >
//               <i className="fa fa-medium"></i>
//               <a
//                 aria-label="Shubhank on Medium"
//                 href="https://medium.com/@saxena.shubhank.19"
//                 className="hoverline"
//               >
//                 @saxena.shubhank.19/
//               </a>
//             </a>
//           </p>
          <p>
            <a
              aria-label="Visit Shreya on Twitter"
              href="https://twitter.com/shreya_gupta30"
              data-position="top"
              data-tooltip="Visit Shreya on Twitter"
              className="btn-floating btn-large waves-effect waves-light brown tooltipped"
            >
              <i className="fa fa-twitter"></i>
              <a
                aria-label="Shreya on Twitter"
                href="https://twitter.com/shreya_gupta30"
                className="hoverline"
              >
                @shreya_gupta30
              </a>
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
