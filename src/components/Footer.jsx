import React, { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const contactTitle =
    language === "en"
      ? "Let's work together on your next product."
      : "Bir sonraki projenizde birlikte çalışalım.";
  const email = "almilasucode@gmail.com";

  return (
    <footer className="bg-white dark:bg-gray-800 py-10 text-center">
      <h2 className="text-black dark:text-white text-3xl font-bold mb-6">
        {contactTitle}
      </h2>
      <p className="text-black dark:text-white text-xl mb-6">
        <a href={`mailto:${email}`} className="text-red-500 dark:text-red-300">
          {email}
        </a>
      </p>
      <div className="flex justify-center space-x-4">
        <a href="https://github.com" className="text-black dark:text-white">
          GitHub
        </a>
        <a href="https://linkedin.com" className="text-black dark:text-white">
          LinkedIn
        </a>
        <a href="#" className="text-black dark:text-white">
          Personal Blog
        </a>
      </div>
    </footer>
  );
};

export default Footer;
