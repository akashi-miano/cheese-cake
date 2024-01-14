import { useEffect } from "react";
import Hero from "./componenets/Hero";
import About from "./componenets/About";
import Menu from "./componenets/Menu";
import Navbar from "./componenets/Navbar";
import Blog from "./componenets/Blog";
import Contact from "./componenets/Contact";
import Footer from "./componenets/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
