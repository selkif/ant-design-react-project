import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/website/trank-logo.webp";
import DarkMode from "./DarkMode";
import { Menu } from "antd"; // Import Menu from antd
import { Link } from "react-router-dom";

export const MenuLinks = [
  {
    id: 1,
    name: "Home ",
    link: "/",
  },
  {
    id: 2,
    name: "service",
    link: "/#services",
  },
  {
    id: 3,
    name: "Price",
    link: "/#price",
  },
  {
    id: 4,
    name: "FAQ",
    link: "/#faq",
  },
];
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div
      className="relative z-10 w-full bg-orange-100 dark:text-white duration-300
    "
    >
      <div className="container py-3 md:py-2">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <img
            src={Logo}
            alt="logo"
            className="md:cursor-pointer h-[30px] w-[90px]"
          />
          {/* Desktop view Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center gap-8">
              <Menu
                mode="horizontal"
                className="flex items-center bg-orange-100 gap-8"
              >
                {MenuLinks.map(({ id, name, link }) => (
                  <Menu.Item key={id} className="py-4">
                    <a
                      href={link}
                      className=" text-lg font-medium   hover:border-primary transition-colors duration-500  "
                    >
                      {name}
                    </a>
                  </Menu.Item>
                ))}
              </Menu>
              <Link
                to="/users"
                className="primary-btn bg-black p-4 rounded-full text-white"
              >
                Employees
              </Link>
            </div>
          </nav>
          {/* Mobile view Drawer  */}
          <div className="flex items-center gap-4 md:hidden ">
            /*
            <DarkMode />
            */
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
