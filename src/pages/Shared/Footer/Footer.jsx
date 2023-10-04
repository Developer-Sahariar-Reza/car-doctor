import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo/logo.svg";
import {
  FaGoogle,
  FaSquareXTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <aside>
        <img src={logo} alt="" className="w-1/3" />
        <p>Car Doctor is the best car service center in Atalanta since 1904.</p>
        <div className="flex justify-center items-center mt-3">
          <Link to="https://www.facebook.com/" className="text-2xl mr-5">
            <FaGoogle />
          </Link>
          <Link to="https://twitter.com/" className="text-2xl mr-5">
            <FaSquareXTwitter />
          </Link>
          <Link to="https://www.instagram.com/" className="text-2xl mr-5">
            <FaInstagram />
          </Link>
          <Link to="https://www.linkedin.com/" className="text-2xl mr-5">
            <FaLinkedin />
          </Link>
        </div>
      </aside>
      <nav>
        <header className="footer-title">Services</header>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
