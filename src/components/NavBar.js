import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header
      className="cssnavbar background-nav bg-gradient-to-b from-yellow-200 overflow-x-hidden"
     /* style={{ backgroundImage: `url(${imageFour})`, borderRadius: `5px`}}*/
    >
      <div className="container mx-auto flex justify-between borderRadius-5">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white text-outline"
            className=" inflex-flex items-center py-6 px-3 mr-4 text-black-200 hover:text-white-500 text-4xl font-bold cursive tracking-widest"
          >
            Home
          </NavLink>
          <NavLink
              to="/project"
              className="inflex-flex items-center py-6 px-3 mr-4 text-black-200 hover:text-white-500 text-4xl font-bold cursive tracking-widest"
              activeClassName="text-white text-outline bg-pink-700 opacity-60"
          >
            Projects
          </NavLink>
          <NavLink
            to="/post"
            className="inflex-flex items-center py-6 px-3 mr-4 text-black-200 hover:text-white-500 text-4xl font-bold cursive tracking-widest"
            activeClassName="text-white text-outline bg-pink-700 opacity-60"
          >
            Post
          </NavLink>
          <NavLink
            to="/about"
            className="inflex-flex items-center py-6 px-3 mr-4 text-black-200 hover:text-white-500 text-4xl font-bold cursive tracking-widest"
            activeClassName="text-white text-outline bg-pink-700 opacity-60"
          >
            About Me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6 socialLogo">
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
