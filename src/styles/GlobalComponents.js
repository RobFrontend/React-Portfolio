import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
  --body-font-color: #575858; 
  --nav-font-color: #414242;
  --nav-font-mobile-color: #575858;
}
*, *::after, *:before{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html{
  font-size: 62.5%;
  scroll-behavior: smooth;
}
body{
  font-family: 'Poppins';
  color: #575858;
  background: url('bbblurry.svg');
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  overflow-x: hidden;
}

.section {
  margin-bottom: 9.6rem;
  padding-top: 3.2rem;
  padding-left: 3.2rem;
  padding-right: 3.2rem;
}

.container {
  max-width: 120rem;
  margin: 0 auto;
}

.heading-primary {
  font-size: 5.2rem;
  font-weight: 500;
  text-transform: uppercase;
  opacity: 0.15;
  transition: opacity 1s;

}
.heading-secondary {
  font-size: 4.4rem;
  font-weight: 400;
}
.container .heading-secondary {
  letter-spacing: -3.5px;
}
.heading-tertiary {
  font-size: 3.6rem;
  font-weight: 400;
  letter-spacing: -4px;
}
.section-heading-tertiary {
  text-align: center;
  opacity: 0.2;
  margin-bottom: 1.8rem;
  margin-top: 2.4rem;
}

.section-p {
  font-size: 1.8rem;
  line-height: 1.05;
  margin-bottom: 1.2rem;
  text-align: justify;
}

.project-github-link {
  text-decoration: none;
  color: #575858;
  border-bottom: 1px solid #5758583f;
  transition: all 0.3s;
}
.project-github-link:hover {
  border-bottom: 0.5px solid #57585880;
}

footer {
  text-align: center;
  padding: 3.2rem;
  font-size: 1.4rem;
  opacity: 0.6;
  padding-top: 9.6rem;
}

.headroom--pinned {
  position: fixed;
  transform: translateY(0%);
 
  background: linear-gradient(
    to top,
    rgba(217, 221, 220, 0.7),
    rgba(217, 221, 220)
  );

}


// QUERIES

@media (max-width: 82em) {
  html {
    font-size: 56.25%;
  }
}

@media (max-width: 55em) {
  html {
    font-size: 50%;
  }
}




@media (max-width: 27em) {

  .heading-primary {
    font-size: 3.6rem;
    letter-spacing: -3px;
  }
  .heading-secondary {
    font-size: 3.2rem;
    letter-spacing: -3px;
  }

}


`;

export default GlobalStyles;
