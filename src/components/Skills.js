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
    <div className="font-Poppins mt-36 md:mt-48 md:ml-36 w-5/6 md:w-3/4">
      <h1 className="text-3xl ml-44 md:ml-24 underline">Skills</h1>
      <h1 className="mt-5 ml-40 underline md:ml-28 text-2xl">Full Stack</h1>
      <div className="mt-3 ml-14 md:ml-11 grid grid-cols-4 md:grid-cols-5 gap-4 justify-around">
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
      <h1 className="mt-10 ml-36 md:ml-28 underline text-2xl">Languages</h1>
      <div className="mt-3 ml-14 md:ml-11 grid grid-cols-4 md:grid-cols-5 gap-6 justify-around">
        <div className="logo-card flex flex-col items-center">
          <img src={javaLogo} className="h-16 w-16" alt="Git Logo" />
          <p className="text-sm mt-2 text-center">JAVA</p>
        </div>
        <div className="logo-card flex flex-col items-center">
          <img src={jsLogo} className="h-16 w-16" alt="Postman Logo" />
          <p className="text-sm mt-2 text-center">JavaScript</p>
        </div>
        <div className="logo-card flex flex-col items-center">
          <img src={typescriptLogo} className="h-16 w-16" alt="Postman Logo" />
          <p className="text-sm mt-2 text-center">Typescript</p>
        </div>
      </div>
      <h1 className="mt-10 ml-44 md:ml-28 underline text-2xl">Tools</h1>
      <div className="mt-3 ml-14 md:ml-11 grid grid-cols-4 md:grid-cols-5 gap-6 justify-around">
        <div className="logo-card flex flex-col items-center">
          <img src={githubLogo} className="h-16 w-16" alt="Git Logo" />
          <p className="text-sm mt-2 text-center">GitHub</p>
        </div>
        <div className="logo-card flex flex-col items-center">
          <img src={postmanLogo} className="h-16 w-16" alt="Postman Logo" />
          <p className="text-sm mt-2 text-center">Postman</p>
        </div>
        <div className="logo-card flex flex-col items-center">
          <img src={vscodeLogo} className="h-16 w-16" alt="VSCode Logo" />
          <p className="text-sm mt-2 text-center">VSCode</p>
        </div>
        <div className="logo-card flex flex-col items-center">
          <img src={figmaLogo} className="h-16 w-16" alt="Figma Logo" />
          <p className="text-sm mt-2 text-center">Figma</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
