import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer
      className="py-8"
      data-aos="zoom-in"
      data-aos-delay="500"
      data-aos-offset="400"
    >
      <div className="container">
        <div className="footer__socials flex flex-col md:flex-row items-center md:gap-8 gap-4">
          <ul className="flex items-center gap-4">
            <li>
              <a
                href=""
                className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center duration-300 hover:bg-[#FF9900] group"
              >
                <FaFacebook className="text-black text-2xl group-hover:text-white" />
              </a>
            </li>
            <li>
              <a
                href=""
                className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center duration-300 hover:bg-[#FF9900] group"
              >
                <FaInstagram className="text-black text-2xl group-hover:text-white" />
              </a>
            </li>
            <li>
              <a
                href=""
                className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center duration-300 hover:bg-[#FF9900] group"
              >
                <FaTwitter className="text-black text-2xl group-hover:text-white" />
              </a>
            </li>
            <li>
              <a
                href=""
                className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center duration-300 hover:bg-[#FF9900] group"
              >
                <FaYoutube className="text-black text-3xl group-hover:text-white" />
              </a>
            </li>
          </ul>
          <p className="text-lg font-medium">
            Copyright &copy; 2024 Dscode | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
