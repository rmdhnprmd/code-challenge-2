import Image from "next/image";
import AboutHero from "../components/aboutComponents/aboutHero";
import AboutMission from "../components/aboutComponents/aboutMission";
import AboutIndex from "../components/aboutComponents/aboutIndex";
import AboutMissionDetail from "../components/aboutComponents/aboutMissionDetail";
import AboutValues from "../components/aboutComponents/aboutValues";
import Teams from "../pages/Teams";

export const metadata = {
  title: "About Us",
  description:
    "Welcome to Nextcent, where passion meets purpose. Founded 2022, we've embarked on a remarkable journey, shaping our vision into a dynamic reality",
};

const About = () => {
  return (
    <div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto py-28">
        <AboutHero />
        <AboutMission />
        <AboutIndex />
        <AboutMissionDetail />
        <AboutValues />

        <div className=" bg-our-team h-[50vh] pt-14 my-32">
          <Teams />
        </div>
      </div>
    </div>
  );
};

export default About;
