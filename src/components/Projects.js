import React from "react";
import {
  externalLink,
  savvySliceLanding,
  savvySliceMenu,
  savvySliceCheckout,
  savvySlicePayment,
  selfJournalDashboard,
  selfJournalDisplay,
  selfJournalLanding,
  selfJournalSignup,
  selfJournalTemplate,
} from "../media";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Projects = () => {
  return (
    <div className="md:mt-24 md:ml-52 md:w-4/6 z-10">
      <h1 className="text-3xl ml-36 md:ml-0 underline font-Poppins mb-8">
        Projects
      </h1>
      <div className="flex flex-wrap justify-center -mx-4">
        <div className="w-4/5 md:w-full ml-2 md:ml-20">
          <h2 className="text-2xl font-semibold mb-2">Savvy Slice!</h2>
          <Carousel
            showArrows={true}
            showThumbs={false}
            showIndicators={false}
            className="md:w-3/4 content-center"
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
            <p className="text-base mb-4 text-justify md:text-left">
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
                ReactJS
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
              <span className="bg-[#415A77] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 ">
                MaterialUI
              </span>
            </div>
            <div className="flex flex-wrap">
              <button className="border-black text border-2 px-3 mr-2 h-14 font-semibold hover:bg-[#778DA9] rounded-md flex items-center transition-colors duration-300 ease-in-out">
                Check Github{" "}
                <img
                  src={externalLink}
                  className="h-5 w-5 ml-1"
                  alt="External Link"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center -mx-4 mt-10">
          <div className="w-3/4 md:w-full ml-2 md:ml-20">
            <h2 className="text-2xl font-semibold mb-2">SelfJournal</h2>
            <Carousel
              showArrows={true}
              showThumbs={false}
              showIndicators={false}
              className="md:w-3/4 content-center"
            >
              <div>
                <img src={selfJournalLanding} alt="Project Image" />
              </div>
              <div>
                <img src={selfJournalSignup} alt="Project Image" />
              </div>
              <div>
                <img src={selfJournalTemplate} alt="Project Image" />
              </div>
              <div>
                <img src={selfJournalDashboard} alt="Project Image" />
              </div>
              <div>
                <img src={selfJournalDisplay} alt="Project Image" />
              </div>
            </Carousel>
            <div className="mt-4">
              <p className="text-base mb-4 text-justify md:text-left">
                The Self Journaling Platform is a transformative web application
                designed to empower users on their journey of self-discovery and
                personal growth. With intuitive journaling features, robust data
                privacy measures, the platform provides a secure and
                user-friendly space for individuals to reflect on their
                thoughts, emotions, experiences. This Self Journaling Platform
                offers a powerful tool for individuals seeking to cultivate a
                deeper understanding of themselves and live more intentionally.
              </p>
              <div className="flex flex-wrap mb-4">
                <span className="bg-[#415A77] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                  ReactJS
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
                <span className="bg-[#415A77] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                  react-redux
                </span>
              </div>
              <div className="flex flex-wrap">
                <button className="border-black text border-2 px-3 mr-2 h-14 font-semibold hover:bg-[#778DA9] rounded-md flex items-center transition-colors duration-300 ease-in-out">
                  Check Github{" "}
                  <img
                    src={externalLink}
                    className="h-5 w-5 ml-1"
                    alt="External Link"
                  />
                </button>
                {/* <button className="border-black border-2 px-3 mr-2 h-14 font-semibold hover:bg-[#778DA9] rounded-md flex items-center transition-colors duration-300 ease-in-out">
                  See Project{" "}
                  <img
                    src={externalLink}
                    className="h-5 w-5 ml-1"
                    alt="External Link"
                  />
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
