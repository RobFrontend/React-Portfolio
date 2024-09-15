import { Fade } from "react-awesome-reveal";
import styled from "styled-components";

const AboutSection = styled.section``;

function About() {
  return (
    <AboutSection className="section" id="about">
      <div className="container">
        <Fade direction="up" triggerOnce>
          <h2 className="heading-secondary">About me</h2>
          <h3 className="heading-tertiary section-heading-tertiary">Begins</h3>
          <p className="section-p">
            My journey into frontend development began in early 2023, though my
            interest in technology goes back to high school when I studied as an
            IT technician. Back then, I dabbled in Photoshop as an amateur,
            driven by a lifelong passion for creating—whether it was drawing as
            a child or exploring music during my teenage years. This creative
            spark naturally evolved into my interest in frontend development.
          </p>
          <h3 className="heading-tertiary section-heading-tertiary">
            My Educational Journey
          </h3>
          <p className="section-p">
            I started by mastering the basics HTML and CSS creating personal
            projects like a basketball player profile and a mountain-themed
            website. From there, I dove into JavaScript, working to create
            responsive websites with clean, readable designs. My first client
            project, a corporate accounting website for BalanceBook, was a major
            milestone that confirmed I was on the right track.
          </p>
          <p className="section-p">
            As I grew more confident with JavaScript, I worked on projects like
            'Design Changer' and 'Bulls Game,' where I combined my love for
            basketball with interactive features. My skills advanced, and I
            began implementing more complex functions, as seen in the 'City-LA,
            California' project. This progress motivated me to take on bigger
            challenges, like developing a website for a '360 Photo Booth
            Company.'
          </p>
          <p className="section-p">
            To further elevate my work, I incorporated Object-Oriented
            Programming (OOP), asynchronous techniques, and modern functional
            programming. One project that stands out is the 'Create User'
            feature, which uses local storage to save user data—showcasing my
            growing expertise. Recently, I've also gained proficiency in React,
            using it in projects like 'RobShop,' further strengthening my
            frontend development skills.
          </p>
          <h3 className="heading-tertiary section-heading-tertiary">Now</h3>
          <p className="section-p">
            I am now working with Next.js and Tailwind, which I utilized in
            building a client blog website. These tools allow me to develop more
            dynamic and scalable applications. SCSS is the next skill on my
            learning path, as I continue to refine my styling techniques.
            Aspiring to become a full-stack developer, I'm currently working on
            projects like the full-stack app 'BookBlog' and constantly pushing
            myself to new heights in both frontend and backend technologies.
          </p>
        </Fade>
      </div>
    </AboutSection>
  );
}

export default About;
