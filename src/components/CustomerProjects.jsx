import { Fade } from "react-awesome-reveal";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const StyledCustomer = styled.section`
  background-color: #161616;
  margin-bottom: 0rem;
  padding-bottom: 9.6rem;
  padding-top: 3.2rem;
  padding-left: 3.2rem;
  padding-right: 3.2rem;
`;

const CarouselBox = styled.div`
  padding: 1.8rem;
  display: grid;
  gap: 0.8rem;
`;

const ProjectText = styled.div`
  padding: 1.8rem;
`;

const IMG = styled.img`
  width: 100%;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.03);
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

function CustomerProjects() {
  return (
    <StyledCustomer id="customer">
      <Fade triggerOnce direction="up">
        <div className="container">
          <h2 className="heading-secondary">Customer experience</h2>

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
                  JeszczeStronaAlboSto
                </h3>
                <Link to="https://www.jeszczestronaalbosto.pl/" target="_blank">
                  <IMG
                    src="JeszczeStrona.webp"
                    alt="Photo of website content"
                  />
                </Link>
                <ProjectText>
                  <p className="section-p">
                    A full-stack website featuring a blog functionality. The
                    website comprises six subpages - five for regular users and
                    one for the admin. The admin section includes an edit
                    control panel enabling the site owner to add posts to the
                    synchronized blog database. Developed using React and Vite,
                    the application harnesses the power of React Query and
                    Styled Components, alongside various tools from the NPM
                    library, ensuring a dynamic and seamless user experience.
                  </p>
                </ProjectText>
                <StyledLink
                  to="https://www.jeszczestronaalbosto.pl/"
                  target="_blank"
                >
                  jeszczestronaalbosto.pl
                </StyledLink>
              </CarouselBox>
            </div>
            <div>
              <CarouselBox>
                <h3 className="heading-tertiary section-heading-tertiary">
                  BalanceBook
                </h3>
                <Link to="https://www.balancebook.pl/" target="_blank">
                  <IMG src="BalanceBook.webp" alt="Photo of website content" />
                </Link>
                <ProjectText>
                  <p className="section-p">
                    The website comprises six subpages and includes a privacy
                    policy. It boasts a contemporary, responsive design centered
                    around providing users with a serene and clear experience.
                    The site incorporates anchored navigation, simplifying user
                    navigation across its sub-pages.
                  </p>
                </ProjectText>
                <StyledLink to="https://www.balancebook.pl/" target="_blank">
                  balancebook.pl
                </StyledLink>
              </CarouselBox>
            </div>
            <div>
              <CarouselBox>
                <h3 className="heading-tertiary section-heading-tertiary">
                  Fotobudka360
                </h3>
                <Link to="https://robson-fotobudka360.pl/" target="_blank">
                  <IMG src="Robson.webp" alt="Photo of website content" />
                </Link>
                <ProjectText>
                  <p className="section-p">
                    The landing page adopts a technology and fun-oriented theme,
                    specifically targeting late-night partygoers. Sporting a
                    contemporary, cyber-inspired design, it strategically guides
                    users to connect with the service provider. Its full
                    responsiveness and mobile-friendly interface ensure
                    effortless and delightful navigation.
                  </p>
                </ProjectText>
                <StyledLink
                  to="https://robson-fotobudka360.pl/"
                  target="_blank"
                >
                  robson-fotobudka.pl
                </StyledLink>
              </CarouselBox>
            </div>
            <div>
              <CarouselBox>
                <h3 className="heading-tertiary section-heading-tertiary">
                  Biceps Legionowo
                </h3>
                <Link to="https://www.odzywki-legionowo.pl/" target="_blank">
                  <IMG src="Biceps.webp" alt="Photo of website content" />
                </Link>
                <ProjectText>
                  <p className="section-p">
                    A bespoke landing page, serving as a digital business card,
                    designed to showcase a premier bodybuilding store. Crafted
                    with React.js framework and powered by Vite, this page
                    delivers a seamless user experience. Leveraging various
                    functionalities from npm libraries including sliders,
                    navigation, and more, it ensures easy access to essential
                    store information and contact details. Whether you're
                    exploring the latest products or seeking expert advice, our
                    landing page provides a gateway to your fitness journey.
                  </p>
                </ProjectText>
                <StyledLink
                  to="https://www.odzywki-legionowo.pl/"
                  target="_blank"
                >
                  odzywki-legionowo.pl
                </StyledLink>
              </CarouselBox>
            </div>
          </Carousel>
        </div>
      </Fade>
    </StyledCustomer>
  );
}

export default CustomerProjects;
