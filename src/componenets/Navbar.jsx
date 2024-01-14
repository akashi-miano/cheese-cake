import { useState } from "react";
import logo from "../assets/LOGO OF CHEESECAKE.png";
const Navbar = () => {
  const [selected, setSelected] = useState("home");
  const handleSelection = (tab) => setSelected(tab);

  return (
    <nav className="nav" data-aos="fade-down">
      <div className="container flex items-center justify-between flex-col md:flex-row">
        <div className="logo-wrapper">
          <img
            src={logo}
            alt="cheese cake logo"
            className="md:w-[165px] md:h-[165px] h-[100px] w-[100px]"
          />
        </div>
        <ul className="nav__links flex items-center mb-10 md:mb-0">
          <li
            className={
              selected === "home"
                ? "selected"
                : "bg-primary px-4 py-2 text-white rounded-l-md"
            }
          >
            <a href="#" className="" onClick={() => handleSelection("home")}>
              Home
            </a>
          </li>
          <li
            className={`bg-primary px-4 py-2 ${
              selected === "about" && "selected"
            }`}
          >
            <a
              href="#about"
              className="text-white"
              onClick={() => handleSelection("about")}
            >
              About Us
            </a>
          </li>
          <li
            className={`bg-primary px-4 py-2 ${
              selected === "menu" && "selected"
            }`}
          >
            <a
              href="#menu"
              className="text-white"
              onClick={() => handleSelection("menu")}
            >
              Menu
            </a>
          </li>
          <li
            className={`bg-primary rounded-r-md px-4 py-2 ${
              selected === "contact" && "selected"
            }`}
          >
            <a
              href="#contact"
              className="text-white"
              onClick={() => handleSelection("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="btn-wrapper hidden md:block">
          <a href="" className="btn--secondary">
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
