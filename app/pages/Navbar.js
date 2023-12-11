"use client";
import { useEffect, useState } from "react";
import NavbarLarge from "../components/navbarComponents/NavbarLarge.module";
import NavbarMobile from "../components/navbarComponents/NavbarMobile.module";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // set toggleMenu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 100 ? setIsSticky(true) : setIsSticky(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  // navitems array
  const navItems = [
    { link: "Home", path: "/" },
    { link: "Service", path: "service" },
    { link: "About", path: "about-us" },
    { link: "Product", path: "product" },
    { link: "Testimonial", path: "testimonial" },
    { link: "FAQ", path: "faq" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border backdrop-blur-md bg-white/30 duration-300"
            : "bg-white "
        }`}
      >
        {/* nav items for large device */}
        <NavbarLarge props={{ navItems, toggleMenu, isMenuOpen }} />

        {/* nav items for mobile devices */}

        <NavbarMobile props={{ navItems, isMenuOpen, isSticky }} />
      </nav>
    </header>
  );
};
export default Navbar;
