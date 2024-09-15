import styled from "styled-components";
import Header from "../ui/Header";
import Headroom from "react-headroom";
import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";

const HeroSection = styled.section`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  z-index: 1;
  box-shadow: 0px 0px 30px #2b2c2c25;

  &::after {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    background-image: url("hero-background-1-blur.webp");
    background-position: center;
    background-size: cover;
    z-index: -1;
    width: 110%;
    height: 110%;
    opacity: 0.6;
  }
`;

const StyledHero = styled.div`
  margin: 0 auto;
  max-width: 130rem;
  padding: 9.6rem 3.2rem;
  @media (max-width: 72em) {
    padding: 6.4rem 3.2rem;
  }
`;

const IMGTran = styled.img`
  position: absolute;

  left: 50%;
  bottom: -5px;
  transform: translateX(-50%);
  filter: drop-shadow(5px 5px 30px #d9dddc);
  max-height: 55vh;
  transition: all 0.5s;
  opacity: 0.9;
  &:hover {
    filter: drop-shadow(5px 5px 10px #d9dddc);
    opacity: 1;
  }

  @media (max-width: 80em) {
    max-height: 50vh;
    width: auto;
  }
  @media (max-width: 27em) {
    max-height: 50vh;
    width: auto;
  }
`;

const HeroHeading = styled.h1`
  letter-spacing: -5px;
  text-align: center;
  color: #6d6f6e;
  transition: all 1.5s;
`;

const HeroTextGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12.8rem;
  @media (max-width: 72em) {
    gap: 4.8rem;
  }
`;

const HeroTextBoxes = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50fr);
  gap: 12.8rem;
`;

const HeroTextLeft = styled.div`
  width: 75%;
`;
const HeroTextRight = styled.div`
  justify-self: end;
  width: 75%;
`;

const HeroTertiary = styled.h3`
  font-size: 3.6rem;
  font-weight: 400;
  letter-spacing: -4px;
  @media (max-width: 27em) {
    font-size: 2.4rem;
    letter-spacing: -2px;
    text-align: center;
  }
`;

const HeroP = styled.p`
  font-size: 1.6rem;
  line-height: 1.05;
  @media (max-width: 50em) {
    display: none;
  }
`;

function Hero() {
  const [opacity, setOpacity] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setOpacity(!opacity);
    }, 3000);
  }, [opacity]);

  return (
    <HeroSection>
      <Headroom>
        <Header />
      </Headroom>
      <Fade triggerOnce>
        <StyledHero>
          <HeroTextGrid>
            <div>
              {opacity === false ? (
                <HeroHeading className="heading-primary">
                  Robert Grabowski
                </HeroHeading>
              ) : (
                <HeroHeading className="heading-primary opacity">
                  Robert Grabowski
                </HeroHeading>
              )}
              <HeroHeading className="heading-secondary">Portfolio</HeroHeading>
            </div>
            <HeroTextBoxes>
              <HeroTextLeft>
                <HeroTertiary className="heading-tertiary">
                  Frontend
                </HeroTertiary>
                <HeroP>
                  My primary expertise, representing the sphere where I continue
                  to focus and evolve significantly.
                </HeroP>
                <HeroP>
                  I create clean and elegant code, with an effective character.
                </HeroP>
              </HeroTextLeft>
              <HeroTextRight>
                <HeroTertiary className="heading-tertiary">
                  Creator
                </HeroTertiary>
                <HeroP>
                  My passion for creation has been a lifelong pursuit.
                </HeroP>
                <HeroP>
                  I continuously challenge myself with diverse tasks to expand
                  and refine my skill set.
                </HeroP>
              </HeroTextRight>
            </HeroTextBoxes>
          </HeroTextGrid>
          <IMGTran src="oparcieTran.webp" alt="author photo" />
        </StyledHero>
      </Fade>
    </HeroSection>
  );
}

export default Hero;
