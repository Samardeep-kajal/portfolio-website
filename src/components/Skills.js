import React from "react";
import {
  gitLogo,
  postmanLogo,
  vscodeLogo,
  figmaLogo,
  cssLogo,
  htmlLogo,
  githubLogo,
  javaLogo,
  jsLogo,
  materialuiLogo,
  mongodbLogo,
  nodeLogo,
  reactLogo,
  reduxLogo,
  nextLogo,
  nestLogo,
  typescriptLogo,
  postgresLogo,
} from "../media";

const Skills = () => {
  return (
    <div className=" font-Poppins mt-48 w-3/4">
      <h1 className="text-4xl">My Skills</h1>
      <h1 className="mt-5 text-2xl">Full Stack</h1>
      <div className="mt-3 ml-11 grid grid-cols-2 md:grid-cols-4 gap-4 justify-around">
        <div className="logo-card flex flex-col items-center">
          <img src={nextLogo} className="h-16 w-16" alt="Git Logo" />
          <p className="text-sm mt-2 text-center">Next.js</p>
        </div>
        <div className="logo-card flex flex-col items-center">
          <img src={reactLogo} className="h-16 w-16" alt="Git Logo" />
          <p className="text-sm mt-2 text-center">ReactJS</p>
        </div>
        <div className="logo-card flex flex-col items-center">
          <img src={nodeLogo} className="h-16 w-16" alt="Postman Logo" />
          <p className="text-sm mt-2 text-center">NodeJS</p>
        </div>
        <div className="logo-card flex flex-col items-center">
          <img src={nestLogo} className="h-16 w-16" alt="Postman Logo" />
          <p className="text-sm mt-2 text-center">NestJS</p>
        </div>
        <div className="logo-card flex flex-col items-center">
          <img src={reduxLogo} className="h-16 w-16" alt="Figma Logo" />
          <p className="text-sm mt-2 text-center">React-redux</p>
        </div>
        <div className="logo-card flex flex-col items-center">
          <img src={materialuiLogo} className="h-16 w-16" alt="Figma Logo" />
          <p className="text-sm mt-2 text-center">MaterialUI</p>
        </div>
        <div className="logo-card flex flex-col items-center">
          <img src={mongodbLogo} className="h-16 w-16" alt="Figma Logo" />
          <p className="text-sm mt-2 text-center">MongoDB</p>
        </div>
        <div className="logo-card flex flex-col items-center">
          <img src={postgresLogo} className="h-16 w-16" alt="Figma Logo" />
          <p className="text-sm mt-2 text-center">PostgreSQL</p>
        </div>
        <div className="logo-card flex flex-col items-center">
          <img src={htmlLogo} className="h-16 w-16" alt="VSCode Logo" />
          <p className="text-sm mt-2 text-center">HTML5</p>
        </div>
        <div className="logo-card flex flex-col items-center">
          <img src={cssLogo} className="h-16 w-16" alt="Figma Logo" />
          <p className="text-sm mt-2 text-center">CSS3</p>
        </div>
      </div>
      {/* LANGUAGE Section */}
      <h1 className="mt-3 text-2xl">Languages</h1>
      <div className="mt-3 justify-evenly flex flex-row flex-wrap">
        <div className="logo-card">
          <img src={javaLogo} className="h-16 w-16" alt="Git Logo" />
          <p className="text-sm mt-2 text-center">JAVA</p>
        </div>
        <div className="logo-card">
          <img src={jsLogo} className="h-16 w-16" alt="Postman Logo" />
          <p className="text-sm mt-2 text-center">JavaScript</p>
        </div>
        <div className="logo-card">
          <img src={typescriptLogo} className="h-16 w-16" alt="Postman Logo" />
          <p className="text-sm mt-2 text-center">Typescript</p>
        </div>
      </div>
      <h1 className="mt-3 text-2xl">Tools</h1>
      <div className="mt-3 justify-evenly flex flex-row flex-wrap">
        <div className="logo-card">
          <img src={githubLogo} className="h-16 w-16" alt="Git Logo" />
          <p className="text-sm mt-2 text-center">GitHub</p>
        </div>
        <div className="logo-card">
          <img src={postmanLogo} className="h-16 w-16" alt="Postman Logo" />
          <p className="text-sm mt-2 text-center">Postman</p>
        </div>
        <div className="logo-card">
          <img src={vscodeLogo} className="h-16 w-16" alt="VSCode Logo" />
          <p className="text-sm mt-2 text-center">VSCode</p>
        </div>
        <div className="logo-card">
          <img src={figmaLogo} className="h-16 w-16" alt="Figma Logo" />
          <p className="text-sm mt-2 text-center">Figma</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
