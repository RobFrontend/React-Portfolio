import { AttentionSeeker, Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledSocials = styled.section`
  padding-bottom: 3.2rem;
  border-bottom: 2px solid rgba(109, 111, 110, 0.1);
`;

const SocialsBox = styled.div`
  display: flex;
  gap: 4.8rem;
  justify-content: center;
  align-items: center;
`;

const IMG = styled.img`
  height: 8rem;
  width: 8rem;
  filter: brightness(0);
  opacity: 0.5;
  transition: all 0.5s;

  &:hover {
    opacity: 0.7;
    filter: brightness(0) drop-shadow(10px 5px 5px rgba(22, 22, 22, 0.25));
  }

  @media (max-width: 55em) {
    width: 7rem;
    height: 7rem;
  }
`;

function Socials() {
  return (
    <StyledSocials className="section">
      <Fade triggerOnce>
        <AttentionSeeker effect="headShake">
          <SocialsBox>
            <Link to="https://github.com/RobFrontend" target="_blank">
              <IMG src="logo-gh.png" alt="Logo of Github" />
            </Link>
            <Link
              to="https://www.instagram.com/rob_learns_frontend/"
              target="_blank"
            >
              <IMG src="logo-ig.png" alt="Logo of Instagram" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/robert-grabowski-b97965239/"
              target="_blank"
            >
              <IMG src="logo-in.png" alt="Logo of LinkedIn" />
            </Link>
          </SocialsBox>
        </AttentionSeeker>
      </Fade>
    </StyledSocials>
  );
}

export default Socials;
