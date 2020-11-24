import React from "react";

const About = () => {
  return (
    <section id="about" className="section scrollspy">
      <h3 className="page-title white-text teal">About</h3>
      <div className="container flow-text">
        <blockquote>
          <h2>
            Mission-driven full stack developer and NLP and Deep Learning
            Practitioner with a passion for thoughtful Product Design,
            collaboration, and teaching.
          </h2>
        </blockquote>
        <p>
          I’ve always sought out opportunities and challenges that are
          meaningful to me. Although my academic path has taken many twists and
          turns, I've never stopped engaging my passion to help others and solve
          problems.
        </p>
        <p>
          As a web and AI developer, I enjoy using my obsessive attention to
          detail, my unequivocal love for making things, and my mission-driven
          work ethic to literally change the world. That's why I’m excited to
          make dent in this universe!
        </p>
        <p>
          <strong>Current Focus</strong>:&nbsp;
          <a
            aria-label="Building my own OS"
            href="https://github.com/shubhank-saxena/Fenix-OS"
          >
            FenixOS
          </a>
          &nbsp;//&nbsp;
          <a
            aria-label="My React Journey"
            href="https://github.com/shubhank-saxena/My-Portfolio"
          >
            React
          </a>
          &nbsp;//&nbsp;
          <a
            aria-label="For the love of Deep Learning and NLP"
            href="https://github.com/shubhank-saxena/dnn-speech-recognizer"
          >
            NLP/DL
          </a>
        </p>
      </div>
    </section>
  );
};

export default About;
