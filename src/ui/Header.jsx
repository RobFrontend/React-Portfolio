import { useState } from "react";
import { Fade } from "react-awesome-reveal";

import styled from "styled-components";

import { GrMenu } from "react-icons/gr";
import { GrClose } from "react-icons/gr";

const StyledHeader = styled.header`
  height: 80px;
  padding: 1.2rem 3.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 4.8rem;
`;

const NavMobile = styled.nav`
  /* position: absolute;
  right: 0px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  min-height: 100vh;
  gap: 3.2rem;
  padding: 1.8rem;
  z-index: 5;
  background-color: rgba(242, 242, 241, 0.9);
`;

const Menu = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1.8rem;
  z-index: 6;
`;
const NavA = styled.a`
  font-size: 2.4rem;
  font-weight: 300;
  color: var(--nav-font-color);
  letter-spacing: -1px;
  transition: all 0.3s;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
`;

const Logo = styled.a`
  color: inherit;
  font-size: 3.2rem;
  font-weight: 500;
  letter-spacing: -3px;
  opacity: 0.9;
  transition: all 0.3s;
  text-decoration: none;
  &:hover {
    opacity: 1;
  }
`;

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      {window.innerWidth > 768 ? (
        <StyledHeader>
          <Fade triggerOnce direction="left">
            <Logo href="#">Home</Logo>
          </Fade>

          <Fade triggerOnce direction="right">
            <StyledNav>
              <NavA href="#about">About me</NavA>
              <NavA href="#customer">Customer experience</NavA>
              <NavA href="#projects">More projects</NavA>
              <NavA href="#footer">Contact</NavA>
            </StyledNav>
          </Fade>
        </StyledHeader>
      ) : (
        <>
          {!navOpen ? (
            <StyledHeader>
              <Fade triggerOnce direction="left">
                <Logo href="#">Home</Logo>
              </Fade>
              <StyledNav>
                <Menu onClick={() => setNavOpen(!navOpen)}>
                  {navOpen ? (
                    <GrClose style={{ fontSize: "2.4rem" }} />
                  ) : (
                    <GrMenu style={{ fontSize: "2.4rem" }} />
                  )}
                </Menu>
              </StyledNav>
            </StyledHeader>
          ) : (
            <Fade direction="down">
              <NavMobile onClick={() => setNavOpen(!navOpen)}>
                <NavA href="#about">About me</NavA>
                <NavA href="#customer">Customer experience</NavA>
                <NavA href="#projects">More projects</NavA>
                <NavA href="#footer">Contact</NavA>
              </NavMobile>
            </Fade>
          )}
        </>
      )}
    </>
  );
}

export default Header;
