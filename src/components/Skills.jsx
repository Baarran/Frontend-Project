import React, { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";

const skills = [
  {
    name: "Java Script",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "React.Js",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "Node.Js",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const Skills = () => {
  const { language } = useContext(LanguageContext);
  const skillsTitle = language === "en" ? "Skills" : "Beceriler";

  return (
    <section className="bg-white dark:bg-gray-800 py-10 pt-24">
      <h2 className="text-black dark:text-white text-6xl font-bold text-center mb-10">
        {skillsTitle}
      </h2>
      <div className="container mx-auto flex justify-around">
        {skills.map((skill, index) => (
          <div key={index} className="text-center mb-8 w-1/3">
            <h3 className="text-blue-600 dark:text-white text-3xl font-bold mb-4">
              {skill.name}
            </h3>
            <p className="text-black dark:text-white">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
