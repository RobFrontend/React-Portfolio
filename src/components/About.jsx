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
            My journey into frontend development began in the first quarter of
            2023. My initial encounter with programming traces back to high
            school, where I pursued an IT technician profile less than a decade
            ago. It was during this time that I delved into the world of
            Photoshop, initially as an amateur enthusiast. My inclination
            towards creation has been a constant in my life. From childhood, I
            found joy in sketching, a passion that evolved into exploring music
            during my teenage years. This innate drive to create has seamlessly
            transitioned into my pursuit of frontend development.
          </p>
          <h3 className="heading-tertiary section-heading-tertiary">
            My Educational Journey
          </h3>
          <p className="section-p">
            During the initial months, I focused on mastering HTML and CSS. This
            effort led to the creation of several personal projects, such as the
            basketball player's page and the mountain-themed page. Subsequently,
            I centered my attention on JavaScript, while continuously advancing
            my proficiency in HTML and CSS to attain the highest level of
            mastery. The primary objective was to craft a diverse range of
            responsive websites featuring rich, clean, and easily readable
            designs. This achievement came to fruition with my first client win.
            Crafting the BalanceBook corporate accounting website was not only
            exhilarating but also affirmed that I was progressing in the right
            direction.
          </p>
          <p className="section-p">
            As I delved deeper into JavaScript, I gained increasing confidence
            in integrating code with HTML and CSS. Among my initial projects was
            the 'Design Changer', which served as a foundational piece for
            creating the 'Bulls Game.' This interactive project compared heights
            between individuals and basketball players, alongside a basketball
            guessing game (yes, my love for basketball shines through). As my
            proficiency grew, I expanded my repertoire by crafting diverse and
            intricate methods and functions. The 'City-LA, California' project
            stands as a testament to this growth, bolstering my confidence to
            undertake a new challenge: developing a website for a '360 Photo
            Booth Company'.
          </p>
          <p className="section-p">
            I made a conscious decision to elevate my coding standards by
            implementing Object-Oriented Programming, asynchronous techniques,
            and modern functional programming methodologies to enhance the
            quality and efficiency of my work. My journey culminated in the
            'Create User' project, leveraging the browser's local storage to
            store user data, a testament to my mastery of these advanced
            techniques. I am continuously striving to enhance my code further.
          </p>
          <h3 className="heading-tertiary section-heading-tertiary">Now</h3>
          <p className="section-p">
            I find myself in the intermediate/advanced phase of delving into
            React (specifics about 'RobShop' are outlined in the projects
            section), and I am actively exploring various development
            opportunities. SCSS is the next skill on my learning agenda. As I
            aspire to evolve into a full-stack developer (fullstack app
            'BookBlog' is outlined in the project section as well), my
            unwavering motivation propels me to consistently elevate my skills
            and set ambitious standards.
          </p>
        </Fade>
      </div>
    </AboutSection>
  );
}

export default About;
