import React from "react";
import Image from "next/image";
import { Link } from "@/i18n";
import { Partner } from "../../data/partners.data";
import { useTranslations } from "next-intl";

interface CardProps {
  cardContent: Partner;
}

const Card: React.FC<CardProps> = ({ cardContent }) => {
  const { img, name, description, discount, link } = cardContent;
  const t = useTranslations("Second_Page.Card");
  return (
    <div className="bg-white border border-gray-200 shadow mx-auto overflow-hidden md:max-w-[360px] max-w-[310px]">
      <Link href={link ? link : "/partners"}>
        <div className="h-48 md:h-60 relative">
          <Image
            src={img ? img : ""}
            alt=""
            className="bg-cover h-full w-full"
          />
        </div>
      </Link>
      <div className="p-5">
        {discount <= 0 ? undefined : (
          <div className="mb-2 w-full bg-red-800 py-1 rounded-md text-center text-lg border font-medium text-gray-100">
            {t("discount", { discount })}
          </div>
        )}
        <Link href="#">
          <h5 className="mb-2 md:text-xl text-lg font-bold tracking-tight">
            {name}
          </h5>
        </Link>
        <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400 truncate">
          {description}
        </p>
        <Link href="/link">
          <div className="flex text-sm font-light items-center justify-end pb-2">
            {t("learnBtn")}
            <span>
              <ArrowLeftIcon />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export const ArrowLeftIcon = () => {
  return (
    <svg
      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 5h12m0 0L9 1m4 4L9 9"
      />
    </svg>
  );
};

export default Card;
