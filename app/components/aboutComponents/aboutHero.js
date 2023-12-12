import aboutImg from "@/public/about.svg";
import Image from "next/image";

const AboutHero = () => {
  return (
    <div className="max-w-screen-2xl my-auto   flex items-center justify-center">
      <div className=" p-5 rounded-lg border border-black flex flex-col items-center md:flex md:flex-row md:items-center md:justify-between  ">
      <div>
        <Image src={aboutImg} alt="about image" width={450} height={450} />
      </div>
      <div className="md:w-3/5 ">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:4/5">
          About Us
        </h2>
        <p className="md:w-3/4 text-lg text-neutralGrey mb-8">
          Welcome to Nextcent, where passion meets purpose. Founded 2022, we've
          embarked on a remarkable journey, shaping our vision into a dynamic
          reality. From our humble beginnings to the strides we've taken,
          discover the essence of who we are
        </p>
      </div>
    </div>
    </div>
  );
};

export default AboutHero;
