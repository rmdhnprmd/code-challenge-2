"use client";

import { Carousel } from "flowbite-react";
import banner1 from "/public/Illustration.svg";
import SlideComponent from "../components/heroComponents/Slide.module";

const HomeHero = () => {
  return (
    <div className="bg-neutralSilver">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <SlideComponent
            className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12"
            heading="Lesson and insights"
            spanText="from 8 years"
            text="Where to grow your business as a photographer: site or social media?"
            imgHero={banner1}
          />

          <SlideComponent
            className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12"
            heading="Learn and Earn Money"
            spanText="in 4 Months"
            text="Where to grow your business as a photographer: site or social media?"
            imgHero={banner1}
          />

          <SlideComponent
            className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12"
            heading="Lesson and insights"
            spanText="from 8 years"
            text="Where to grow your business as a photographer: site or social media?"
            imgHero={banner1}
          />
        </Carousel>
      </div>
    </div>
  );
};

export default HomeHero;
