import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaSlack, FaEnvelope } from "react-icons/fa";
import bruinaiLogo from "../../assets/bruinailogo.svg";
import { MdNewspaper } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#040505] w-full pt-6 pb-3 px-4">
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          {/* footer nav */}
          <nav className="flex-1 flex justify-center gap-6">
            <Link to="/" className="text-white text-xs font-normal hover:text-yellow-400 transition-colors">Home</Link>
            <Link to="/projects" className="text-white text-xs font-normal hover:text-yellow-400 transition-colors">Projects</Link>
            <Link to="/events" className="text-white text-xs font-normal hover:text-yellow-400 transition-colors">Events</Link>
            <Link to="/about" className="text-white text-xs font-normal hover:text-yellow-400 transition-colors">About Us</Link>
            <Link to="/join" className="text-white text-xs font-normal hover:text-yellow-400 transition-colors">Join</Link>
          </nav>
        </div>
        {/* copyright + socials */}
        <div className="mt-4 flex flex-row w-full justify-between items-center">
          <div className="text-left">
            <span className="text-gray-400 text-[11px]">Copyright {new Date().getFullYear()} BruinAI</span>
          </div>
          <div className="flex justify-end gap-4">
            <a href="mailto:bruinaiucla@gmail.com" aria-label="Email" className="text-gray-400 hover:text-yellow-400 transition-colors text-base">
              <FaEnvelope />
            </a>
            <a href="https://www.instagram.com/bruin_ai/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-yellow-400 transition-colors text-base">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/bruin-ai" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-yellow-400 transition-colors text-base">
              <FaLinkedin />
            </a>
            <a href="https://join.slack.com/t/bruinai/shared_invite/zt-3c9jtckbr-ZqT1Bq0FVe1msf_cXZ1wYQ" target="_blank" rel="noopener noreferrer" aria-label="Slack" className="text-gray-400 hover:text-yellow-400 transition-colors text-base">
              <FaSlack />
            </a>
            <a href="https://bruinai.substack.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors text-base">
              <MdNewspaper />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
