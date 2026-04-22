import { useState } from "react";

import { Navbar } from "../components/navbar/Navbar";
import { Intro } from "../components/intro/Intro";
import { AboutMeSkills } from "../components/about-me-skills/AboutMeSkills";
import { RecentWork } from "../components/my-recent-work/RecentWork";
import { ContactPage } from "../containers/contact-page/contactPage";

import { ScrollProgress } from "../components/ui/ScrollProgress";
import { Particles } from "../components/background/Particles";

export const Home = () => {
  const [theme, setTheme] = useState("dark");
  const [lang, setLang] = useState("es");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleLang = () => {
    setLang((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <div className={theme}>

      <ScrollProgress />
      <Particles />

      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        lang={lang}
        toggleLang={toggleLang}
      />

      <main>
        <section id="home">
          <Intro lang={lang} />
        </section>

        <section id="about">
          <AboutMeSkills lang={lang} />
        </section>

        <section id="projects">
          <RecentWork lang={lang} />
        </section>

        <section id="contact">
          <ContactPage lang={lang} />
        </section>
      </main>

    </div>
  );
};