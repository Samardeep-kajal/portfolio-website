import React from "react";
import "../styles/experience.css";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "NCR Atleos",
      date: "Feb 2024 - Present",
      description: [
        "⦿ Developed a robust full-stack web application using Next.js, aimed at capturing and managing innovative ideas within an organization.",
        "⦿ Employed TypeScript for enhanced code reliability and maintainability, ensuring a scalable and type-safe codebase.",
        "⦿ Designed and implemented RESTful APIs with Express.js, facilitating seamless communication between the client and server.",
        "⦿ Utilized Sequelize ORM to manage and interact with a PostgreSQL database, ensuring efficient data handling and integrity.",
        "⦿ Integrated Redux for state management, enabling efficient handling of application state and asynchronous actions with Redux Thunk.",
        "⦿ Implemented comprehensive role-based access control using custom enums in PostgreSQL, ensuring data security and user management.",
        "⦿ Designed and implemented automated triggers in the database to manage timestamps, ensuring data accuracy and consistency.",
      ],
    },
  ];

  return (
    <div className="experience-container mt-40 ml-52 text-justify w-3/5">
      <h2 className="text-3xl font-medium underline mb-8">Experience</h2>
      <div className="timeline ml-40">
        {experiences.map((exp, index) => (
          <div className="timeline-item justify-normal" key={index}>
            <div className="timeline-dot mt-3"></div>
            <div className="timeline-content">
              <h3 className="timeline-title">{exp.title}</h3>
              <p className="timeline-company">
                {exp.company} | {exp.date}
              </p>
              <ul className="timeline-description justify-normal">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
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
