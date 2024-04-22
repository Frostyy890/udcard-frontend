"use client";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { Link } from "@/i18n";

const Contacts = () => {
  const defaultIconSize = {
    fontSize: "2rem",
  };
  return (
    <section id="contacts" className="border-t-2">
      <div className="py-[11.25rem] px-4 text-center mx-auto">
        <h1 className="md:text-4xl text-2xl font-bold">+99894 673-99-99</h1>
        <h1 className="md:text-4xl text-2xl font-bold">UDCard@gmail.com</h1>
        <p className="md:text-lg text-base text-light my-10">
          Tashkent. Labzak 2A
        </p>
        <div className="social flex gap-x-3 justify-center">
          <Link
            href=""
            onClick={() => {
              window.alert("Coming soon...");
            }}
          >
            <FacebookOutlinedIcon sx={defaultIconSize} />
          </Link>
          <Link
            href="https://www.instagram.com/udcard?igsh=NjA1cWd6cmIzZGN1"
            target="_blank"
          >
            <InstagramIcon sx={defaultIconSize} />
          </Link>
          <Link
            href=""
            onClick={() => {
              window.alert("Coming soon...");
            }}
          >
            <TelegramIcon sx={defaultIconSize} />
          </Link>
          <Link href="tel:+998946739999">
            <PhoneInTalkIcon sx={defaultIconSize} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
