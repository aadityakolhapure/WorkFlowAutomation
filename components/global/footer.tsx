import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { ModeToggle } from "@/components/global/mode-toggle";

interface FooterProps {
  companyName: string;
  copyrightYear: number;
  socialLinks: {
    twitter: string;
    github: string;
    linkedin: string;
  };
}

const Footer: React.FC<FooterProps> = ({
  companyName,
  copyrightYear,
  socialLinks,
}) => {
  return (
    <footer className="bg-slate-100 dark:bg-gray-800 dark:text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center justify-center flex-col">
          <ModeToggle />
        </div>
        <p className="text-sm">
          &copy; {copyrightYear} {companyName}. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="hover:text-gray-400 transition-colors duration-300" />
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-gray-400 transition-colors duration-300" />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-gray-400 transition-colors duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
