import React from "react";
import { GitHubIcon, SeeLiveIcon } from "./Icons";

function LinkButton({ text, link }) {
  return (
    <button
      onClick={() => {
        window.open(link, "_blank");
        return false;
      }}
    >
      {text}
    </button>
  );
}

function About() {
  return (
    <>
      <section className="about">
        <h2>About Me</h2>
        <p>Hi! My name is Colston Streit, and I am a software engineer.</p>
        <p>
          I am currently a senior at Purdue University, where I am majoring in Computer Science and Mathematics, with
          concentrations in Software Engineering, Systems Software, Security, Algorithmic Foundations, and Computational
          Science and Engineering. I am also minoring in Statistics, Biological Sciences, and Psychology.
        </p>
        <p>
          I have specialized in backend work in both my work experiences and school projects, but I am actively working
          on improving my frontend skills. I am currently looking for a position for after I graduate in May 2023.
        </p>
        <div className="linkButtons">
          <LinkButton
            text="See My Resume"
            link="https://drive.google.com/file/d/1L7RFFOuvD2Uw1KL0K6oA8j5kxQZol2tn/view?usp=share_link"
          />
          <LinkButton
            text="See My Transcript"
            link="https://drive.google.com/file/d/1f7s7ZzVjoKKtCFHsQIxFUprbOt3pinDP/view?usp=share_link"
          />
        </div>
      </section>
    </>
  );
}

function Experience({ children, title, company, companyLink, time }) {
  return (
    <div className="experience">
      <h3>
        {title} -{" "}
        <a href={companyLink} target="_blank" rel="noopener noreferrer">
          {company}
        </a>
      </h3>
      <span className="experienceTime">{time}</span>
      {children}
    </div>
  );
}

function RelevantExperience() {
  return (
    <section className="relevantExperience">
      <h2>Relevant Work Experience</h2>
      <Experience
        title="Software Engineering Intern"
        company="iA"
        companyLink="https://iarx.com/"
        time="May - November 2022"
      >
        <ul>
          <li>
            Worked with another intern to create a simulator using C#/.NET and WinForms that interacted with a Microsoft
            SQL Server database to help QA more easily test one of iA’s new products
          </li>
          <li>Designed and implemented a GUI with C#/.NET and WPF for an existing console application</li>
          <li>Participated in daily Scrum/Agile practices with the rest of the team using Azure DevOps</li>
          <li>Developed and presented strategies to improve employee satisfaction to iA’s executive team</li>
        </ul>
      </Experience>
      <Experience
        title="Technology Supervisor"
        company="ITaP"
        companyLink="https://www.itap.purdue.edu/about/index.html"
        time="August 2021 - May 2022, January 2023 - Present"
      >
        <ul>
          <li>Assisted customers with various technological issues</li>
          <li>Ensured student employees across campus were adequately monitoring campus technology</li>
        </ul>
      </Experience>
      <Experience
        title="Computer Architecture TA"
        company="Purdue CS"
        companyLink="https://www.cs.purdue.edu/index.html"
        time="August - December 2021"
      >
        <ul>
          <li>Assisted students with circuit building and low-level C / ARM Assembly coding assignments</li>
          <li>Coordinated with the professor and other TAs to ensure a positive environment for student</li>
        </ul>
      </Experience>
    </section>
  );
}

function FeaturedProject({ title, tools, githubLink, liveLink, children }) {
  return (
    <div className="featuredProject">
      <div className="projectTitleAndLinks">
        <h3 className="projectTitle">{title}</h3>
        <div className="projectLinks">
          <GitHubIcon dest={githubLink} />
          {liveLink && <SeeLiveIcon dest={liveLink} />}
        </div>
      </div>
      <div className="projectDescription">{children}</div>
      <ul className="projectTools">
        {tools.map((tool) => (
          <li className="projectTool" key={tool}>
            {tool}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FeaturedProjects() {
  return (
    <div className="featuredProjects">
      <FeaturedProject
        title="Grade Calculator"
        tools={["Javascript", "HTML/CSS", "MongoDB", "Node", "Express"]}
        githubLink={"https://github.com/colstonstreit/GradeCalculator"}
        liveLink={"https://colstonstreit.github.io/GradeCalculator/"}
      >
        This is an active project that I've been wanting to develop for a long time. My motivation for it was that
        existing grade calculators often do not account for more complicated scoring like being able to drop the lowest
        homework or include extra credit without forcing the user to calculate these things themselves (which is not the
        point). In addition to allowing users to calculate the scores they need, I also plan to offer a way for users to
        easily visualize their final grade as a function of various combinations of scores. Currently the backend is not
        hosted, but I've designed it so users can work offline as well. Please note additionally that this is very much
        a work in progress (I am aware that the UI is, quite frankly, terrible).
      </FeaturedProject>
      <FeaturedProject
        title="Scholasticate"
        tools={["Javascript", "HTML/CSS", "SQLite", "Flask", "Mapbox API"]}
        githubLink={"https://github.com/colstonstreit/CS-30700-Scholasticate"}
        liveLink={""}
      >
        This was a group project for my Intro to Software Engineering course. As part of a team of six students, we
        created a social media site where students can easily find people who are in the same classes. Users can message
        each other, form study groups, and even see real-time location info using the Mapbox API for friend and study
        group locations.
      </FeaturedProject>
    </div>
  );
}

// function OtherProject() {
//   return <div className="otherProject"></div>;
// }

// function OtherProjects() {
//   return <div className="otherProjects"></div>;
// }

function Projects() {
  return (
    <section className="projects">
      <h2>Featured Projects</h2>
      <FeaturedProjects></FeaturedProjects>
      {/* <h2>Other Noteworthy Projects</h2>
    <OtherProjects></OtherProjects> */}
    </section>
  );
}

function Contact() {
  return <></>;
}

export default function Home() {
  return (
    <>
      <About></About>
      <RelevantExperience></RelevantExperience>
      <Projects></Projects>
      <Contact></Contact>
    </>
  );
}
