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
          When I'm not working, I love <a href="https://www.goodreads.com/user/show/83816379-shreya-gupta">curling up with a good book</a>, <a href="https://unsplash.com/@shreyagupta30">capturing beautiful moments with my camera</a>. Recently, I've been trying my hand at urban sketching. 
          </p>
        </p>
        <p>
          <strong>Current Focus: </strong>
          <a
            aria-label="Backend Developer @WALL"
            href="https://www.wall.app/"
          > 
            Backend Developer @WALL
          </a>
        </p>
      </div>
    </section>
  );
};

export default About;
