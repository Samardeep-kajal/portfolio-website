import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      setIsHidden(scrollTop > lastScrollTop && scrollTop > 100);
      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);
  return (
    <div
      className={`bg-[#1b263b] flex justify-between items-center h-16 max-w-h mx-auto px-4 z-10 text-white sticky top-0 transition-transform ${
        isHidden ? "-translate-y-full" : ""
      }`}
    >
      {/* Logo */}
      <Logo />
      {/* Desktop Navigation */}
      <ul className="hidden md:flex font-Poppins mr-8">
        <li className="p-4  hover:text-[#e85a4f] rounded-xl m-4 cursor-pointer ">
          <Link to="home" smooth={true} duration={800}>
            <a href="#about">About.</a>
          </Link>
        </li>
        <li className="p-4 hover:text-[#e85a4f] rounded-xl m-4 cursor-pointer ">
          <Link to="skills" smooth={true} duration={800}>
            <a href="#skills">Skills.</a>
          </Link>
        </li>
        <li className="p-4 hover:text-[#e85a4f] rounded-xl m-4 cursor-pointer ">
          <Link to="experience" smooth={true} duration={800}>
            <a href="#experience">Experience.</a>
          </Link>
        </li>
        <li className="p-4 hover:text-[#e85a4f] rounded-xl m-4 cursor-pointer ">
          <Link to="projects" smooth={true} duration={800}>
            <a href="#projects">Projects.</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
