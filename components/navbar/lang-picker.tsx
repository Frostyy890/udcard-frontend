"use client";
import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link, usePathname } from "@/i18n";
import { useLocale } from "next-intl";

const LangPicker = () => {
  const pathname = usePathname();
  const currentlocale = useLocale();
  const languages = ["RU", "EN"];
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const selectedOption = currentlocale.toUpperCase();
  const nonSelectedOptions = languages.filter(
    (option) => option !== selectedOption
  );
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  const LANGUAGE_SELECTOR_ID = "language-selector";
  React.useEffect(() => {
    const handleWindowClick = (event: any) => {
      const target = event.target.closest("button");
      if (target && target.id === LANGUAGE_SELECTOR_ID) {
        return;
      }
      setIsOpen(false);
    };
    window.addEventListener("click", handleWindowClick);
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);
  return (
    <div className="relative rounded-md">
      <div className="inline-flex items-center">
        <button onClick={handleClick} id={LANGUAGE_SELECTOR_ID}>
          <ExpandMoreIcon
            className={`transform transition duration-500 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
          <span>{selectedOption}</span>
          <LanguageIcon />
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-full bg-white px-1 absolute border-2 shadow-md text-center flex flex-col gap-1 transition-all duration-300 ease-in-out`}
      >
        {nonSelectedOptions.map((option, index) => (
          <Link href={pathname} key={index} locale={option.toLowerCase()}>
            <span>{option}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LangPicker;
