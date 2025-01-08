import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GITHUB_PROFILE, LINKEDIN_PROFILE } from "../constants";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <p className="hidden sm:block text-3xl">LRB</p>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <div className="text-base">
          <a
            href="#"
            download="#"
            className="border border-neutral-500 rounded p-2 hover:bg-neutral-600 text-purple-200"
          >
            <i className="fa-solid fa-download mr-2"></i>Resume
          </a>
        </div>
        <a href={LINKEDIN_PROFILE.url}>
          <FaLinkedin className=" hover:text-neutral-500" />
        </a>
        <a href={GITHUB_PROFILE.url}>
          <FaGithub className=" hover:text-neutral-500" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
