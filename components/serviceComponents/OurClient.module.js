"use client"
import Image from "next/image";
import logo1 from "@/public/company-logos/business-insider.png";
import logo2 from "@/public/company-logos/buzzfeed.png";
import logo3 from "@/public/company-logos/cnn.png";
import logo4 from "@/public/company-logos/forbes.png";
import logo5 from "@/public/company-logos/macys.png";
import logo6 from "@/public/company-logos/mens-health.png";
import logo7 from "@/public/company-logos/techcrunch.png";
import logo8 from "@/public/company-logos/mrbeast.png";
import logo9 from "@/public/company-logos/epic-games.png";
import logo10 from "@/public/company-logos/pngegg.png";
import logo11 from "@/public/company-logos/ted.png";
import logo12 from "@/public/company-logos/the-new-york-times.png";
import logo13 from "@/public/company-logos/usa-today.png";

import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";

const OurClient = () => {

  const [gradient, setGradient] = useState(true);
  useEffect(() => {
    const takeGraditent = () => {
      window.innerWidth < 640 ? setGradient(false) : setGradient(true);
    }
    
    takeGraditent();
    window.addEventListener("resize", takeGraditent)

    return () => window.removeEventListener("resize", takeGraditent)
  }, [])

  return (
    <div className="text-center my-8 ">
      <h2 className=" text-3xl sm:text-4xl text-neutralDGrey font-semibold mb-2">
        Our Client
      </h2>
      <p className="text-neutralGrey">
        We have been working with some Fortune 500+ clients
      </p>

      <div className="my-12">
        <Marquee className="mb-[-20px] sm:mb-4 h-32 text-center" gradient={gradient} pauseOnHover>
          <div className="py-8 px-8 rounded shadow mx-4 h-16 w-36 sm:px-10 sm:mx-8 sm:h-24 sm:w-52 flex justify-center items-center">
            <Image src={logo1} alt="client-logo" className="w-auto"/>
          </div>
          <div className="py-8 px-8 rounded shadow mx-4 h-16 w-36 sm:mx-8 sm:h-24 sm:w-52 flex justify-center items-center">
            <Image src={logo2} alt="client-logo" className="w-auto" />
          </div>
          <div className="py-8 px-8 rounded shadow mx-4 h-16 w-36 sm:mx-8 sm:h-24 sm:w-52 flex justify-center items-center">
            <Image src={logo3} alt="client-logo" className="w-12 sm:w-16" />
          </div>
          <div className="py-8 px-8 rounded shadow mx-4 h-16 w-36 sm:px-10 sm:mx-8 sm:h-24 sm:w-52 flex justify-center items-center">
            <Image src={logo4} alt="client-logo" className="w-auto" />
          </div>
          <div className="py-8 px-8 rounded shadow mx-4 h-16 w-36 sm:px-10 sm:mx-8 sm:h-24 sm:w-52 flex justify-center items-center">
            <Image src={logo5} alt="client-logo" className="w-auto" />
          </div>
          <div className="py-8 px-8 rounded shadow mx-4 h-16 w-36 sm:px-10 sm:mx-8 sm:h-24 sm:w-52 flex justify-center items-center">
            <Image src={logo6} alt="client-logo" className="w-auto" />
          </div>
          <div className="py-8 px-8 rounded shadow mx-4 h-16 w-36 sm:px-10 sm:mx-8 sm:h-24 sm:w-52 flex justify-center items-center">
            <Image src={logo7} alt="client-logo" className="w-auto" />
          </div>
        </Marquee>
        <Marquee
          className="h-32 text-center"
          gradient={gradient}
          direction="right"
          pauseOnHover
        >
          <div className="py-8 px-8 rounded shadow mx-4 h-16 w-36 sm:px-10 sm:mx-8 sm:h-24 sm:w-52 flex justify-center items-center">
            <Image src={logo8} alt="client-logo" className="w-auto" />
          </div>
          <div className="py-8 px-8 rounded shadow mx-4 h-16 w-36 sm:px-10 sm:mx-8 sm:h-24 sm:w-52 flex justify-center items-center">
            <Image src={logo9} alt="client-logo" className="w-12 sm:w-auto" />
          </div>
          <div className="py-8 px-8 rounded shadow mx-4 h-16 w-36 sm:px-10 sm:mx-8 sm:h-24 sm:w-52 flex justify-center items-center">
            <Image src={logo10} alt="client-logo" className="w-auto" />
          </div>
          <div className="py-8 px-8 rounded shadow mx-4 h-16 w-36 sm:px-10 sm:mx-8 sm:h-24 sm:w-52 flex justify-center items-center">
            <Image src={logo11} alt="client-logo" className="w-12 sm:w-auto" />
          </div>
          <div className="py-8 px-8 rounded shadow mx-4 h-16 w-36 sm:px-10 sm:mx-8 sm:h-24 sm:w-52 flex justify-center items-center">
            <Image src={logo12} alt="client-logo" className="w-auto" />
          </div>
          <div className="py-8 px-8 rounded shadow mx-4 h-16 w-36 sm:px-10 sm:mx-8 sm:h-24 sm:w-52 flex justify-center items-center">
            <Image src={logo13} alt="client-logo" className="w-auto" />
          </div>
          {/* 
          
          <div className="py-8 px-12 rounded shadow mx-8 h-24 w-52 flex justify-center items-center">
            <Image src={logo13} alt="clilent-logo" />
          </div> */}
        </Marquee>
      </div>
    </div>
  );
};

export default OurClient;
