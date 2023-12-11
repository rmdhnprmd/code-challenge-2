import { Link } from "react-scroll";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { FaXmark, FaBars } from "react-icons/fa6";

const NavbarLarge = ({ props: {navItems, toggleMenu, isMenuOpen} }) => {
  return (
    <div className="flex justify-between items-center text-base gap-8">
      <a href="/" className="text-2xl font-semibold flex items-center space-x-3">
        <Image
          src={logo}
          alt="logo"
          className="max-w-10 inline-block items-center"
        />
        <span className="text-[#263238]">NEXCENT</span>
      </a>

      {/* nav items for large device */}
      <ul className="md:flex space-x-12 hidden">
        {navItems.map(({ link, path }) => (
          <Link
            to={path}
            spy={true}
            smooth={true}
            offset={-100}
            key={path}
            className="block text-base text-gray900 hover:text-brandPrimary first:font-medium"
          >
            {link}
          </Link>
        ))}
      </ul>

      {/* btn for large devices */}
      <div className="space-x-12 hidden lg:flex items-center">
        <a
          href="/"
          className="hidden lg:flex items-center text-brandPrimary hover:text-gray900"
        >
          Login
        </a>
        <button className="min-w-fit bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-brandDark">
          Sign up
        </button>
      </div>

      {/*menu btn for only mobile devices*/}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-neutralDGrey focus:outline-none focus:text-gray-500"
        >
          {isMenuOpen ? (
            <FaXmark className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>
      </div>
    </div>
  );
};

export default NavbarLarge;
