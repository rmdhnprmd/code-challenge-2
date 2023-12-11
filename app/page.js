
import About from "./pages/AboutOverview";
import MyFooter from "./pages/Footer";
import HomeHero from "./pages/HomeHero";
import Navbar from "./pages/Navbar";
import Products from "./pages/Products";
import Service from "./pages/Service";
import Team from "./pages/Team";
import Testimonial from "./pages/Testimonial";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomeHero />
      <Service />
      <About />
      <Products />
      <Testimonial />
      <Team />
      <MyFooter />
    </main>
  );
}
