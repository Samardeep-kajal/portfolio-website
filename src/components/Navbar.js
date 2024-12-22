import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="w-full fixed top-0 z-50">
      <div
        className={`bg-[#1b263b] flex justify-between items-center h-16 max-w-h mx-auto px-4 z-20 text-white sticky top-0 transition-transform ${
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
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleSidebar}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24 "
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`fixed overflow-hidden inset-0 bg-gray-800 bg-opacity-75 z-20 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="w-72 bg-[#1b263b] h-full p-4">
          <button
            className="text-white focus:outline-none mb-4"
            onClick={toggleSidebar}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <div
            className="flex items-center justify-center w-20 h-20 border-2 border-[#ff004e] rounded-3xl font-bold mx-auto mb-8"
            style={{ transform: "rotate(45deg)" }}
          >
            <span style={{ transform: "rotate(-45deg)", color: "#ff004e" }}>
              Sam
            </span>
          </div>
          <ul className="font-Poppins text-xl text-white mt-52 ml-2">
            <li className="p-2 hover:text-[#e85a4f] m-4 cursor-pointer ml-12 mr-4">
              <a href="#about" className="ml-8">
                About
              </a>
            </li>
            <li className="p-2 hover:text-[#e85a4f] m-4 cursor-pointer ml-12 mr-4">
              <a href="#about" className="ml-8">
                Work
              </a>
            </li>
            <li className="p-2 hover:text-[#e85a4f] m-4 cursor-pointer ml-12 mr-4">
              <a href="#about" className="ml-8">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
