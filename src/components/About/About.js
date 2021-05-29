import React from "react";

const About = () => {
  return (
    <section id="about" className="section scrollspy">
      <h3 className="page-title white-text teal">About</h3>
      <div className="container flow-text">
        <blockquote>
          <h2>
            Mission-driven developer with a passion for building robust 
            backend systems and promoting diversity in STEM.
          </h2>
        </blockquote>
        <p>
          I’ve always sought out opportunities and challenges that are
          meaningful to me. Although my academic path has taken many twists and
          turns, I've never stopped engaging my passion to help others and solve
          problems. I owe my career to FOSS community. Working on all these projects 
          has helped me grow tremendously as a developer. I care about building impactful, 
          accessible and inclusive tech for everyone. I care deeply about diversity and inclusion.💜
        </p>
        <p>
          As a developer, I enjoy using my obsessive attention to
          detail, my unequivocal love for making things, and my mission-driven
          work ethic in my day to day to make it impactful. 
          <p>
          Outside of work, you can find me painting beautiful scenaries and baking delicacies. 
          </p>
        </p>
        <p>
          <strong>Current Focus: </strong>
          <a
            aria-label="LF Networking Mentorship"
            href="https://mentorship.lfx.linuxfoundation.org/project/aad4229f-704f-4230-a59e-db8fd0f5869e"
          > 
            LF Networking
          </a>
        </p>
      </div>
    </section>
  );
};

export default About;
