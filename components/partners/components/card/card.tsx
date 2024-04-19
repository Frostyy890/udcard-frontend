import React from "react";
import Image from "next/image";
import { Link } from "@/i18n";
import { Partner } from "../../data/partners.data";

interface CardProps {
  cardContent: Partner;
}

const Card: React.FC<CardProps> = ({ cardContent }) => {
  const { img, name, description, discount, link } = cardContent;
  return (
    <div className="bg-white border border-gray-200 shadow mx-auto">
      <Link href={link ? link : "/partners"} className="relative h-48 md:h-60">
        <Image
          src={img ? img : ""}
          alt=""
          className="bg-contain h-48 md:h-60"
        />
        {discount <= 0 ? undefined : (
          <span className="absolute bottom-0 left-[50%] translate-x-[-50%] m-2 rounded-full bg-pink-800 p-2 text-center text-lg border font-medium text-gray-100">
            {discount}% OFF
          </span>
        )}
      </Link>
      <div className="p-5">
        <Link href="#">
          <h5 className="mb-2 md:text-xl text-lg font-bold tracking-tight">
            {name}
          </h5>
        </Link>
        <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400 truncate">
          {description}
        </p>
        <Link
          href="/link"
          className="inline-flex w-full text-sm font-light items-center justify-end text-center"
        >
          Узнать больше
          <ArrowLeftIcon />
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
