import React, { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";

const projects = [
  {
    title: "Workintech",
    description:
      "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    tags: ["react", "redux", "axios"],
    github: "#",
    live: "#",
    image: "../image.png",
  },
  {
    title: "Random Jokes",
    description:
      "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    tags: ["react", "redux", "axios"],
    github: "#",
    live: "#",
    image: "../image2.png",
  },
  {
    title: "Journey",
    description:
      "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    tags: ["react", "redux", "axios"],
    github: "#",
    live: "#",
    image: "../image3.png",
  },
];

const Projects = () => {
  const { language } = useContext(LanguageContext);
  const projectsTitle = language === "en" ? "Projects" : "Projeler";

  return (
    <section className="bg-white dark:bg-gray-800 py-10">
      <h2 className="text-black dark:text-white text-6xl font-bold text-start mb-4 pl-16">
        {projectsTitle}
      </h2>
      <div className="container mx-auto flex flex-wrap gap-10">
        {projects.map((project, index) => (
          <div key={index} className="w-full sm:w-1/3 md:w-96 p-4">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg p-6">
              <img
                src={project.image}
                alt={project.title}
                className="mb-4 rounded-lg w-full h-48 object-cover"
              />
              <h3 className="text-blue-600 dark:text-white text-3xl font-normal">
                {project.title}
              </h3>
              <p className="text-black dark:text-white pt-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-200 text-blue-800 dark:bg-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between mt-4">
                <a
                  href={project.github}
                  className="text-blue-500 dark:text-blue-300"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  className="text-blue-500 dark:text-blue-300"
                >
                  View Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
