import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-gradient-to-r from-yellow-300 border-b-2 border-yellow-300">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-black-200 hover:text-white-500 text-4xl font-bold cursive tracking-widest"
          >
            Home
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-black-200 hover:text-yellow-200"
            activeClassName="text-pink-200 bg-pink-900"
          >
            Post
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-black-200 hover:text-yellow-200"
            activeClassName="text-pink-200 bg-pink-900"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-black-200 hover:text-yellow-200"
            activeClassName="text-pink-200 bg-pink-900"
          >
            About Me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://www.linkedin.com/in/cis-magito-0a110286/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/Beardificent"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.instagram.com/beardificent/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
