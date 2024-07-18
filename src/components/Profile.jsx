import React, { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";

const Profile = () => {
  const { language } = useContext(LanguageContext);
  const profileTitle = language === "en" ? "Profile" : "Profil";
  const aboutMeTitle = language === "en" ? "About Me" : "Hakkımda";
  const profileData = {
    dob: "24.03.1996",
    location: "Ankara",
    education:
      language === "en"
        ? "Hacettepe University, BSc in Biology, 2016"
        : "Hacettepe Üniv. Biyoloji Lisans, 2016",
    preferredRole: language === "en" ? "Frontend, UI" : "Frontend, UI",
  };
  const aboutMeDescription =
    language === "en"
      ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia. Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!"
      : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia. Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!";

  return (
    <section className="bg-white dark:bg-gray-800 py-10">
      <h2 className="text-black dark:text-white text-6xl font-bold text-center mb-10">
        {profileTitle}
      </h2>
      <div className="container mx-auto flex justify-around">
        <div className="w-1/2 pr-8">
          <h3 className="text-blue-600 dark:text-white text-3xl font-bold mb-4">
            {profileTitle}
          </h3>
          <p className="text-black dark:text-white">
            {language === "en" ? "Date of Birth: " : "Doğum tarihi: "}
            {profileData.dob}
          </p>
          <p className="text-black dark:text-white">
            {language === "en" ? "Location: " : "İkamet Şehri: "}
            {profileData.location}
          </p>
          <p className="text-black dark:text-white">
            {language === "en" ? "Education: " : "Eğitim Durumu: "}
            {profileData.education}
          </p>
          <p className="text-black dark:text-white">
            {language === "en" ? "Preferred Role: " : "Tercih Ettiği Rol: "}
            {profileData.preferredRole}
          </p>
        </div>
        <div className="w-1/2 pl-8">
          <h3 className="text-blue-600 dark:text-white text-3xl font-bold mb-4">
            {aboutMeTitle}
          </h3>
          <p className="text-black dark:text-white">{aboutMeDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
