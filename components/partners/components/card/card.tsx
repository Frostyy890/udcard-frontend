import Image from "next/image";
import logo1 from "../../../../public/assets/AddText_05-11-05.15.38.jpg";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import Link from "next/link";
const Card = () => {
  return (
    <div className="max-w-sm bg-[#f0f0f0] border border-gray-200 rounded-lg shadow transition-transform duration-300 hover:transform hover:-translate-y-5">
      <Link href="#" className="relative">
        <Image className="rounded-t-lg" src={logo1} alt="" />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black p-2 text-center text-sm font-medium text-white">
          5% OFF
        </span>
      </Link>
      <div className="p-5">
        <Link href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Azukar Moreno
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Предлагает свои услуги за выгодную цену и гарантирует качество
        </p>
        <Link
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-900"
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
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M1 5h12m0 0L9 1m4 4L9 9"
      />
    </svg>
  );
};

export default Card;
