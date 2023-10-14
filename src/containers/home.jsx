import { Navbar } from "../components/navbar/Navbar";
import { Intro } from "../components/intro/Intro";
import { AboutMeSkills } from "../components/about-me-skills/AboutMeSkills";
import { RecentWork } from "../components/my-recent-work/RecentWork";
import { Socials } from "../components/socials/Socials";
import { Contact } from "../components/contact/contact";

export const Home = () => {
  return (
    <main id="home">
      <Navbar />
      <Intro />
      <AboutMeSkills />
      <RecentWork />
      <Socials />
      <Contact />
    </main>
  );
};