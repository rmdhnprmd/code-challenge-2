import About from "./pages/AboutOverview";
import HomeHero from "./pages/HomeHero";
// import Loader from "./pages/Loader";
import Navbar from "./pages/Navbar";
import Products from "./pages/Products";
// import { useEffect, useState } from "react";
import Service from "./pages/Service";
import Team from "./pages/Team";
import Testimonial from "./pages/Testimonial";

export default function Home() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fakeDataFetch = () => {
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 1200);
  //   };

  //   fakeDataFetch();
  // }, []);
  return (
    //   <Loader />
    // ) : (
    //   <main>
    //     <Navbar />
    //     <HomeHero />
    //     <Service />
    //   </main>

    <main>
      <Navbar />
      <HomeHero />
      <Service />
      <About />
      <Products />
      <Testimonial />
      <Team />
    </main>
  );
}
