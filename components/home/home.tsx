import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Link from "next/link";

const Home = () => {
  return (
    <section id="#" className="h-[60rem] bg-black flex flex-col py-4">
      <div className="flex h-full items-center justify-center flex-col text-white gap-y-[6rem]">
        <h1 className="text-8xl font-bold">UDC</h1>
        <div className="flex flex-col items-center gap-y-8">
          <h3 className="font-bold">Первый дисконт сервер для туристов</h3>
          <p className="text-sm font-light">
            Уникальный опыт для путешественников
          </p>
        </div>
      </div>
      <Link href="#about" className="text-center animate-bounce">
        <ArrowDownwardIcon sx={{ color: "white", fontSize: "3rem" }} />
      </Link>
    </section>
  );
};

export default Home;
