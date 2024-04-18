import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import styled from "styled-components";

const KontaktBoxes = styled.div`
  padding: 6.4rem 0;
  display: grid;
  grid-template-columns: 35fr 30fr 35fr;
  gap: 4.8rem;
  justify-content: center;
  align-items: end;
  @media (max-width: 72em) {
    grid-template-columns: repeat(2, 50fr);
  }
  @media (max-width: 50em) {
    grid-template-columns: 1fr;
  }
`;

const KontaktBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  justify-self: center;
`;

const LinksBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  justify-self: center;
`;

const KontaktLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  border-bottom: 1px solid #6d6f6e21;
  opacity: 0.9;
`;

const KontaktP = styled.p`
  font-size: 2.4rem;
  display: flex;
  flex-direction: column;
  width: fit-content;
  /* gap: 0.6rem; */
  @media (max-width: 35em) {
    font-size: 2rem;
  }
`;

const AvatarBox = styled.div`
  width: 80%;
  @media (max-width: 72em) {
    grid-column: 1/-1;
    align-self: center;
    justify-self: center;
    text-align: center;
  }
  @media (max-width: 50em) {
    grid-column: 1;
    grid-row: 1/3;
    align-self: center;
    max-width: 100%;
  }
`;

const IMG = styled.img`
  filter: drop-shadow(-5px -30px 20px #c3c7c68c);
  opacity: 0.9;
  width: 100%;
  transition: all 0.5s;
  &:hover {
    filter: drop-shadow(-5px -30px 10px #c3c7c68c);
    opacity: 1;
  }
  @media (max-width: 72em) {
    max-height: 50vh;
    width: auto;
  }
  @media (max-width: 35em) {
    width: 75%;
  }
`;

function Footer() {
  return (
    <>
      <section id="footer">
        <Fade triggerOnce direction="up">
          <div className="container">
            <h2 className="heading-secondary">Contact and links</h2>
            <KontaktBoxes>
              <AvatarBox>
                <IMG src="profiloweTran.webp" alt="Profile Photo" />
              </AvatarBox>
              <KontaktBox>
                <h3 className="heading-tertiary">Robert Grabowski</h3>
                <KontaktP>
                  Phone: <span>609 843 405</span>
                </KontaktP>
                <KontaktP>
                  E-mail: <span>robert.grabowski97@gmail.com</span>
                </KontaktP>
              </KontaktBox>
              <LinksBox>
                <KontaktP>
                  LinkedIn:{" "}
                  <KontaktLink
                    to="https://www.linkedin.com/in/robert-grabowski-b97965239/"
                    target="_blank"
                  >
                    robert-grabowski-b97965239
                  </KontaktLink>
                </KontaktP>
                <KontaktP>
                  GitHub:{" "}
                  <KontaktLink
                    to="https://github.com/RobFrontend"
                    target="_blank"
                  >
                    RobFrontend
                  </KontaktLink>
                </KontaktP>
                <KontaktP>
                  Instagram:{" "}
                  <KontaktLink
                    to="https://www.instagram.com/rob_learns_frontend/"
                    target="_blank"
                  >
                    rob_learns_frontend
                  </KontaktLink>
                </KontaktP>
              </LinksBox>
            </KontaktBoxes>
          </div>
        </Fade>
      </section>
      <footer>&copy;{new Date().getFullYear()} robfrontend</footer>
    </>
  );
}

export default Footer;
