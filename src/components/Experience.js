import React from "react";
import "../styles/experience.css";

const Experience = () => {
  const experiences = [
    {
      title: "Application Developer I",
      company: "NCR Atleos",
      date: "Sep 2024 - Present",
      description: [
        "⦿ Working on a production IT Project Portfolio Management (PPM) platform used internally to manage projects, resources, and financial tracking.",
        "⦿ Built and supported modules for resource forecasting, project financials, and portfolio visibility.",
        "⦿ Integrated Power BI dashboards to enable data-driven project and financial reviews.",
        "⦿ Improved code quality and security by adopting static analysis and SDLC practices (SonarQube, Coverity, Mend).",
        "⦿ Collaborating with product managers and stakeholders to translate requirements into scalable solutions.",
        "⦿ Supporting and enhancing existing systems to ensure reliability and maintainability.",
        "⦿ Utilized technologies such as jQuery, JavaScript, PHP, and Joomla CMS to extend platform capabilities.",
      ],
    },
    {
      title: "Software Development Engineer Intern",
      company: "NCR Atleos",
      date: "Feb 2024 - Aug 2024",
      description: [
        "⦿ Worked on a full-stack web application while gaining exposure to enterprise ITSM processes related to field services and IT operations.",
        "⦿ Contributed to the development of a full-stack application, working across UI, backend logic, and data handling.",
        "⦿ Developed a robust web application using Next.js and TypeScript for enhanced code reliability and maintainability.",
        "⦿ Designed and implemented RESTful APIs with Express.js, facilitating seamless communication between the client and server.",
        "⦿ Integrated Sequelize ORM for efficient database management and interaction with PostgreSQL.",
        "⦿ Assisted in building and enhancing application features aligned with business and operational requirements.",
        "⦿ Gained practical understanding of the ITSM lifecycle, including how field service workflows are supported through enterprise systems.",
        "⦿ Worked closely with engineers and stakeholders to understand real-world service management use cases.",
      ],
    },
  ];

  const underlineKeywords = (text) => {
    const keywords = [
      "Next.js",
      "TypeScript",
      "RESTful APIs",
      "Express.js",
      "Sequelize ORM",
      "PostgreSQL",
      "Redux",
      "Power BI",
      "jQuery",
      "JavaScript",
      "PHP",
      "Joomla CMS",
      "Coverity",
      "Mend",
      "SonarQube",
      "SDLC practices",
      "ITSM",
      "resource forecasting",
      "PPM",
      "scalable solutions",
      "static analysis",
    ];

    const regex = new RegExp(`(${keywords.join("|")})`, "gi");
    return text.split(regex).map((part, index) =>
      keywords.includes(part) ? (
        <span key={index} className="wavy-underline">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="experience-container mt-32 md:mt-40 md:ml-52 md:text-justify w-full md:w-3/5">
      <h2 className="text-3xl font-medium ml-24 md:ml-0 underline mb-8">
        Experience
      </h2>
      <div className="timeline md:ml-40">
        {experiences.map((exp, index) => (
          <div className="timeline-item md:justify-normal" key={index}>
            <div className="timeline-dot mt-3"></div>
            <div className="timeline-content">
              <p className="timeline-title ">{exp.title}</p>
              <p className="timeline-company">
                {exp.company} | {exp.date}
              </p>
              <ul className="timeline-description md:justify-normal">
                {exp.description.map((desc, i) => (
                  <li key={i}>{underlineKeywords(desc)}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
