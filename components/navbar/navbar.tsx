"use client";
import { Link, usePathname } from "@/i18n";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { translateSectionsTo } from "./navbar.data";
import "./navbar.styles.css";
import LangPicker from "./lang-picker";
import { useLocale } from "next-intl";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const handleNavOpen = () => {
    setIsOpen(!isOpen);
  };
  //TRANSLATION
  const locale = useLocale();
  const NavLinks = translateSectionsTo(locale);

  return (
    <nav className="fixed top-0 w-full shadow-xl z-[999] bg-white text-gray-900">
      <div className="flex justify-between h-16 items-center px-8 py-2 2xl:px-16">
        <Link href="/" className="font-bold uppercase text-xl">
          UDC
        </Link>
        <ul className="md:flex hidden gap-3 items-center">
          <li>
            <LangPicker />
          </li>
          {NavLinks.map((section, index) => (
            <li key={index}>
              <Link
                className=" hover:text-gray-400 duration-[400ms]"
                href={section.path}
              >
                {section.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* MOBILE */}
        <div className="md:hidden flex items-center gap-2">
          <LangPicker />
          <div
            className={`md:hidden hamburger ${isOpen ? "open" : ""}`}
            onClick={handleNavOpen}
          >
            {isOpen ? (
              <CloseIcon sx={{ fontSize: "2rem" }} />
            ) : (
              <MenuIcon sx={{ fontSize: "2rem" }} />
            )}
          </div>
        </div>
      </div>
      <div
        className={
          isOpen
            ? "top-16 w-full md:hidden bg-gray-900 text-gray-100 h-screen p-10 ease-in duration-[400ms]"
            : "hidden w-full p-10 ease-in duration-[400ms]"
        }
      >
        <div className="flex items-center justify-center">
          <ul className="flex gap-8 flex-col">
            {NavLinks.map((section, index) => (
              <li onClick={() => setIsOpen(!isOpen)} key={index}>
                <Link
                  className=" hover:text-gray-400 text-lg duration-[400ms]"
                  href={section.path}
                >
                  {section.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
