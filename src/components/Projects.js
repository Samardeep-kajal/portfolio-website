import React from "react";
import {
  externalLink,
  savvySliceLanding,
  savvySliceMenu,
  savvySliceCheckout,
  savvySlicePayment,
} from "../media";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Projects = () => {
  return (
    <div className="mt-24">
      <h1 className="text-5xl font-Poppins mb-8">Projects</h1>
      <div className="flex flex-wrap justify-center -mx-4">
        <div className="w-full ">
          {/* <div className="project flex flex-col md:flex-row"> */}
          <Carousel
            showArrows={true}
            showThumbs={false}
            showIndicators={false}
            className="w-3/4"
          >
            <div>
              <img src={savvySliceLanding} alt="Project Image" />
            </div>
            <div>
              <img src={savvySliceMenu} alt="Project Image" />
            </div>
            <div>
              <img src={savvySliceCheckout} alt="Project Image" />
            </div>
            <div>
              <img src={savvySlicePayment} alt="Project Image" />
            </div>
          </Carousel>
          <div className="mt-4">
            <h2 className="text-2xl font-semibold mb-2">Savvy Slice!</h2>
            <p className="text-base mb-4">
              Savvy Slice is an innovative online pizza ordering platform
              developed using the MERN (MongoDB, Express.js, React.js, Node.js)
              stack. This dynamic web application allows users to browse through
              a wide range of delicious pizza options, customize their orders,
              and securely place them online. With seamless integration of
              Stripe payment gateway, users can conveniently make payments for
              their orders, while Redux ensures efficient state management for a
              smooth and responsive user interface.
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
            <div className="flex flex flex-wrap">
              <button className="border-black text border-2 px-3 mr-2 h-14 font-semibold hover:bg-[#778DA9] rounded-md flex items-center transition-colors duration-300 ease-in-out">
                Check Github{" "}
                <img
                  src={externalLink}
                  className="h-5 w-5 ml-1"
                  alt="External Link"
                />
              </button>
              <button className="border-black border-2 px-3 mr-2 h-14 font-semibold hover:bg-[#778DA9] rounded-md flex items-center transition-colors duration-300 ease-in-out">
                See Project{" "}
                <img
                  src={externalLink}
                  className="h-5 w-5 ml-1"
                  alt="External Link"
                />
              </button>
              {/* </div> */}
            </div>
          </div>
        </div>
        {/* Add more projects here */}
      </div>
    </div>
  );
};

export default Projects;
