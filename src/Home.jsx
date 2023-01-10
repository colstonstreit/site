import React from 'react';
import { GitHubIcon } from './Icons';

function About() {
  return <>
    <section className='about'>
      <h2>About Me</h2>
      <p>Hi. My name is Colston Streit, and I am a software engineer.</p>
      <p>
        I am currently a senior at Purdue University, where I am majoring in Computer Science and Mathematics, with concentrations in Software Engineering, Systems Software, Security, Algorithmic Foundations, and Computational Science and Engineering. I am also minoring in Statistics, Biological Sciences, and Psychology.
      </p>
      <p>
        I have specialized in backend work in both my work experiences and school projects, but I am actively working on improving my frontend skills. I am currently looking for a position for after I graduate in May 2023.
      </p>
      {/* <button>See My Resume</button>
      <button>See My Transcript</button> */}
    </section>
  </>
}

function Experience({children, title, company, start, end, location}) {
  return <div className='experience'>
    <h3>{title} - {company}</h3>
    <span className='experienceLocation'>{location}</span>, <span className='experienceTime'>{start} - {end}</span>
    {children}
  </div>
}

function RelevantExperience() {
  return <section className="relevantExperience">
    <h2>Relevant Work Experience</h2>
    <Experience title="Software Development Engineering Intern" company="iA" start="May 2022" end="November 2022" location="Indianapolis, IN / Remote">
      <ul>
        <li>Worked with another intern to create a simulator using C#/.NET and WinForms that interacted with a Microsoft SQL Server database to help QA more easily test one of iA’s new products</li>
        <li>Designed and implemented a GUI with C#/.NET and WPF for an existing console application</li>
        <li>Participated in daily Scrum/Agile practices with the rest of the team using Azure DevOps</li>
        <li>Developed and presented strategies to improve employee satisfaction to iA’s executive team</li>
      </ul>
    </Experience>
    <Experience title="Technology Coordinator / Supervisor" company="Information Technology at Purdue (ITaP)" start="August 2021" end="May 2022" location="West Lafayette, Indiana">
      <ul>
        <li>Assisted customers with various technological issues</li>
        <li>Ensured student employees across campus were adequately monitoring campus technology</li>
      </ul>
    </Experience>
    <Experience title="Computer Architecture Teaching Assistant" company="Purdue University" start="August 2021" end="December 2021" location="West Lafayette, Indiana">
      <ul>
        <li>Assisted students with circuit building and low-level C / ARM Assembly coding assignments</li>
        <li>Coordinated with the professor and other TAs to ensure a positive environment for student</li>
      </ul>
    </Experience>
  </section>
}

function FeaturedProject({title, tools, githubLink, liveLink, children}) {
  return <div className="featuredProject">
    <div className="projectTitleAndLinks">
      <h3 className="projectTitle">{title}</h3>
      <div className="projectLinks">
        <GitHubIcon dest={githubLink}/>
        {liveLink && <a href={liveLink}>See Live</a>}
      </div>
    </div>
    <div className="projectDescription">
      {children}
    </div>
    <ul className="projectTools">
      {tools.map(tool => (
        <li class="projectTool" key={tool}>{tool}</li>
      ))}
    </ul>
  </div>
}

function FeaturedProjects() {
  return <div className="featuredProjects">
    <FeaturedProject
      title="Scholasticate"
      tools={["Javascript", "HTML/CSS", "SQLite", "Flask", "Mapbox API"]}
      githubLink={"https://github.com/colstonstreit/CS-30700-Project-Scholasticate"}
      liveLink={""}>
      This was a group project for my Intro to Software Engineering course. As part of a team of six students, we created a social media site where students can easily find people who are in the same classes. Users can message each other, form study groups, and even see real-time location info using the Mapbox API for friend and study group locations.
    </FeaturedProject>
  </div>
}

function OtherProject() {
  return <div className="otherProject">

  </div>
}

function OtherProjects() {
  return <div className="otherProjects">
  </div>
}

function Projects() {
  return <section className="projects">
    <h2>Featured Projects</h2>
    <FeaturedProjects></FeaturedProjects>
    {/* <h2>Other Noteworthy Projects</h2>
    <OtherProjects></OtherProjects> */}
  </section>
}

function Contact() {
  return <>
  </>
}


export default function Home() {
  return <>
    <About></About>
    <RelevantExperience></RelevantExperience>
    <Projects></Projects>
    <Contact></Contact>
  </>
}