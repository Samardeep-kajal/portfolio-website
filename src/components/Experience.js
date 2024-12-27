import React from "react";
import "../styles/experience.css";

const Experience = () => {
  const experiences = [
    {
      title: "Application Developer",
      company: "NCR Atleos",
      date: "Sep 2024 - Present",
      description: [
        "⦿ Working in the Portfolio Management team, managing projects and enhancing an in-house portfolio management tool.",
        "⦿ Supporting 700+ active users within the organization by optimizing and maintaining the tool’s performance.",
        "⦿ Collaborating with cross-functional teams to improve portfolio tracking and reporting features.",
        "⦿ Streamlining project management workflows to ensure efficiency and scalability.",
        "⦿ Skills: PHP, jQuery, JavaScript, SQL Database, Tool Optimization",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "NCR Atleos",
      date: "Feb 2024 - Aug 2024 (6 mos.)",
      description: [
        "⦿ Developed a full-stack web application using Next.js for managing innovative ideas within our organization.",
        "⦿ Utilized TypeScript for a scalable and type-safe codebase.",
        "⦿ Designed RESTful APIs with Express.js for client-server communication.",
        "⦿ Managed PostgreSQL database with Sequelize ORM.",
        "⦿ Leveraged Redux for efficient and centralized state management.",
        "⦿ Implemented RBAC using custom enums in PostgreSQL.",
        "⦿ Created automated triggers for database timestamp management.",
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
      "RBAC",
      "custom enums",
      "automated triggers",
      "Skills",
      "700+",
    ];

    const regex = new RegExp(`\\b(${keywords.join("|")})\\b`, "gi");
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
