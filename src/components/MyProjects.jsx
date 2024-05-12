import { Fade } from "react-awesome-reveal";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const StyledProject = styled.section`
  margin-top: 0rem;
  padding-bottom: 9.6rem;
  position: relative;

  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    background: url("hero-background-1-blur.webp");
    width: 110%;
    height: 110%;
    background-position: center;
    background-size: cover;
    z-index: -1;
    opacity: 0.5;
    transition: all 1s;
  }
`;

const CarouselBox = styled.div`
  padding: 1.8rem;
  display: grid;
  gap: 0.8rem;
`;

const ProjectInfo = styled.div`
  padding: 1.8rem;
  letter-spacing: -0.5px;
`;
const ProjectBox = styled.div`
  box-shadow: 0px 10px 20px -10px #2b2c2c25;

  display: grid;
`;

const IMG = styled.img`
  width: 100%;
  transition: all 0.5s;
  &:hover {
    transform: translateY(-0.6rem);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 2.4rem;
  color: #575858;
  border-bottom: 1px solid #57585833;
  transition: all 0.3s;
  letter-spacing: -1px;
  justify-self: center;
  width: fit-content;
  margin-bottom: 2.4rem;
  &:hover {
    border-bottom: 1px solid #57585880;
  }
`;

function MyProjects() {
  return (
    <StyledProject className="section" id="projects">
      <Fade direction="up" triggerOnce>
        <div className="container">
          <h2 className="heading-secondary">More of my own projects</h2>
          <Carousel
            arrows={false}
            showDots={true}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5s"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            <div>
              <CarouselBox>
                <h3 className="heading-tertiary section-heading-tertiary">
                  Robify Fullstack MusicApp
                </h3>
                <ProjectBox>
                  <Link
                    to="https://robify-robfrontend.netlify.app/"
                    target="_blank"
                  >
                    <IMG src="robify.webp" alt="Photo of website content" />
                  </Link>
                  <ProjectInfo>
                    <p className="section-p">React Query</p>
                    <p className="section-p">useState, useEffect, useReducer</p>
                    <p className="section-p">React Context</p>
                    <p className="section-p">Own API</p>
                    <p className="section-p">Fullstack App</p>
                    <p className="section-p">3rd party libraries</p>
                    <p className="section-p">
                      Feel free to explore the page on{" "}
                      <Link
                        className="project-github-link"
                        to="https://github.com/RobFrontend/robify"
                        target="_blank"
                      >
                        GitHub
                      </Link>{" "}
                      for Link closer look.
                    </p>
                  </ProjectInfo>
                  <StyledLink
                    to="https://robify-robfrontend.netlify.app/"
                    target="_blank"
                  >
                    Netlify
                  </StyledLink>
                </ProjectBox>
              </CarouselBox>
            </div>
            <div>
              <CarouselBox>
                <h3 className="heading-tertiary section-heading-tertiary">
                  RobShop
                </h3>
                <ProjectBox>
                  <Link
                    to="https://robshop-robfrontend.netlify.app/"
                    target="_blank"
                  >
                    <IMG src="robshop.webp" alt="Photo of website content" />
                  </Link>
                  <ProjectInfo>
                    <p className="section-p">custom hooks & local storage</p>
                    <p className="section-p">useState, useEffect, useRef</p>
                    <p className="section-p">Props</p>
                    <p className="section-p">Interactive shop</p>
                    <p className="section-p">Modern methods</p>
                    <p className="section-p">OOP</p>
                    <p className="section-p">
                      Feel free to explore the page on{" "}
                      <Link
                        className="project-github-link"
                        to="https://github.com/RobFrontend/REACT-RobShop-Shop"
                        target="_blank"
                      >
                        GitHub
                      </Link>{" "}
                      for Link closer look.
                    </p>
                  </ProjectInfo>
                  <StyledLink
                    to="https://robshop-robfrontend.netlify.app/"
                    target="_blank"
                  >
                    Netlify
                  </StyledLink>
                </ProjectBox>
              </CarouselBox>
            </div>
            <div>
              <CarouselBox>
                <h3 className="heading-tertiary section-heading-tertiary">
                  Bulls Game
                </h3>
                <ProjectBox>
                  <Link
                    to="https://bulls-game-robfrontend.netlify.app/"
                    target="_blank"
                  >
                    <IMG src="bulls.webp" alt="Photo of website content" />
                  </Link>
                  <ProjectInfo>
                    <p className="section-p">DOM</p>
                    <p className="section-p">Game type</p>
                    <p className="section-p">Mathematics</p>
                    <p className="section-p">Observers</p>
                    <p className="section-p">Some modern methods</p>
                    <p className="section-p">Responsive design</p>
                    <p className="section-p">
                      Feel free to explore the page on{" "}
                      <Link
                        className="project-github-link"
                        to="https://github.com/RobFrontend/BULLS-Guess-Compare-Game"
                        target="_blank"
                      >
                        GitHub
                      </Link>{" "}
                      for Link closer look.
                    </p>
                  </ProjectInfo>
                  <StyledLink
                    to="https://bulls-game-robfrontend.netlify.app/"
                    target="_blank"
                  >
                    Netlify
                  </StyledLink>
                </ProjectBox>
              </CarouselBox>
            </div>
            <div>
              <CarouselBox>
                <h3 className="heading-tertiary section-heading-tertiary">
                  BookBlog Fullstack App
                </h3>
                <ProjectBox>
                  <Link
                    to="https://testbookblog-robfrontend.netlify.app/blog"
                    target="_blank"
                  >
                    <IMG src="bookblog.webp" alt="Photo of website content" />
                  </Link>
                  <ProjectInfo>
                    <p className="section-p">First Fullstack App</p>
                    <p className="section-p">React, React Query and more</p>
                    <p className="section-p">Styled Components</p>
                    <p className="section-p">Backend - API with Supabase</p>
                    <p className="section-p">Content management panel!</p>
                    <p className="section-p">
                      Feel free to explore the page on{" "}
                      <Link
                        className="project-github-link"
                        to="https://github.com/RobFrontend/Fullstack-blog"
                        target="_blank"
                      >
                        GitHub
                      </Link>{" "}
                      for Link closer look.
                    </p>
                  </ProjectInfo>
                  <StyledLink
                    to="https://testbookblog-robfrontend.netlify.app/blog"
                    target="_blank"
                  >
                    Netlify
                  </StyledLink>
                </ProjectBox>
              </CarouselBox>
            </div>
            {/* <div>
              <CarouselBox>
                <h3 className="heading-tertiary section-heading-tertiary">
                  City- LA California
                </h3>
                <ProjectBox>
                  <Link
                    to="https://city-robfrontend.netlify.app/"
                    target="_blank"
                  >
                    <IMG src="city.webp" alt="Photo of website content" />
                  </Link>
                  <ProjectInfo>
                    <p className="section-p">Advanced DOM</p>
                    <p className="section-p">Intervals & timeouts</p>
                    <p className="section-p">Lot of event handlers</p>
                    <p className="section-p">Modern methods</p>
                    <p className="section-p">Responsive design</p>
                    <p className="section-p">
                      Feel free to explore the page on{" "}
                      <Link
                        className="project-github-link"
                        to="https://github.com/RobFrontend/City"
                        target="_blank"
                      >
                        GitHub
                      </Link>{" "}
                      for Link closer look.
                    </p>
                  </ProjectInfo>
                  <StyledLink
                    to="https://city-robfrontend.netlify.app/"
                    target="_blank"
                  >
                    Netlify
                  </StyledLink>
                </ProjectBox>
              </CarouselBox>
            </div> */}
            <div>
              <CarouselBox>
                <h3 className="heading-tertiary section-heading-tertiary">
                  Karkonosze Mountains
                </h3>
                <ProjectBox>
                  <Link
                    to="https://karkonosze-robfrontend.netlify.app/"
                    target="_blank"
                  >
                    <IMG src="karkonosze.webp" alt="Photo of website content" />
                  </Link>
                  <ProjectInfo>
                    <p className="section-p">Advanced DOM</p>
                    <p className="section-p">Design rules</p>
                    <p className="section-p">HTML form</p>
                    <p className="section-p">Observers</p>
                    <p className="section-p">Responsive design</p>
                    <p className="section-p">
                      Feel free to explore the page on{" "}
                      <Link
                        className="project-github-link"
                        to="https://github.com/RobFrontend/Mountains-Page"
                        target="_blank"
                      >
                        GitHub
                      </Link>{" "}
                      for Link closer look.
                    </p>
                  </ProjectInfo>
                  <StyledLink
                    to="https://karkonosze-robfrontend.netlify.app/"
                    target="_blank"
                  >
                    Netlify
                  </StyledLink>
                </ProjectBox>
              </CarouselBox>
            </div>
            <div>
              <CarouselBox>
                <h3 className="heading-tertiary section-heading-tertiary">
                  Create User
                </h3>
                <ProjectBox>
                  <Link
                    to="https://createuser-robfrontend.netlify.app/"
                    target="_blank"
                  >
                    <IMG src="createuser.webp" alt="Photo of website content" />
                  </Link>
                  <ProjectInfo>
                    <p className="section-p">Architecture</p>
                    <p className="section-p">DOM</p>
                    <p className="section-p">ES6 Classes, OOP</p>
                    <p className="section-p">Local storage</p>
                    <p className="section-p">Modern methods</p>
                    <p className="section-p">
                      Feel free to explore the page on{" "}
                      <Link
                        className="project-github-link"
                        to="https://github.com/RobFrontend/CreateUserOOP-Architecture"
                        target="_blank"
                      >
                        GitHub
                      </Link>{" "}
                      for Link closer look.
                    </p>
                  </ProjectInfo>
                  <StyledLink
                    to="https://createuser-robfrontend.netlify.app/"
                    target="_blank"
                  >
                    Netlify
                  </StyledLink>
                </ProjectBox>
              </CarouselBox>
            </div>
          </Carousel>
        </div>
      </Fade>
    </StyledProject>
  );
}

export default MyProjects;
