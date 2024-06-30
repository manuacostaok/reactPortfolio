// containers/Home.js
import React from 'react';
import { Navbar } from "../components/navbar/Navbar";
import { Intro } from "../components/intro/Intro";
import { AboutMeSkills } from "../components/about-me-skills/AboutMeSkills";
import { RecentWork } from "../components/my-recent-work/RecentWork";
import { Socials } from "../components/socials/Socials";
import { Contact } from "../components/contact/contact";
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <main id="home">
      <Navbar t={t} />
      <Intro t={t} />
      <AboutMeSkills t={t} />
      <Socials t={t} />
      <RecentWork t={t} />
      
      <Contact t={t} />
    </main>
  );
};
