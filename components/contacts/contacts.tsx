"use client";
import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import Link from "next/link";

const Contacts = () => {
  const defaultIconSize = {
    fontSize: "2rem",
  };
  return (
    <section id="contacts" className="border-t-2">
      <div className="py-[11.25rem] px-4 text-center mx-auto">
        <h1 className="md:text-4xl text-2xl font-bold">+998 33 001 28 88</h1>
        <h1 className="md:text-4xl text-2xl font-bold">UDCard@gmail.com</h1>
        <p className="md:text-lg text-base text-light my-10">
          Tashkent. Labzak 2A
        </p>
        <div className="social flex gap-x-3 justify-center">
          <Link href="#facebook">
            <FacebookOutlinedIcon sx={defaultIconSize} />
          </Link>
          <Link href="#instagram">
            <InstagramIcon sx={defaultIconSize} />
          </Link>
          <Link href="#telegram">
            <TelegramIcon sx={defaultIconSize} />
          </Link>
          <Link href="#998330012888">
            <PhoneInTalkIcon sx={defaultIconSize} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
