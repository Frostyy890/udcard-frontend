import React from "react";
// ICONS
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { useTranslations } from "next-intl";

export interface descCard {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const WhyUs = () => {
  const defaultIconSize = { fontSize: "5rem" };
  const t = useTranslations("First_Page.Why_us");
  const cards: descCard[] = [
    {
      icon: <TrendingUpIcon sx={defaultIconSize} />,
      title: t("first_block_header"),
      desc: t("first_block"),
    },
    {
      icon: <AssignmentIcon sx={defaultIconSize} />,
      title: t("second_block_header"),
      desc: t("second_block"),
    },
    {
      icon: <SupportAgentIcon sx={defaultIconSize} />,
      title: t("third_block_header"),
      desc: t("third_block"),
    },
  ];
  return (
    <section id="whyus" className="py-[11.25rem] bg-gray-900">
      <div className="max-w-[1200px] mx-auto text-center text-gray-100">
        <div className="mb-24 max-w-[560px] mx-auto">
          <h1 className="text-4xl font-bold mb-8">{t("header")}</h1>
          <p className="text-2xl">
            {t("body")}
          </p>
        </div>
        <div className="cards flex flex-col md:gap-5 md:flex-row justify-between items-center gap-8">
          {cards.map((card, index) => (
            <div key={index} className="card max-w-[360px]">
              <div>{card.icon}</div>
              <h2 className="py-6 font-bold text-lg">{card.title}</h2>
              <p className="text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
