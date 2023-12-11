import { Link } from "react-scroll";

const NavbarMobile = ({ props: { navItems, isMenuOpen } }) => {
  return (
    <div
      className={`space-y-4 px-4 mt-16 py-7 bg-gray-300 ${
        isMenuOpen
          ? "  block fixed top-0 right-0 left-0 md:hidden"
          : "hidden"
      }`}
    >
      {navItems.map(({ link, path }) => (
        <Link
          to={path}
          spy={true}
          smooth={true}
          offset={-100}
          key={path}
          className="block text-base text-gray900 hover:text-brandDark first:font-medium"
        >
          {link}
        </Link>
      ))}
    </div>
  );
};

export default NavbarMobile;
