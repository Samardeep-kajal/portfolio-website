import React from "react";

const Projects = () => {
  return (
    <div className="mt-10">
      <h1 className="text-5xl font-Poppins mb-8">Projects</h1>
      <div className="flex flex-wrap justify-center -mx-4">
        <div className="w-full ">
          <div className="project flex flex-col md:flex-row">
            <img
              src="https://via.placeholder.com/300"
              alt="Project Image"
              className="rounded-lg mb-4 md:mr-4"
            />
            <div>
              <h2 className="text-2xl font-semibold mb-2">Blogging Website</h2>
              <p className="text-lg mb-4">
                A full-stack blogging website built with React, Node.js,
                Express, and MongoDB. Allows users to create, read, update, and
                delete blog posts. Implements authentication and authorization
                for secure user access.
              </p>
              <div className="flex flex-wrap mb-4">
                <span className="bg-[#415A77] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                  React
                </span>
                <span className="bg-[#415A77] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                  Node.js
                </span>
                <span className="bg-[#415A77] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                  Express
                </span>
                <span className="bg-[#415A77] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                  MongoDB
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Add more projects here */}
      </div>
    </div>
  );
};

export default Projects;
