import Image from "next/image";
import logo1 from "../../../../public/assets/AddText_05-11-05.15.38.jpg";
import Link from "next/link";
const Card = () => {
  return (
    <div className="bg-white border border-gray-200 shadow mx-auto">
      <Link href="#" className="relative">
        <Image src={logo1} alt="" className="h-48 object-cover md:h-60" />
        <span className="absolute bottom-1 right-0 m-2 rounded-full bg-gray-900 p-2 text-center text-sm font-medium text-gray-100">
          5% OFF
        </span>
      </Link>
      <div className="p-5">
        <Link href="#">
          <h5 className="mb-2 md:text-xl text-lg font-bold tracking-tight">
            Azukar Moreno
          </h5>
        </Link>
        <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400 truncate">
          Предлагает свои услуги за выгодную цену и гарантирует качество
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
