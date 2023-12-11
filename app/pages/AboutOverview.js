import aboutImg from "@/public/about.svg";
import Image from "next/image";
import Link from "next/link";
import AboutIndex from "../components/aboutComponents/aboutIndex";

const About = () => {
  return (
    <div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <Image src={aboutImg} alt="about-overview-img"/>
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:4/5">
              Innovate, Collaborate, Elevate
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              Welcome to Nextcent, where passion meets purpose. Founded 2022,
              we've embarked on a remarkable journey, shaping our vision into a
              dynamic reality. From our humble beginnings to the strides we've
              taken, discover the essence of who we are
            </p>
            <button className="btn-primary">
              <Link href={"/about-us"}>Learn more</Link>
            </button>
          </div>
        </div>
      </div>
      <AboutIndex/>
    </div>
  );
};

export default About;
