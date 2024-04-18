import About from "./components/About";
import CustomerProjects from "./components/CustomerProjects";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MyProjects from "./components/MyProjects";
import Socials from "./components/Socials";

function AppLayout() {
  return (
    <>
      <Hero />
      <Socials />
      <About />
      <CustomerProjects />
      <MyProjects />
      <Footer />
    </>
  );
}

export default AppLayout;
