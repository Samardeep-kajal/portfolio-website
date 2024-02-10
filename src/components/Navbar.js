import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="bg-[#1b263b] flex justify-between items-center h-20 max-w-h mx-auto px-4 text-white">
      {/* Logo */}
      <Logo />
      {/* Desktop Navigation */}
      <ul className="hidden md:flex font-Poppins">
        <li className="p-4  hover:text-[#e85a4f] rounded-xl m-4 cursor-pointer ">
          01.<a href="#about">About</a>
        </li>
        <li className="p-4 hover:text-[#e85a4f] rounded-xl m-4 cursor-pointer ">
          02.<a href="#projects">Work</a>
        </li>
        <li className="p-4 hover:text-[#e85a4f] rounded-xl m-4 cursor-pointer ">
          03.<a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
