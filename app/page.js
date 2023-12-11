import About from "./pages/AboutOverview";
import HomeHero from "./pages/HomeHero";
import Products from "./pages/Products";
import Service from "./pages/Service";
import Teams from "./pages/Teams";
import Testimonial from "./pages/Testimonial";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <Service />
      <About />
      <Products />
      <Testimonial />
      <Teams />
    </main>
  );
}
